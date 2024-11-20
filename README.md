# podia-clone

Клон сайта podia с некоторыми изменениями. Выполнен по шаблону с сайта https://www.frontendpractice.com/projects/podia.
Репозиторий серверной части тут - https://github.com/RefxLex/podia_server

Сайт можно посмотреть тут - http:// 130.193.55.10/podia

1. Логин в Docker
```shell script
docker login
```

2. Сборка
```shell script
docker build --no-cache --progress=plain -t refxlexj/podia-clone:1.0.0 .
```

3. Пуш в dockerhub
```shell script
docker push refxlexj/podia-clone:1.0.0
```
