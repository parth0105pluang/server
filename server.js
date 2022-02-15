var express = require("express");
var app = express();
const port = process.env.port||3000;
const host = '0.0.0.0';
var middleware = require("./middleware");
/*var middleware ={
    requireAuthentication: function(req,res,next){
        console.log("private route hit");
        next();
    },
    logger: function(req,res,next){
        console.log(new Date().toString()+"  "+req.method+req.url);
        next();
    }
};*/
app.use(middleware.logger);
/*app.get("/",middleware.requireAuthentication,function(req,res){
res.send("Hello Express");
});*/
app.get("/about",middleware.requireAuthentication,function(req,res){
res.send("About Express");
});
app.use(express.static(__dirname+"/public"));
app.listen(port,host);
//console.log(port);