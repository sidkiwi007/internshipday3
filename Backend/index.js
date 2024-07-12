const express=require('express');
const app=new express();
const PORT=4000;
const movieModel=require('./model/movieData');
const cors=require('cors');
require('./connection');
//to fetch the movie data
app.use(cors())
app.use(express.json())
app.get('/movies',async(req,res)=>{
    console.log('inside')
    try{
        const data=await movieModel.find();
        res.send(data)
    }catch(error){
        console.log(error)
    }
})
//add a new document
app.post('/newmovie',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=movieModel(item);
        const savedata=await datasave.save();
        res.send('Post successful');
    }catch (error) {
        console.log(error)
    }
})

app.listen(PORT,()=>{
    console.log('Server is running on PORT 4000')
})