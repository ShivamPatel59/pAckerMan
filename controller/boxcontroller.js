const Box=require('../model/boxmodel');


// Add a new box
exports.addBox=async(req,res,next)=>{
    const box= await Box.create(req.body);
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