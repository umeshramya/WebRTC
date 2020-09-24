const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'))
// app.use(express.static('files'))

router.get('/',function(req,res){
res.render("index.html")
});



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');