const request=require('request')
const forecast=require('./forecast')
const geocode=function(add,callback){
    setTimeout(()=>{
        const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(add) +".json?access_token=pk.eyJ1IjoiYXl1c2hpaWkiLCJhIjoiY2s0Y2VqN3pzMDIxcDNycDQ0cG51OHptNiJ9.Hb-E_IWIu60a6jsRZrtCLw"      
    
        request({url,json:true  },  (error,{body})=>{
             //console.log(response)
            if(error)
           callback( "unable to connect",undefined)
            
            
            //const s=JSON.parse(response.body)
            else if(body.features.length===0)
            callback( "data not found",undefined)

                         else 
            {
                callback( undefined,data={r:body.features[0].geometry.coordinates[1],l:body.features[0].geometry.coordinates[0],loc:body.features[0].place_name})

            }
       
        })






    })
}

module.exports=geocode