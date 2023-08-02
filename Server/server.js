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

})


app.listen(8081, () => {
  console.log("Running");
})