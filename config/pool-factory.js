const mysql = require("mysql2");

// cria um pool para acesso ao banco, ou seja, mantem uma conexão aberta para uma certa quantia de usuarios.
const pool = mysql.createPool({
  connectionLimit,
  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});
console.log("conexão criada");

// pode ser criado um evento para qnd uma conexão do pool é retornada: utiliza-se o release
pool.on("release", () => console.log("pool => conexão retornada"));

// para qnd a aplicação for desconectada,
// fechar o pool de conexão.
process.on("SIGNINT", () =>
  pool.end((err) => {
    if (err) return console.log(err);
    console.log("pool => fechado");
    process.exit(0);
  })
);

module.exports = pool;
