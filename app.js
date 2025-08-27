const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Funcionarios = require('./models/Funcionario');  

// Configuração para aceitar dados em JSON no corpo da requisição
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/Funcionarios", function(req, res){
    Funcionarios.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        endereco: req.body.endereco,
        senha: req.body.senha, 
        ativo: req.body.ativo
    }).then(function(){
        res.send("Funcionario cadastrado com sucesso!");
    }).catch(function(erro){
        res.send("Houve um erro: " + erro);
    })
});

app.get("/Funcionarios", function(req, res){
    Funcionarios.findAll().then(function(funcionarios){
        res.send({Funcionarios: funcionarios});
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)}); 
    });
app.get("/Funcionarios/:nome", function(req, res){
    Funcionarios.findAll({
        where: {nome: req.params.nome}
    }).then(function(funcionarios){
        res.send({funcionarios});
    }).catch(function(erro){
        res.send("Houve um erro: " + erro); 
    })
});

app.patch("/Funcionarios/:id", function(req, res){
    Funcionarios.update({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        endereco: req.body.endereco,
        senha: req.body.senha, 
        ativo: req.body.ativo
    },{
        where: {id_funcionario: req.params.id}
    }).then(function(){
        res.send("Cadastro de funcionario atualizado com sucesso!");
    }).catch(function(erro){
        res.send("Houve um erro: " + erro);
    })
});
const PORT = process.env.PORT || 8081;
app.listen(PORT,"0.0.0.0", function(){
    console.log("Servidor rodando");
});