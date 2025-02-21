# Документация API проекта

## Обзор
API разработан на NestJS с использованием TypeORM. Обеспечивает управление меню и корзиной покупок.

## Структура проекта

```
src/api/
├── src/
│   ├── app.module.ts        - Корневой модуль приложения
│   ├── main.ts              - Точка входа
│   ├── config/              - Конфигурационные файлы
│   ├── backet/              - Модуль корзины покупок
│   ├── menu/                - Модуль управления меню
│   └── middlewares/         - Промежуточное ПО
├── test/                    - E2E тесты
├── Dockerfile               - Конфигурация Docker
├── package.json             - Зависимости и скрипты
├── tsconfig.json            - Настройки TypeScript
└── eslint.config.mjs        - Конфигурация ESLint
```

## Конфигурация

### Основные зависимости
- `nestjs` - NestJS
- `typeorm` - ORM для работы с БД

### Настройки TypeScript (tsconfig.json)
- Целевая версия: ES2023
- Включена генерация source maps
- Строгая проверка типов

## Запуск проекта
```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run start:dev

# Сборка production версии
npm run build
```

## Модули
- `*.entity.ts` - Сущность модуля
- `*.controller.ts` - REST контроллер
- `*.service.ts` - Бизнес-логика
- `dto/` - Data Transfer Objects

## Тестирование
```bash
# Запуск unit-тестов
npm run test

# E2E тестирование
npm run test:e2e
```