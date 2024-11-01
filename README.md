# podia-clone

Клон сайта podia с некоторыми изменениями. Выполнен по шаблону с сайта https://www.frontendpractice.com/projects/podia.
Репозиторий серверной части тут - https://github.com/RefxLex/podia_server


Локальный запуск в Docker контейнере

Клиент
```shell script
docker run -d -p 81:80 --name podia-clone -e BASE_URL=http://localhost:8081 refxlexj/podia-clone:1.0.0
```
Сервер
```shell script
docker run -d -p 8081:8081 --name podia-server refxlexj/podia-server:1.0.0
```

Приложение будет доступно по адресу http://localhost:81
