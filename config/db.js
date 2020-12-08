

async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  try {
    const mysql = require("mysql2/promise");
    // mysql://usuario:senha@servidor:porta/banco
    const connection = await mysql.createConnection(
      `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}:${process.env.DB_PORT}/dbadvocacia`
    );
    console.log("MySQL Conectado!");
    global.connection = connection;
    return connection;
  } catch (error) {
    console.log("Erro de conexão: " + error);
  }
}

async function selectAdvogado() {
  const conn = await connect();
  // desestruturação para pegar apenas o ídice que tem os registros da tabela
  const [rows] = await conn.query("SELECT * FROM advogado");
  return rows;
}

async function insertAdvogado(advogado) {
  const conn = await connect(),
    sql = `INSERT INTO advogado (oab, nome, telefone, areaEspecializacao) 
      VALUES (?, ?, ?, ?)`,
    values = [advogado.oab, advogado.nome, advogado.telefone, advogado.areaEspecializacao];

  return await conn.query(sql, values);
}

module.exports = { selectAdvogado, insertAdvogado };
