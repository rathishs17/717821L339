const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://rathish:rathish123@cluster0.iwiwhtc.mongodb.net/education')
//mongodb+srv://rathish:rathish123@cluster0.iwiwhtc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
.then(()=>{
    console.log(`connected database`)
})
.catch((err)=>{
    console.log(err)
})