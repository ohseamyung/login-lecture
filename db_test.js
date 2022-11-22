const mysql = require("mysql");

const con = mysql.createConnection({
  host: "52.78.73.219",
  // host: "http://52.78.73.219/",
  port: "3306",
  user: "root",
  password: "osm5353osm",
  connectionLimt: 5,
  database: "study_db",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
// con.query('select * from professor',function(error,results,fields){
//     if(error) throw error;
//     console.log('data:',results[0])
// });
con.query(
  "update professor SET dayWrite= now() where _id= ?",
  ["3"],
  function (error, results, fields) {
    if (error) throw error;
    console.log("data:", results);
  }
);
con.query(
  "update professor SET name= 'osm' where _id= ?",
  ["3"],
  function (error, results, fields) {
    if (error) throw error;
    console.log("data:", results);
  }
);
con.end();
