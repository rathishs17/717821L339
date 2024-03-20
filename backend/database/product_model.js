const mongoose =require('mongoose');

const product_schema=new mongoose.Schema({
    name:{type:String, required:true},
    img:{type:String, required:true},
    cost:{type:Number, required:true},
    link:{type:String, required:true},

})

module.exports=new mongoose.model('Course',product_schema)