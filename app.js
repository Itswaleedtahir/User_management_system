 const express = require("express");
 const exphbs = require("express-handlebars");
 const bodyParser = require("nody-parser");

 require('dotenv').config();

 const app = express();
 const port = process.env.PORT || 4000;

 // passing middleware
 app.use(express.urlencoded({extended: true}));

 app.use(express.jason());

 //static files
 app.use(express.static("public"));

 //templating engine using handlebars
 const handlebars = exphbs.create ({extname: "hbs"});
 app.engine(".hbs",handlebars.engine);
 app.set("view.engine","hbs");
 //comment 2


 const routes = require("./server/routes/user");
 app.use('/',routes);
 app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
 });