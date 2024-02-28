const express=require('express')
const hbs=require('hbs');
const path=require('path')
const app=express();
const PORT=process.env.PORT || 8000;
//public static path
const public_path=path.join(__dirname,"../public")
const templet_path=path.join(__dirname,"../templets/views")
const partials_path=path.join(__dirname,"../templets/partials")
app.set('view engine','hbs');
app.set('views',templet_path);
hbs.registerPartials(partials_path);
app.use(express.static(public_path));

//routing
app.get('/',(req,res)=>
{
    res.render('index');

});
app.get('/about',(req,res)=>
{
    res.render('about');

});
app.get('/weather',(req,res)=>
{
    res.render('weather');
});

app.get('*',(req,res)=>
{
    res.render('404error',
    {errMsg:'Opps! page not found'

    })

});

app.listen(PORT,()=>
{
    console.log(`listning on http:${PORT}`)
})
