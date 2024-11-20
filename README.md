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

3. Пуш в dockerhub
```shell script
docker push refxlexj/podia-clone:1.0.0
```

Локальный запуск 
```shell script
docker run -d -p 81:80 --name podia-clone -e BASE_URL=http://localhost:8081 refxlexj/podia-clone:1.0.0
```

