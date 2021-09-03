const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}))

const items=[];

app.get('/',(req,res)=>{
    res.render("home",{
        items,
    })
});
app.post('/data',(req,res)=>{
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/")
})
app.listen(port,()=>{
    console.log("server is working")
});
