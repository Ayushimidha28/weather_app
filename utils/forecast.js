const request=require("request")
const forecast=function(x,y,callback){

    console.log("inforecast")
    setTimeout(()=>{
       const url="https://api.darksky.net/forecast/51daf2bc61ec5121dc63ad558f678f87/"+x+","+y
       request({url:url,json:true},(error,{body})=>{
       if(error)
       callback("error found", undefined)
       else if(body.error)
       {
       callback(body.error,undefined )
       }
       else 
       callback(undefined , body.currently.summary +" this is the tamperature " + body.currently.temperature +" this is blah blah blah "+ body.currently.cloudCover )})
    },2000)

}


module.exports=forecast