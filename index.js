require('dotenv/config');

const pool = require('./config/pool-factory');

(async ()=>{
  console.log('iniciado')
  pool.execute('SELECT * FROM USERS', (err, result) => {
    if (err) return 'erro select: ' + err
    console.log(result)


  });
  // const result = await conn.insertAdvogado({oab: 10, nome: 'teste node', telefone: '12355', areaEspecializacao: 'node'}) 
  // console.log(result)
  console.log('---------')
  // const advogado = await conn.selectUsers();
  // console.log(advogado)
})()
