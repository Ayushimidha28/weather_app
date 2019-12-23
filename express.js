const express=require('express')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const path=require('path')
const hbs=require('hbs')
const viewp=path.join(__dirname,"./template/views")
const app=express()
const hp=path.join(__dirname,"./template/partials")
//console.log(path.join(__dirname,"./public"))
const p=path.join(__dirname,"./public")
hbs.registerPartials(hp)
app.use(express.static(p))
app.set("view engine",'hbs')
app.set("views",viewp)

app.get('',(req,res)=>{
    res.render("index",{title:"Weather",name:"Created by Ayushi Midha"})
})

app.get('/help',(req,res)=>{
    res.render("help",{title:"help",name:"your blacks are beautiful"})
})

app.get('/about',(req,res)=>{
    res.render("about",{title:"About",name:"your blacks are beautiful"})
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send("Error data not found")
    }
//     res.send({address:req.query.address,
//     summary:"might rain"
// })
    //res.render("weather",{title:"Weather",name:"might snow"})
    geocode(req.query.address,(error,{r,l,loc}={})=>{
        if(error)
        return res.send({error})
        forecast(r,l,(error,forecastd)=>
        {
            return res.send({
                location:loc,
                forecast:forecastd,
                address:req.query.address
            })
        })
    })
})

app.get('*',(req,res)=>{
    res.render("error",{title:"404 page",name:"page not found"})
})

// app.get('/about',(req,res)=>{
//     res.send("<h1>Ayushi Midha</h1>")
// })
// app.get('/weather',(req,res)=>{
//     res.send({
//         sky:"clearImmediate",
//         rainprobability:1
//     })
// })

app.listen(3000,()=>{
    console.log("running")
})