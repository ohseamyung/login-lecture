 const fs = require('fs')
 const data = fs.readFileSync('./database.json');
 const conf =JSON.parse(data)
const mysql = require('mysql');
 const { resolve } = require('path');
// const con = mysql.createConnection({
const pool = mysql.createPool({
  //   host: "http://52.78.73.219/",
//   host: conf.host,
//   port: conf.port,
//   user: conf.user,
//   password: conf.password,
//   connectionLimt: conf.console,
//   database: conf.database
   host: "52.78.73.219",
   port: "3306",
   user: "root",
   password: "osm5353osm",
   connectionLimt: 5,
   database: "study_db"
});
module.exports = {

    async run(query) {
      const promise1 = new Promise((resolve, reject) => {
        resolve();
      });
      promise1
        .then(() => {
          pool.query("SELECT * FROM professor", (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(data);
            resolve(data);
          })
          // return pool.getConnection()
          //     .then(conn =>{
          //       conn.query(query)
          //        .then((rows)=>{
          //           resolve(rows);
          //        })
          //      })
          //     .catch(err=>{
          //       console.log(err);
          //       conn.end();
          //     })
        })
        .catch(() => {
          return console.log("catch!");
      });
    //   return new Promise((resolve, reject) => {
    //      pool.query("SELECT * FROM professor", (err, data) => {
    //       if (err) {
    //         console.error(err);
    //         return;
    //       }
    //       // resolve(data);
    //       // rows fetch
    //       console.log(reject);
    //       console.log(resolve(data));
    //       // res.send(data); //memos란 배열을 클라이언트에게 보낸다
    //     });
    // });
    // try {
      // const conn = await new Promise((resolve, reject) => {
      //   pool.query(query, (err, data) => {
      //     if (err) {
      //       console.error(err);
      //       return;
      //     }
      //     resolve(data);
      //   });
      // });
      // conn.query(query)
      //   .then((rows) => {
      //     console.log(rows);
      //     resolve(rows);
      //     conn.end(); // (필수) connection 종료
      //   })
      //   .catch(err_1 => {
      //     console.log(err_1);
      //     conn.end(); // (필수) connection 종료
      //     reject(err_1);
      //   });
    // } catch (err_2) { }
  }
}
