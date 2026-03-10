import { getProducts,addProductForm,addProduct,deleteProduct } from":./controllers/productController.js";
import express from "express";
const productRouter = express.Router();

productRouter.get("/",getProducts);
productRouter.get("/add",addProductForm)
productRouter.post("/add",addProduct)
productRouter.get("/:id/delete",deleteProduct)


export default productRouter