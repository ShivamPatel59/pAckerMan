const Box=require('../model/boxmodel');


// Add a new box
exports.addBox=async(req,res,next)=>{
    // console.log(req.body);
    let {price,weight,type}=req.body;
    // console.log(price);
    let volume=0;
    if(type=="small"){
        volume=10;
    }
    else if(type=="medium"){
        volume=20;
    }
    else if(type=="large"){
        volume=30;
    }
    // console.log(price,weight,volume);
    const box= await Box.create({
        price,
        weight,
        volume
        });
    res.status(200).json({
        success:true,
        data:box
    })
}

// Get all the boxes
exports.getBox=async(req,res,next)=>{
    const box=await Box.find();
    res.status(200).json({
        success:true,
        data : box
    })
}