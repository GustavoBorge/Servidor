const db = require('./db');

const Cliente = db.sequelize.define('clientes', {
  id_cliente: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cpf: {
    type: db.Sequelize.STRING(14),
    unique: true,
    allowNull: false
  },
  nome: {
    type: db.Sequelize.STRING(100),
    allowNull: false
  },
  telefone: {
    type: db.Sequelize.STRING(20)
  },
  email: {
    type: db.Sequelize.STRING(100)
  },
  senha: {
    type: db.Sequelize.STRING(255)
  },
  data_cadastro: {
    type: db.Sequelize.DATE,
    defaultValue: db.Sequelize.NOW
  },
  observacoes: {
    type: db.Sequelize.TEXT
  }
});


Cliente.sync({force: false}).then(() => {
    console.log("Tabela Agendar criada com sucesso!");
}).catch((error) => {
    console.error("Erro ao criar a tabela Agendar:", error);
}); 


module.exports = Cliente;