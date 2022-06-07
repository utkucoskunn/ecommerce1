//*********require section**********
const express=require('express')
const ejs=require('ejs');
const mongoose=require('mongoose');


const pageRoute=require('./routes/pageRoute');
const productRoute=require('./routes/productRoute');

//*********connect db**************
mongoose.connect('mongodb://localhost/ecommerce1-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(('DB CONNECTED :)!'))
}).catch((err)=>{
    console.log(err)
});



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
app.use('/product-details',productRoute);


//*********Port section**********

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`App started on port ${port}`)
});