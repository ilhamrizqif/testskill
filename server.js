const express = require('express');
const bodyParser = require('body-parser');
const app=express();
//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//calling routes
var routes=require('./routes');
routes(app);


app.listen(3300, () => {
    console.log(`Server started on port`);


});