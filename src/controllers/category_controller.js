const categoryModel = require("../models/category_models");

const categoryController = {
    createCategory: async (req, res) => {
        try {

            const categoryData = req.body;
            const newCategory = new categoryModel(categoryData);
            await newCategory.save();

            return res.json({ success: true, data: newCategory, messege: "category created!" })

        } catch (error) {
            return res.json({ success: false, messege: error })

        }
    },

    fatchAllCategory: async (req, res) => {
        try {

            const categories = await categoryModel.find();
            return res.json({ success: true, messege: categories })



        } catch (error) {
            return res.json({ success: false, messege: error });
        }
    },

    fatchCategoryById: async (req, res) => {
        try {
            // id parameters me hoti hai
            const id = req.params.id;
            const Findcategories = await categoryModel.findById(id);
            return res.json({
                sucess: true, data: Findcategories, messege: "Category find successfully"
            })

        } catch (error) {
            return res.json({ success: false, messege: error });

        }
    }


}
module.exports = categoryController