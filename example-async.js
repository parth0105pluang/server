/*setTimeout(()=>{console.log("logged after 5000")},5000);
setTimeout(()=>{console.log("logged after 2000")},2000);
console.log("Sync Log");*/
/*function printInTwoSeconds(message){
          setTimeout(()=>{
          console.log(message);
          },2000);
}
printInTwoSeconds("Hello Async");
*/
var weather = require("./weather");
console.log(weather);
weather((message)=>{
    console.log(message);
});