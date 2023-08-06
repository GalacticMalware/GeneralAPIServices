require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const { dbConncet } = require('./DB/configSql');
const morganBody = require("morgan-body");
const {logLocal} = require("./utils/handlerLoger");

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));
app.use(express.urlencoded({extended: true}));

morganBody(app, {
  noColors: true,
  stream: {
    write:(message)=>{
      logLocal(message);
    }
  },
  skip: function(req, res) {
      return res.statusCode <= 400;
  },
});

const PORT = process.env.PORT || 3000;

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`El server es http://localhost:${PORT}`);
});

dbConncet();