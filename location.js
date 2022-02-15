const request = require("request");
url = "https://ipinfo.io/";
var city// Default
function exporter(city){
    console.log(city);
    
    module.exports= city;
}
function calbk(error,res,body){
    
        if(error){
            console.log(error);
            
        }  
        else{
            
            city=body.city;

            //console.log(city);
            
        }
        exporter(body.city);
    
}
function perform (){
     request({url:url,json:true},calbk);
    
}
perform();

//console.log(city);



