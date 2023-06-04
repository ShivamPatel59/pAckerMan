const mongoose=require('mongoose');

const boxSchema=new mongoose.Schema({
    weight:{
        type:Number,
        required:[true,"Please enter the weight of the box"]
    },
    volume:{
        type:Number,
        required:[true,"Please enter the volume of the box"]
    }
    ,
    price:{
        type:Number,
        required:[true,"Please enter the price of the box"]
    }
})

module.exports=mongoose.model("Box",boxSchema);