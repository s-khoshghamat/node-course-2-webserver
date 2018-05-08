

var express = require('express')
const hbs = require('hbs')
const os = require('os')
const fs = require('fs')

var app = express();
var oss = os 

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', () =>{
    return new Date().getFullYear()
})
hbs.registerHelper('screamIt', (text)=>{
   return  text.toUpperCase();
})
app.set('view engine' , 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/error',(req,res)=>{
    res.render('error.hbs')
})

app.use((req ,res,next)=>{
    var now = new Date().toString();
    var log = `${now} ${req.method} ${req.url}`
    fs.appendFile('server.log', log + '\n' , (error)=>{
        if(error){
            console.log('nashod ke beshe')
        }
    })
    console.log(log)
    next();
})




app.get('/', (req,res)=>{
    res.render('index.hbs', {
        wellcomeMassage : "wellcome to our website",
       host: oss.userInfo().username
    })
})

app.get('/about', (req,res)=>{
    res.render('about.hbs', {
        pageTitle : 'About page' 
    })
})



app.listen(3000,()=>{
    console.log('server is ready')
})