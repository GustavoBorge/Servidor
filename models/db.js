require ("dotenv").config(); // Carrega variáveis de ambiente do arquivo .env
const { Sequelize } = require("sequelize"); //Importando o Sequelize
const mysql2 = require('mysql2'); //Importando o MySQL2

const sequelize = new Sequelize(
    process.env.MYSQLDATABASE /*Nome do do banco*/,
    process.env.MYSQLUSER /*Nome para conectar*/,
    process.env.MYSQLPASSASWORD /*Senha do banco*/,
    {
        host: process.env.MYSQLHOST /*Onde o banco está hospedado*/, 
        port: process.env.MYSQLPORT /*Porta do banco*/,
        dialect: "mysql" /*Tipo do banco*/,
        dialectModule: mysql2 /*Tipo do banco*/,
        logging: false /*Não mostrar logs no terminal*/,
        pool: {
            max: 5, // número máximo de conexões
            min: 0, // número mínimo de conexões
            acquire: 30000, // tempo máximo, em milissegundos, que o pool tentará obter uma conexão antes de gerar um erro
            idle: 10000 // tempo máximo, em milissegundos, que uma conexão pode ficar ociosa antes de ser liberada
        }
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
})();


module.exports = {Sequelize, sequelize}; //Exportando o Sequelize e a conexão com o banco