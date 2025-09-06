docker run -d \
  --name todo-db \
  -e MYSQL_DATABASE=todo_app \
  -e MYSQL_ROOT_PASSWORD=root_password \
  -e MYSQL_USER=user \
  -e MYSQL_PASSWORD=user_password \
  -p 3306:3306 \
  mysql:8.0