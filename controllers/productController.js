import productModel from":./models/productModel.js";

const getProducts = async (req,res) => {
    const products = await productModel.find()
    res.render("products/index", { products });
};

const addProduct = async (req,res) => {
    const product = req.body
    await productModel.create(product)
    res.redirect("/products");
};
const addProductForm = async (req,res) =>{
    res.render("products/add")
}
const deleteproduct = async (req,res) => {
    const id = req.params.id;
    await productModel.findByIdAndDelete(id)
    res.redirect("/products")
}

export { getProducts,addproduct, addProductForm,deleteProduct };