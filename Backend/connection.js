const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://sreeharianilkumarrejithab21ec1260:sree123asd123@cluster0.qyfml5m.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB is not connected')
})