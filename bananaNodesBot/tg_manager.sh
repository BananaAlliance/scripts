#!/bin/bash

# Цветовая палитра
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

SERVER_JS='https://github.com/BananaAlliance/scripts/raw/main/bananaNodesBot/server.js'

# Функция для вывода сообщения с рамкой
function box_msg() {
    local msg="$1"
    local len=${#msg}
    printf "\n%0.s*" $(seq 1 $((len+8)))
    echo -e "\n*  ${YELLOW}$msg${NC}  *"
    printf "%0.s*" $(seq 1 $((len+8)))
    echo -e "\n"
}

# Функция анимации
function animate() {
    echo -n "$1 "
    for i in $(seq 1 3); do
        echo -n "."
        sleep 0.5
    done
    echo -e "\n"
}



#!/bin/bash

# Цветовая палитра
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Функция для вывода сообщения с рамкой
function box_msg() {
    local msg="$1"
    local len=${#msg}
    printf "\n%0.s*" $(seq 1 $((len+8)))
    echo -e "\n*  ${YELLOW}$msg${NC}  *"
    printf "%0.s*" $(seq 1 $((len+8)))
    echo -e "\n"
}

# Функция анимации
function animate() {
    echo -n "$1 "
    for i in $(seq 1 3); do
        echo -n "."
        sleep 0.5
    done
    echo -e "\n"
}

# Функция установки
function install() {
    # Проверка и установка Node.js и NPM
if ! command -v node > /dev/null; then
    box_msg "Установка Node.js и NPM"
    animate "Установка"
    curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
    sudo apt-get install -y nodejs
    echo -e "${GREEN}Node.js и NPM успешно установлены.${NC}\n"
fi

# Создание каталога проекта
box_msg "Создание каталога проекта"
animate "Создание"
mkdir -p ~/.tg_bot_manager
cd ~/.tg_bot_manager
echo -e "${GREEN}Каталог создан.${NC}\n"

# Скачивание файла server.js с Github
box_msg "Загрузка server.js"
animate "Загрузка"
curl -LJO $SERVER_JS
echo -e "${GREEN}server.js успешно загружен.${NC}\n"

# Запрос токена у пользователя и сохранение его в файл .env
box_msg "Ввод токена"
echo "Пожалуйста, введите ваш токен:"
read -r TOKEN
echo "TOKEN=$TOKEN" > .env
echo -e "${GREEN}Токен сохранен.${NC}\n"

# Установка зависимостей
box_msg "Установка зависимостей"
animate "Установка"
npm init -y
npm install express dotenv node-cache
echo -e "${GREEN}Зависимости успешно установлены.${NC}\n"

# Создание и запуск службы
box_msg "Создание и запуск службы"
animate "Создание"
cat <<EOL | sudo tee /etc/systemd/system/tg_bot_manager.service > /dev/null
[Unit]
Description=TG Bot Manager Service
After=network.target

[Service]
ExecStart=$(which node) $(realpath server.js)
WorkingDirectory=$(realpath .)
User=$(whoami)
Restart=always

[Install]
WantedBy=multi-user.target
EOL

sudo systemctl daemon-reload
sudo systemctl enable tg_bot_manager
sudo systemctl start tg_bot_manager
echo -e "${GREEN}Сервер успешно установлен и запущен.${NC}\n"
}

# Функция удаления
function uninstall() {
    # Остановка и удаление службы
    box_msg "Остановка и удаление службы"
    animate "Остановка"
    sudo systemctl stop tg_bot_manager
    sudo systemctl disable tg_bot_manager
    sudo rm /etc/systemd/system/tg_bot_manager.service
    sudo systemctl daemon-reload
    sudo systemctl reset-failed
    echo -e "${GREEN}Служба остановлена и удалена.${NC}\n"

    sleep 1

    # Удаление каталога проекта
    box_msg "Удаление каталога проекта"
    animate "Удаление"
    sudo rm -rf $HOME/.tg_bot_manager
    echo -e "${GREEN}Каталог проекта удален.${NC}\n"

    sleep 1
}

# Функция обновления токена
function update_token() {
    box_msg "Обновление токена"
    echo "Пожалуйста, введите ваш новый токен:"
    read -r new_token
    echo "TOKEN=$new_token" > $HOME/.tg_bot_manager/.env
    sudo systemctl restart tg_bot_manager
    echo -e "${GREEN}Токен успешно обновлен.${NC}\n"
}



# Функция обновления
function update() {
    # Запрашиваем подтверждение у пользователя
    read -p "Это действие перезапишет текущий файл server.js. Вы уверены, что хотите продолжить? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        # Загрузка файла server.js с Github
        box_msg "Обновление server.js"
        animate "Загрузка"
        curl -LJO $SERVER_JS -o $HOME/.tg_bot_manager/server.js
        echo -e "${GREEN}server.js успешно обновлен.${NC}\n"
        sleep 1
        # Перезапуск службы
        sudo systemctl restart tg_bot_manager
        echo -e "${GREEN}Служба успешно перезапущена.${NC}\n"
        sleep 1
    else
        echo -e "${RED}Обновление отменено пользователем.${NC}\n"
    fi
}

if [ "$1" == "install" ]; then
    install
elif [ "$1" == "uninstall" ]; then
    uninstall
elif [ "$1" == "token" ]; then
    update_token
elif [ "$1" == "update" ]; then
    update
else
    echo -e "${RED}Ошибка: Неверный аргумент. Используйте 'install', 'uninstall', 'token' или 'update'.${NC}"
    exit 1
fi


