const db = require("./db");

const Agendar = db.sequelize.define("agendar", {
    id_agendamento: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_servico: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'servicos', // nome da tabela referenciada
            key: 'id_servico'
        }
    },
    id_cliente: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'id_cliente'
        }
    },
    id_funcionario: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'funcionarios',
            key: 'id_funcionario'
        }
    },
    data: {
        type: db.Sequelize.DATEONLY,
        allowNull: false
    },
    hora: {
        type: db.Sequelize.TIME,
        allowNull: false
    },
    status: {
        type: db.Sequelize.ENUM('Agendado', 'Confirmado', 'Realizado', 'Cancelado', 'Falta','Agendado Pendente'),
        allowNull: false,
        defaultValue: 'Agendado Pendente'
    },
    observacoes: {
        type: db.Sequelize.TEXT,
        allowNull: true
    },
    data_criacao: {
        type: db.Sequelize.DATE,
        defaultValue: db.Sequelize.NOW
    }
});


Agendar.sync({force: false}).then(() => {
    console.log("Tabela Agendar criada com sucesso!");
}).catch((error) => {
    console.error("Erro ao criar a tabela Agendar:", error);
}); 

module.exports = Agendar;