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

Gerenciar o banco de dados
```
http://<ip-do-servidor>:5001/
```
Login e senha podem ser definidos no arquivo ```mongo-express-container.env```. Para desativar a autenticação, deixe-os comentados.


## Como rodar
```
git clone https://github.com/AlanVncs/snmp-rest
cd snmp-rest
cp 'src/.env.example' 'src/.env'
# Preencha o arquivo 'src/.env' com os valores necessários
npm install
npm start # Troque por 'npm run dev' para rodar no modo dev
```
Obs.: A instância do MongoDB a ser usada pela API deve ser iniciada pelo usuário


### Como rodar em um container Docker
```
git clone https://github.com/AlanVncs/snmp-rest
cd snmp-rest
cp 'src/.env.example' 'src/.env'
# Preencha o arquivo 'src/.env' com os valores necessários
cp 'mongo-express-container.env.example' 'mongo-express-container.env'
# Preencha o arquivo 'mongo-express-container.env' com os valores necessários
docker-compose up
```
Obs.: O próprio script (docker-compose.yml) cria e configura o banco de dados e o gerenciador do banco (mongo-express)
