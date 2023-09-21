const productModel = require('../models/produt_models');


const productController = {

    createProduct: async (req, res) => {
        try {

            const productData = req.body;
            const newProduct = productModel(productData);
            await newProduct.save();

            return res.json({ success: true, data: newProduct, messege: "Product Created!" })

        } catch (error) {
            return res.json({
                success: true, messege: error
            })

        }
    },

    fatchAllProduct: async (req, res) => {
        try {
            const products = await productModel.find();
            return res.json({
                success: true, data: products
            })

        } catch (error) {

            return res.json({
                success:false, messege: error
            });

        }

    },

   productGetByCategory: async(req,res)=>{

     try {
        const categoryId= req.params.id;
        const findProduct= await productModel.find({category:categoryId});
        return res.json({
            success: true, data: findProduct

        })
        
     } catch (error) {

       return res.json({success:false,messege:error}) 
        
     }
      
    }
}

module.exports=productController