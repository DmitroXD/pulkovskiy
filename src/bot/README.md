# Документация Telegram-бота

## 📌 Общее описание
Бот разработан на Python с использованием фреймворка Aiogram 3.x. Основные функции:
- Модульная архитектура с разделением на handlers/middlewares/services
- Поддержка локализации через YAML-файлы
- Интеграция с Redis для кэширования
- Конфигурация через pydantic-settings

## 🛠️ Требования
- Python 3.12+
- Docker (для запуска в контейнере)
- Установленные зависимости из requirements.txt

```bash
pip install -r requirements.txt
```

## 📂 Структура проекта
```
bot/
├── core/              # Основные настройки и конфигурация
│   ├── config.py      # Настройки приложения
│   └── registrat.py   # Инициализация бота и диспетчера
├── handlers/          # Обработчики сообщений
├── middlewares/       # Промежуточное ПО
├── service/           # Сервисные слои
├── tools/             # Вспомогательные утилиты
├── locales/           # Файлы локализации
├── Dockerfile         # Конфигурация Docker
├── main.py            # Точка входа
└── requirements.txt   # Зависимости
```

## 🚀 Запуск проекта

### Локальный запуск
1. Создайте файл `.env` с переменными:
```ini
TOKEN=ваш_токен_бота
REDIS_URL=redis://localhost:6379/0
```
2. Выполните:
```bash
python main.py
```

### Запуск в Docker
```bash
docker build -t telegram-bot .
docker run -e TOKEN=ваш_токен_бота REDIS_URL=путь_к_редис telegram-bot
```

## ⚙️ Конфигурация
Основные настройки в `core/config.py`:
- `ENVIRONMENT` - флаг режима работы (PRODUCTION/DEVELOPMENT)
- `TOKEN` - токен бота из переменных окружения
- `PROXY` - прокси, используемые для запуска бота (optional)
- `PROXY` - Настройки Redis для кэширования (optional)
- `ENCODING` - Кодировка (default="utf-8")
- `PARSE_MODE` - Разметка для форматирования сообщений (default="HTML")


## 🔧 Разработка
### Добавление нового обработчика
1. Создайте файл в `handlers/`
2. Реализуйте роутер:
```python
from aiogram import Router

router = Router()

@router.message(commands=['start'])
async def start_handler(message):
    await message.answer("Hello, World!")
```

3. Добавьте ваш роутер в общий список в `handlers/__init.py`
```python

routers: List[Router] = [
    ...,
    your_router
]
```
or 
```python
routers.appent(your_router)
```