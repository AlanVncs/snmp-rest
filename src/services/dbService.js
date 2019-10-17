const db_host = process.env.DB_HOST || 'localhost';
const db_port = process.env.DB_PORT || '27017';

var db_auth = '';
if(process.env.DB_USER && process.env.DB_PASSWORD){
    db_auth = process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@';
}

const url = 'mongodb://' + db_auth + db_host + ':' + db_port;


const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const dbDriver = {
    'insert': (consulta) => {
        const mongoClient = require('mongodb').MongoClient;
        mongoClient.connect(url, function(error, client) {
            if(error){
                console.error(RED + error.message);
            }
            else{
                client.db('snmp-rest').collection('consultas').insertOne(consulta, (error, result) => {
                    if(error){
                        console.log('Inserção no banco de dados: ' + GREEN + 'FAIL');
                    }
                    else{
                        console.log('Inserção no banco de dados: ' + GREEN + 'OK');
                    }
                });
                client.close();
            }
        });
    }
};

module.exports = dbDriver;