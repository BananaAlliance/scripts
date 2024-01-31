const puppeteer = require('puppeteer-extra')
const fs = require('fs-extra');
const path = require('path');
const tmp = require('tmp');
const readline = require('readline');
const inquirer = require('inquirer');


const ProxyChain = require('proxy-chain');

tmp.setGracefulCleanup();

let browser;

const keysFilePath = path.join(__dirname, 'solana_keys', 'solana-keys.json');

const filePath = './url.json';


async function readFromFile(filePath) {
  try {
      const data = await fs.readFile(filePath, 'utf8'); // Читаем файл с кодировкой utf8
      return data; // Возвращаем содержимое файла
  } catch (error) {
      console.error('Ошибка при чтении файла:', error);
      return null; // Возвращаем null в случае ошибки
  }
}
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

async function askToSaveInviteCodes() {
  const questions = [{
      type: 'confirm',
      name: 'saveInviteCodes',
      message: 'Хотите сохранить инвайт-коды в файл?',
      default: false
  }];

  const answers = await inquirer.prompt(questions);
  return answers.saveInviteCodes;
}

async function processUrl(phantomPage, filePath) {
  const currentUrl = await getNextUrl(filePath);
  if (!currentUrl) {
      console.log('Все URL обработаны или список пуст.');
      return;
  }

  await phantomPage.goto('https://' + currentUrl);
  await clickButtonWithText(phantomPage, 'Enter');
  await phantomPage.waitForTimeout(1000);
  const codeUsed = await checkIfCodeUsed(phantomPage);

  if (codeUsed) {
      console.log('Код уже использован. Переходим к следующему URL.');
      await markUrlAsProcessed(filePath, currentUrl);
      // Рекурсивный вызов функции для обработки следующего URL
      await processUrl(phantomPage, filePath);
  } else {
      console.log('Код не использован. Продолжение обработки текущего URL...');
      return currentUrl;
    }
}

async function checkIfCodeUsed(page) {
  try {
      await page.waitForFunction(
          () => document.body.innerText.includes("Code already used"),
          { timeout: 5000, polling: 500 } // Проверка каждые 500 мс в течение 5 секунд
      );
      console.log('Реферальный код уже использован.');
      return true; // Возвращаем true, если код использован
  } catch (error) {
      console.log('Реферальный код не использован или превышено время ожидания.');
      return false; // Возвращаем false, если код не использован или время ожидания истекло
  }
}


async function getRandomProxy() {
  try {
    const filePath = path.join(__dirname, 'proxy.txt'); // Путь к файлу proxy.txt

    // Проверяем, существует ли файл
    if (!fs.existsSync(filePath)) {
      console.log('Файл proxy.txt не найден.');
      return false;
    }

    const data = fs.readFileSync(filePath, 'utf8'); // Чтение содержимого файла

    // Проверяем, не пустой ли файл
    if (!data.trim()) {
      console.log('Файл proxy.txt пуст.');
      return false;
    }

    const lines = data.trim().split('\n'); // Разбиваем на строки
    const randomLine = lines[Math.floor(Math.random() * lines.length)].trim(); // Выбираем случайную строку

    // Проверяем формат строки
    if (!randomLine.match(/^\d+\.\d+\.\d+\.\d+:\d+:[^:]+:[^:]+$/)) {
      console.log('Некорректный формат данных в файле proxy.txt');
      return false;
    }

    const [host, port, user, password] = randomLine.split(':'); // Разбиваем строку на части
    const proxyUrl = `http://${user}:${password}@${host}:${port}`; // Формируем строку прокси

    return proxyUrl;
  } catch (error) {
    console.log('Ошибка при получении прокси:', error.message);
    return false;
  }
}

async function readKeysFromFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Ошибка при чтении файла:', error);
    return [];
  }
}

async function writeKeysToFile(filePath, keys) {
  try {
    const data = JSON.stringify(keys, null, 2);
    fs.writeFileSync(filePath, data, 'utf8');
    console.log('Данные сохранены в файл:', filePath);
  } catch (error) {
    console.error('Ошибка при записи в файл:', error);
  }
}


async function pasteFromClipboardAndSave(page, phrase) {
  //const clipboardy = await import('clipboardy');


  //const textFromClipboard = clipboardy.default.readSync(); // Чтение текста из буфера обмена
  const words = phrase.split(" "); // Разбиваем строку на слова

  for (let i = 0; i < words.length; i++) {
    const selector = `#mnemonic-input-${i}`;
    await page.waitForSelector(selector, { visible: true });
    await page.focus(selector);
    await page.keyboard.type(words[i]);
  }

  // Чтение существующих ключей
  const existingKeys = await readKeysFromFile(keysFilePath);

  // Добавление нового ключа
  existingKeys.push(phrase);

  // Сохранение обновленных ключей
  

  return existingKeys;
}




function generateUniqueUsername() {
  const adjectives = ["Swift", "Sly", "Mighty", "Ancient", "Mystic", "Silent", "Wandering"];
  const nouns = ["Wolf", "Raven", "Tree", "River", "Mountain", "Dragon", "Phoenix"];
  const numbers = () => Math.floor(Math.random() * 100);
  const specialChars = ["_", "-", "."];
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const getRandomChar = () => randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  const getDateString = () => Date.now().toString(36); // Конвертация текущего времени в миллисекундах в строку
  const shuffleString = (str) => str.split('').sort(() => 0.5 - Math.random()).join('');

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = numbers();
  const specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
  const randomChar = getRandomChar();
  const dateString = getDateString();

  let username = `${adj}${specialChar}${noun}${num}${randomChar}${dateString}`;
  username = shuffleString(username); // Перемешиваем символы для увеличения уникальности

  return username;
}




// Функция для чтения данных из JSON-файла
async function readJson(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Ошибка при чтении файла:', error);
    return null;
  }
}

// Функция для записи данных в JSON-файл
async function writeJson(filePath, data) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Ошибка при записи в файл:', error);
  }
}

// Функция для получения следующего необработанного URL
async function getNextUrl(filePath) {
  const data = await readJson(filePath);
  if (!data || data.unused.length === 0) {
    console.log('Нет доступных URL для обработки.');
    return null;
  }

  // Возвращаем первый необработанный URL, не изменяя файл
  return data.unused[0];
}

// Функция для отметки URL как обработанного
async function markUrlAsProcessed(filePath, url) {
  const data = await readJson(filePath);
  if (!data) return;

  // Удаляем URL из списка необработанных и добавляем в обработанные
  const index = data.unused.indexOf(url);
  if (index > -1) {
    data.unused.splice(index, 1);
    data.used.push(url);

    // Обновляем данные в файле
    await writeJson(filePath, data);
    console.log(`URL отмечен как обработанный: ${url}`);
  }
}

async function extractAndSaveCodes(page, filePath) {
  // Коды, которые нужно исключить
  const excludeCodes = [
    "AIRDR", "LEADE", "RBOAR", "ABOUT", "BOOST", "INVIT", "GGDOT", "MUSIC"
  ];

  // Извлекаем коды, используя регулярное выражение в контексте страницы
  const codes = await page.evaluate(() => {
    const regex = /[A-Z0-9]{5}/g; // Регулярное выражение для поиска кодов
    const textContent = document.body.innerText;
    const matches = textContent.match(regex);
    return matches || []; // Возвращаем пустой массив, если совпадений нет
  });

  // Фильтруем коды, исключая те, что находятся в excludeCodes
  const newCodes = codes.filter(code => !excludeCodes.includes(code));

  // Преобразование кодов в формат "gg.zip/CODE"
  const formattedCodes = newCodes.map(code => `gg.zip/${code}`);

  try {
    // Чтение и обновление файла JSON
    let data = { unused: [], used: [] };
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      data = JSON.parse(fileContent);
    } catch (error) {
      console.log('Файл не найден или пуст, создаем новый');
    }

    // Обновляем неиспользованные коды, исключая дубликаты
    const updatedCodes = Array.from(new Set([...data.unused, ...formattedCodes]));
    data.unused = updatedCodes;

    // Сохраняем обновленные данные обратно в файл
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Коды сохранены в файл:', filePath);
  } catch (error) {
    console.error('Ошибка при сохранении файла:', error);
  }
}


async function clickButtonWithText(page, text, attempts = 3, delay = 1000) {
  for (let i = 0; i < attempts; i++) {
      try {
          // Поиск кнопки
          const button = await page.waitForXPath(`//button[contains(., '${text}')]`, { timeout: delay });
          if (button) {
              await button.click();
              console.log('Кликнуто на кнопку с текстом:', text);
              return;
          }
      } catch (error) {
          if (i < attempts - 1) {
              console.log(`Попытка ${i + 1} из ${attempts}. Кнопка с текстом "${text}" не найдена. Повторная попытка...`);
              // Ожидаем перед следующей попыткой
              await page.waitForTimeout(delay);
          } else {
              console.error(`Ошибка: кнопка с текстом "${text}" не найдена после ${attempts} попыток.`);
          }
      }
  }
}

async function clickLinkWithText(page, text) {
  const link = await page.waitForXPath(`//a[contains(., '${text}')]`);
  if (link) {
      await link.click();
  }
}
async function clickButtonByText(page, buttonText) {
  try {
      await page.waitForXPath(`//button[contains(., '${buttonText}')]`);
      const buttons = await page.$x(`//button[contains(., '${buttonText}')]`);
      if (buttons.length > 0) {
          await buttons[0].click();
          console.log(`Клик по кнопке с текстом '${buttonText}' выполнен`);
      } else {
          console.log(`Кнопка с текстом '${buttonText}' не найдена`);
      }
  } catch (error) {
      console.error(`Ошибка при попытке кликнуть на кнопку с текстом '${buttonText}':`, error);
  }
}


// Функция для чтения данных из JSON файла
async function readJson(filePath) {
  try {
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
  } catch (error) {
      console.error(`Ошибка при чтении файла: ${error.message}`);
      return null;
  }
}

// Функция для записи данных в JSON файл
async function writeJson(filePath, data) {
  try {
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(filePath, jsonData, 'utf8');
  } catch (error) {
      console.error(`Ошибка при записи в файл: ${error.message}`);
  }
}




  async function typeInSelector(page, selector, text) {
    await page.waitForSelector(selector);
    await page.type(selector, text);
}
  


  async function waitForAndClick(page, selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
}





const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));



const pathToExtension = {
    mm: path.join(__dirname, 'MetaMask'),
    polkadot: path.join(__dirname, 'Polkadot'),
    rabby:  path.join(__dirname, 'Rabby'),
    hcaptcha: path.join(__dirname, 'hcaptcha')
}



async function main() {
  try {
    // Ваш код здесь
    console.log('Выполнение основного блока кода');
    //const balance = await ac.getBalance();
  //console.log(`my balance is $${balance}`);

    
    



  

    const solflare = require('path').join(__dirname, 'solflare');

     // Аргументы запуска Puppeteer
     const puppeteerArgs = [
      '--disable-web-security',
      `--load-extension=${[solflare]}`,
      '--no-sandbox'
  ];
    
    const oldProxyUrl = await getRandomProxy();
    if (oldProxyUrl) {
      console.log('Прокси найдены')
      const newProxyUrl = await ProxyChain.anonymizeProxy(oldProxyUrl);

      puppeteerArgs.push(`--proxy-server=${newProxyUrl}`);

  

    }

    

  

     // Запуск браузера
      browser = await puppeteer.launch({
      defaultViewport: null,
      headless: "new",
      ignoreHTTPSErrors: true,
      args: puppeteerArgs,
      devtools: false // Включите DevTools для отладки
  });




  browser.on('targetcreated', async (target) => {
    if (target.type() === 'page') {
        const popup = await target.page();

        if (popup.url().includes('confirm_popup.html')) {
            try {
                // Ожидание перед попыткой клика
                await popup.waitForTimeout(2000);

                const clickPromise = clickButtonByText(popup, 'Connect');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 5000));

                const result = await Promise.race([clickPromise, timeoutPromise]);

                if (result === undefined) {
                    // Таймер истек, кнопка не найдена
                    console.log('Кнопка "Connect" не найдена, перезагрузка страницы...');
                    await popup.reload();
                    await popup.waitForTimeout(2000); // Ожидание после перезагрузки
                    await clickButtonByText(popup, 'Connect'); // Повторная попытка клика
                }

            } catch (error) {
                console.error('Ошибка:', error);
            }

        }
    }
});


 

  const page = await browser.newPage();


  await page.waitForTimeout(2000);
  //await page.setUserAgent(userAgent);

let phantomUrl;


  const pages = await browser.pages();
     

      for (const page of pages) {
          const url = page.url();
          console.log(`Проверяем страницу: ${url}`);

          if (url.startsWith('chrome-extension://')) {
              phantomUrl = url;
              console.log(`Найден URL расширения Solflare: ${phantomUrl}, закрываем страницу...`);
              await page.close();
              break;
          }
      }



  const phantomPage = await browser.newPage();
  await page._client().send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: './tmp'
});
  await phantomPage.goto(phantomUrl);

  await phantomPage.waitForTimeout(5000);


  await clickButtonWithText(phantomPage, 'I NEED A NEW WALLET');

  await phantomPage.waitForTimeout(2000);

  await clickLinkWithText(phantomPage, 'Download');



  await clickButtonWithText(phantomPage, 'I SAVED MY RECOVERY PHRASE');

  const phrase = await readFromFile('./tmp/solflare-backup.txt');

  
let existingKeys;
  if (phrase) {
    existingKeys = await pasteFromClipboardAndSave(phantomPage, phrase);
  }

 



    await clickButtonWithText(phantomPage, 'Continue');

  


    await typeInSelector(phantomPage, 'input[name="password"]', '111111');

    await typeInSelector(phantomPage, 'input[name="password2"]', '111111');


    await clickButtonWithText(phantomPage, 'Continue');

    await clickButtonWithText(phantomPage, 'Continue');


    const currentUrl = await processUrl(phantomPage, filePath);
  
  

  await phantomPage.waitForSelector('.ConnectWallet_button__FgMEz'); // Увеличенное время ожидания

  await phantomPage.click('.ConnectWallet_button__FgMEz');
  await phantomPage.waitForTimeout(2000);


  await phantomPage.waitForSelector('button.wallet-adapter-button ');
  await phantomPage.waitForTimeout(1000);

  // Увеличенное время ожидания

  await phantomPage.click('button.wallet-adapter-button ');

  await phantomPage.waitForTimeout(8000);

  const username = generateUniqueUsername();

  await typeInSelector(phantomPage, 'input[placeholder="Enter your username"]', username);

  await clickButtonWithText(phantomPage, 'Set Username');

  await phantomPage.waitForTimeout(2000);


  await clickButtonWithText(phantomPage, 'Follow');

  await phantomPage.waitForTimeout(3000);


  let pagesSet;

  pagesSet = await browser.pages();
     

  for (const page of pagesSet) {
      const url = page.url();
      console.log(`Проверяем страницу: ${url}`);

      if (url.startsWith('https://twitter.com/')) {
          
          console.log(`Найден URL, закрываем страницу...`);
          await page.close();
          break;
      }
  }

  await clickButtonWithText(phantomPage, 'Post');

  await phantomPage.waitForTimeout(3000);


  pagesSet = await browser.pages();
     

  for (const page of pagesSet) {
      const url = page.url();
      console.log(`Проверяем страницу: ${url}`);

      if (url.startsWith('https://twitter.com/')) {
          
          console.log(`Найден URL, закрываем страницу...`);
          await page.close();
          break;
      }
  }


  await clickButtonWithText(phantomPage, 'Claim');

await phantomPage.waitForTimeout(1000);

  await clickButtonWithText(phantomPage, 'Next');

  await clickButtonWithText(phantomPage, 'Close');
  await phantomPage.waitForTimeout(3000);


  await extractAndSaveCodes(phantomPage, filePath);

   // Предполагаем, что коды находятся в элементах с определенным селектором


   await markUrlAsProcessed(filePath, currentUrl);

   await writeKeysToFile(keysFilePath, existingKeys);
   
   
    console.log('Основной блок кода успешно выполнен');

    if (browser) await browser.close();

    setTimeout(main, 1000);
  } catch (error) {
    if (browser) await browser.close();

    console.error('Произошла ошибка:', error);
    // Перезапускаем функцию после небольшой задержки
    setTimeout(main, 1000); // Пауза перед перезапуском
  }
}

// Запускаем функцию в первый раз
main();
