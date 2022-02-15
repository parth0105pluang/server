/*
const request = require("request");
module.exports=((callback)=>{
const request = require("request");
var weather = require("./weather");
weather();
var api_key ="30ffe6aee44a530b8e4a31a5dd944a4c" ;
var url = "https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1";
request({url:url,json:true},(error,res,body)=>{
if(error){
    callback(error);
}
else
{ 
    //console.log(body);
    callback(`It's ${body.list[0].main.temp} at ${body.city.name}`)
}
});
});
*/
var city =  require("./location");
const request =  require("request");

console.log(city);
module.exports = function(callback){
    
    var api_key ="30ffe6aee44a530b8e4a31a5dd944a4c" ;
    //http://api.weatherapi.com/v1/current.json?key=5c7cf3003a424d54bbb64645221402&q=Delhi&aqi=no
    var url = "http://api.weatherapi.com/v1/current.json?key=5c7cf3003a424d54bbb64645221402&q="+toString(city)+"&aqi=no";
    request({url:url,json:true},(error,res,body)=>{
    if(error){
        callback(error);
    }
    else
    { 
        //console.log(body);
        callback(`It's ${body.current.temp_c} C at ${body.location.name}`)
    }})
}
