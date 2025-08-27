const db = require('./db');

const Funcionario = db.sequelize.define('funcionarios', {
  id_funcionario: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  endereco: {
    type: db.Sequelize.STRING(200)
  },
  senha: {
    type: db.Sequelize.STRING(255)
  },
  ativo: {
    type: db.Sequelize.BOOLEAN,
    defaultValue: true
  }
});


Funcionario.sync({force: false}).then(() => {
    console.log("Tabela Agendar criada com sucesso!");
}).catch((error) => {
    console.error("Erro ao criar a tabela Agendar:", error);
}); 


module.exports = Funcionario;