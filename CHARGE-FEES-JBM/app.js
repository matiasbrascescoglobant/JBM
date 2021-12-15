//Importo dependencias
require("dotenv").config(); //Lee las variables de entorno
const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(morgan("tiny"));
app.use(cors());
app.use(require('./routes/index'));

const CONECTOR = process.env.MONGO_URI;
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

connect(
  CONECTOR,
  OPTIONS,
  MongoError => {
      if (MongoError) {
          console.error(MongoError);
          process.exit(1);
      }
      app.listen(8080, error => {
          if (error) {
              console.error(error);
              process.exit(1);
          }
          console.log("Connection established with MongoDB Altas");
          console.log("Server ready");
      });
  }
);