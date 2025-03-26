const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Configuração do banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "carros_saulo",
});

db.connect((err) => {
  if (err) {
    return console.error("Erro ao conectar ao MySQL:", err);
  }
  console.log("Conectado ao MySQL!");
});

app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.static("src/public"));

// Rota para renderizar a página inicial
app.get("/", (req, res) => {
  res.render("TelaGerenciador");
});

// Rota para buscar todos os veículos
app.get("/api/veiculos", (req, res) => {
  db.query("SELECT * FROM veiculos", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
});

// Rota para adicionar um veículo
app.post("/api/veiculos", (req, res) => {
  const { placa, marca, modelo, ano } = req.body;
  const sql =
    "INSERT INTO veiculos (placa, marca, modelo, ano) VALUES (?, ?, ?, ?)";
  db.query(sql, [placa, marca, modelo, ano], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json({
      message: "Veículo cadastrado com sucesso!",
      id: result.insertId,
    });
  });
});

// Rota para deletar um veículo
app.delete("/api/veiculos/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM veiculos WHERE id = ?", [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json({ message: "Veículo removido com sucesso!" });
  });
});

// Rota para atualizar um veículo
app.put("/api/veiculos/:id", (req, res) => {
  const { id } = req.params;
  const { placa, marca, modelo, ano } = req.body;

  const sql =
    "UPDATE veiculos SET placa = ?, marca = ?, modelo = ?, ano = ? WHERE id = ?";
  db.query(sql, [placa, marca, modelo, ano, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json({ message: "Veículo atualizado com sucesso!" });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando com express na porta ${port}...`);
});
