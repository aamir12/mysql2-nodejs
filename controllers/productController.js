const asyncHandler= require('express-async-handler');
const { getAllProductsMdl,addProductMdl,updateProductMdl,deleteProductMdl } =  require('../models/productModel');

exports.getAllProducts = asyncHandler(async (req,res)=>{
    const products = await getAllProductsMdl();
    res.json({status:true,products});
})

exports.addProduct = asyncHandler(async (req,res)=>{
    const data = req.body;
    const result = await addProductMdl(data);
    res.json({status:true,result});
})

exports.updateProduct = asyncHandler(async (req,res)=>{
    const {id,data} = req.body;
    const result = await updateProductMdl(id,data);
    res.json({status:true,result});
})

exports.deleteProduct = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    const result = await deleteProductMdl(id);
    res.json({status:true,result});
})



