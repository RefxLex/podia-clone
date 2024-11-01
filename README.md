# podia-clone
A clone of podia website

1. Логин в Docker
```shell script
docker login
```

2. Сборка
```shell script
docker build --no-cache --progress=plain -t refxlexj/podia-clone:1.0.0 .
```

3. Тэг для yandex clound
```shell script
docker tag refxlexj/podia-clone:1.0.0 cr.yandex/<идентификатор_реестра>/podia-clone:1.0.0
```

4. Логин в yandex cloud
```shell script 
echo <OAuth-токен>|docker login --username oauth --password-stdin cr.yandex
```

4. Пуш в yandex cloud
```shell script
docker push cr.yandex/<идентификатор_реестра>/podia-clone:1.0.0
```

Пуш в dockerhub
```shell script
docker push refxlexj/podia-clone:1.0.0
```

Локальный запуск 
```shell script
docker run -d -p 81:80 --name podia-clone -e BASE_URL=http://localhost:8081 refxlexj/podia-clone:1.0.0
```

