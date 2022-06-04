//*********require section**********
const express=require('express')
const ejs=require('ejs');

const pageRoute=require('./routes/pageRoute');

//*********connect db**************




//*********variable section**********
const app=express();




//*********template engine section**********
app.set("view engine", "ejs");



//*********middlewares section**********
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//*********routes section**********
app.use('/',pageRoute);


//*********Port section**********

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App started on port ${port}`)
});