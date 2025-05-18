#!/bin/sh

ENV_FILE="$(dirname "$0")/../.env"

export $(grep -v '^#' "$ENV_FILE" | xargs)

# Функция для проверки подключения к БД
wait_for_db() {
  echo "Ожидание подключения к БД на $DB_HOST:$DB_PORT..."
  while ! timeout 1 bash -c "echo > /dev/tcp/$DB_HOST/$DB_PORT" 2>/dev/null; do
    sleep 3
  done
  echo "База данных доступна"
}

wait_for_db

# Выполнить миграции и сиды
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Запуск приложения
exec npm run start
