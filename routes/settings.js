const mysql = require("mysql2");

let db = mysql.createPool({
    multipleStatements: true,
    host: "localhost",
    user: "root",
    password: 'NextHub01!',
    database: "nh_printchecker",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// db.connect((err) => {
//     if (err) {
//       console.log("Errore durante la connessione al database:", err);
//     } else {
//       console.log("Connessione stabilita al database");
//     }
// });


// non funziona
async function takeSettings(db) {
  let settings = await db.promise().query("SELECT * FROM setting");
  return settings; 
}
takeSettings(db);

let daysBack = 15;
let veryOld = 60;
let below = 5000;
let interval = 600000;

module.exports = {
  db,
  daysBack,
  veryOld,
  below,
  interval,
};
 