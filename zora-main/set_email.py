import random
import imaplib
import email
import time

import requests
from email.header import decode_header
import config
from datetime import datetime
from loguru import logger
from eth_account import Account
from eth_account.messages import encode_defunct
from termcolor import cprint


class Zora:

    def __init__(self, private_key, proxy):
        if proxy is not None and len(proxy) > 4 and proxy[:4] != 'http':
            proxy = 'http://' + proxy
        self.proxy = proxy
        self.sess = requests.Session()
        self.sess.proxies = {
            'http': proxy,
            'https': proxy,
        }
        self.private_key = private_key
        self.account = Account().from_key(private_key)
        self.address = self.account.address
        self.cookies = {'wallet_address': self.address}

    def set_wallet_cookie(self, resp):
        wallet_cookie = resp.headers.get('set-cookie')
        wallet_cookie = wallet_cookie[wallet_cookie.find('=') + 1:wallet_cookie.find(';')]
        self.cookies.update({'wallet': wallet_cookie})

    def get_nonce(self):
        resp = self.sess.get('https://zora.co/api/accounts/nonce', cookies=self.cookies)
        if resp.status_code != 200:
            raise Exception(f'Get nonce bas status code: {resp.status_code}, response = {resp.text}')
        try:
            nonce = resp.json()['nonce']
            self.set_wallet_cookie(resp)
            return nonce
        except Exception as e:
            raise Exception(f'Get nonce bad response: response = {resp.text}: {str(e)}')

    def sign_in(self):
        issued_at = datetime.now().strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + 'Z'

        nonce = self.get_nonce()

        statement = f'Welcome to Zora!\n\n' \
                    f'By proceeding, you accept Zora’s Terms of Service ' \
                    f'(https://support.zora.co/en/articles/6383293-terms-of-service) ' \
                    f'and Privacy Policy (https://support.zora.co/en/articles/6383373-zora-privacy-policy)'

        msg = f'zora.co wants you to sign in with your Ethereum account:\n' \
              f'{self.address}\n\n' \
              f'{statement}\n\n' \
              f'URI: https://zora.co\n' \
              f'Version: 1\n' \
              f'Chain ID: 1\n' \
              f'Nonce: {nonce}\n' \
              f'Issued At: {issued_at}'
        message = encode_defunct(text=msg)
        signature = self.account.sign_message(message).signature.hex()

        resp = self.sess.post('https://zora.co/api/accounts/verify', json={
            'message': {
                'address': self.address,
                'chainId': 1,
                'domain': 'zora.co',
                'issuedAt': issued_at,
                'nonce': nonce,
                'statement': statement,
                'uri': 'https://zora.co',
                'version': '1',
            },
            'signature': signature,
        }, cookies=self.cookies)
        if resp.status_code != 200:
            raise Exception(f'Sign in bas status code: {resp.status_code}, response = {resp.text}')
        try:
            self.set_wallet_cookie(resp)
            return resp.json()['ok']
        except Exception as e:
            raise Exception(f'Get nonce bad response: response = {resp.text}: {str(e)}')

    def ensure_authorized(self):
        if self.cookies.get('wallet') is None:
            self.sign_in()

    def get_existed_email(self):
        self.ensure_authorized()
        resp = self.sess.get('https://zora.co/api/accounts/me', cookies=self.cookies)
        if resp.status_code != 200:
            raise Exception(f'Get account info bas status code: {resp.status_code}, response = {resp.text}')
        try:
            return resp.json()['account']['email_address'], resp.json()['account']['status'] == 'verified'
        except Exception as e:
            raise Exception(f'Get account info bad response: response = {resp.text}: {str(e)}')

    def set_email(self, email_info):
        self.ensure_authorized()
        email_username, _ = tuple(email_info.split(':'))
        existed_email, already_verified = self.get_existed_email()
        if already_verified:
            return True, True
        if existed_email == '':
            resp = self.sess.post('https://zora.co/api/accounts/new', json={
                'email_address': email_username,
                'notification_preferences': {
                    'creator': 'on',
                    'marketing': 'on',
                }
            }, cookies=self.cookies)
        elif existed_email != email_username:
            resp = self.sess.post('https://zora.co/api/accounts/update-email', json={
                'email': email_username,
            }, cookies=self.cookies)
        else:
            logger.info("This email was already set")
            return True, False
        if resp.status_code != 200:
            raise Exception(f'Set email bas status code: {resp.status_code}, response = {resp.text}')
        try:
            return resp.json()['ok'], False
        except Exception as e:
            raise Exception(f'Set email bad response: response = {resp.text}: {str(e)}')

    def verify_email(self, email_info):
        self.ensure_authorized()
        email_username, email_password = tuple(email_info.split(':'))
        imap = imaplib.IMAP4_SSL(config.IMAP_SERVER)
        imap.login(email_username, email_password)
        _, messages = imap.select('INBOX', readonly=True)
        msg_cnt = int(messages[0])
        for i in range(msg_cnt, 0, -1):
            res, msg = imap.fetch(str(i), '(RFC822)')
            raw_email = msg[0][1]
            msg = email.message_from_bytes(raw_email)
            subject, encoding = decode_header(msg['Subject'])[0]
            if isinstance(subject, bytes):
                subject = subject.decode(encoding)
            if subject != 'Verify your Zora account':
                continue
            body = msg.get_payload(decode=True).decode()
            body = body[body.find('Please verify your email'):]
            body = body[body.find('href') + 6:]
            link = body[:body.find('"')]
            token = link[link.rfind('=') + 1:]

            resp = self.sess.post('https://zora.co/api/accounts/email-verify', json={'token': token},
                                  cookies=self.cookies)
            if resp.status_code != 200:
                raise Exception(f'Verify email bas status code: {resp.status_code}, response = {resp.text}')
            try:
                return resp.json()['ok']
            except Exception as e:
                raise Exception(f'Verify email bad response: response = {resp.text}: {str(e)}')
        return False


def main():
    random.seed(int(datetime.now().timestamp()))

    with open('files/wallets.txt', 'r', encoding='utf-8') as file:
        wallets = file.read().splitlines()
    with open('files/proxies.txt', 'r', encoding='utf-8') as file:
        proxies = file.read().splitlines()
    with open('files/emails.txt', 'r', encoding='utf-8') as file:
        emails = file.read().splitlines()

    if len(proxies) == 0:
        proxies = [None] * len(wallets)
    if len(proxies) != len(wallets):
        cprint('Proxies count doesn\'t match wallets count. Add proxies or leave proxies file empty', 'red')
        return
    if len(emails) != len(wallets):
        cprint('Emails count doesn\'t match wallets count', 'red')
        return

    for wallet, proxy, email_info in zip(wallets, proxies, emails):
        if wallet.find(';') == -1:
            key = wallet
        else:
            key = wallet.split(';')[1]

        client = Zora(key, proxy)

        logger.info(f'Processing {client.address}')

        set_success, verified = client.set_email(email_info)
        if verified:
            logger.success(f'Already verified')
            continue
        if not set_success:
            logger.error(f'Can\'t set email')
            continue

        logger.info('Email was set')

        time.sleep(random.uniform(9, 11))

        verified = client.verify_email(email_info)
        t = 0
        while not verified and t < 120:
            logger.error('Can\'t find verify email. Waiting for 10 secs')
            t += 10
            time.sleep(t)
            verified = client.verify_email(email_info)
        if verified:
            logger.success('Email verified')


if __name__ == '__main__':
    cprint('###############################################################', 'cyan')
    cprint('#################', 'cyan', end='')
    cprint(' https://t.me/thelaziestcoder ', 'magenta', end='')
    cprint('################', 'cyan')
    cprint('#################', 'cyan', end='')
    cprint(' https://t.me/thelaziestcoder ', 'magenta', end='')
    cprint('################', 'cyan')
    cprint('#################', 'cyan', end='')
    cprint(' https://t.me/thelaziestcoder ', 'magenta', end='')
    cprint('################', 'cyan')
    cprint('###############################################################\n', 'cyan')

    main()
