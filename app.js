require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();


require("./db");


app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static("public"));
hbs.registerPartials(__dirname + "/views/partials");


app.use(express.urlencoded({ extended: true })); //*MIDDLEWARE
//!this is needed when we use 'post' mothods
//*is used between the request and the respons
//*to access the body inside the request

const index = require('./routes/index.routes');
app.use('/', index);


app.listen(process.env.PORT, () =>
	console.log(`Server 🏃 on http://localhost:${process.env.PORT}`)
);