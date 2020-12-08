require('dotenv/config');

const conn = require('./config/db');

(async ()=>{
  console.log('iniciado')
  // const result = await conn.insertAdvogado({oab: 10, nome: 'teste node', telefone: '12355', areaEspecializacao: 'node'}) 
  // console.log(result)
  console.log('---------')
  const advogado = await conn.selectAdvogado();
  console.log(advogado)
})()
