import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db-promocoesprd"
})

db.connect(function (err) {
  if (err) {
    console.log("Erro in Connection");
  } else {
    console.log("Connected");
  }
})

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [req.body.username, req.body.password], (err, result) => {
    if(err) return res.json({Status: "Error", Error: "Error in running query"});
    if(result.length > 0) {
      return res.json({Status: "Success"})
    } else {
      return res.json({Status: "Error", Error: "Wrong Username or Password"});
    }
  })
})


app.listen(8081, () => {
  console.log("Running");
})