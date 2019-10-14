# snmp-rest
API REST para consultas SNMP em switchs

## Como utilizar

Obter o nome do switch
```
http://<ip-do-servidor>:5000/nome
```

Obter os dados da porta 1 do switch
```
http://<ip-do-servidor>:5000/porta01
```

Obter os dados da porta 2 do switch
```
http://<ip-do-servidor>:5000/porta02
```

Obter todos os dados do dispositivo
```
http://<ip-do-servidor>:5000/
```


## Como rodar
```
git clone https://github.com/AlanVncs/snmp-rest
cd snmp-rest
cp .env.example .env 
# Preencha o arquivo .env com os valores necessários
npm install
npm start # Troque por 'npm run dev' para rodar no modo dev
```


### Como rodar em um container Docker
```
git clone https://github.com/AlanVncs/snmp-rest
cd snmp-rest
cp .env.example .env 
# Preencha o arquivo .env com os valores necessários
docker-compose up
```
