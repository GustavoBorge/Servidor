const db = require('./db');

const Servico = db.sequelize.define('servicos', {
  id_servico: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome_servico: {
    type: db.Sequelize.STRING(100),
    allowNull: false
  },
  descricao: {
    type: db.Sequelize.TEXT
  },
  duracao: {
    type: db.Sequelize.TIME
  },
  preco: {
    type: db.Sequelize.DECIMAL(10,2)
  },
  ativo: {
    type: db.Sequelize.BOOLEAN,
    defaultValue: true
  }
});


Servico.sync({force: false}).then(() => {
    console.log("Tabela Agendar criada com sucesso!");
}).catch((error) => {
    console.error("Erro ao criar a tabela Agendar:", error);
}); 


module.exports = Servico;