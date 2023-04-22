import express from 'express';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { braintreePaymentController, braintreeTokenController, createProductController, getProductController, getSingleProductController, productCountController, productFilterController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from '../controllers/productController.js';
import formidable from "express-formidable";
import { deleteCategoryController } from '../controllers/categoryController.js';


const router = express.Router();

//routes

router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);

//update

router.post('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);

// get 

router.get("/get-product", getProductController);

//single product

router.get("/get-product/:slug", getSingleProductController);

//get photo

router.get("/product-photo/:pid", productPhotoController);

//delete product

router.delete("/delete-product/:pid", deleteCategoryController);

//filter product

router.post("/product-filters", productFilterController);

//product count 
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product

router.get("/search/:keyword", searchProductController);

// similar product

router.get('/related-product/:pid/:cid', relatedProductController);

//category wise product

// router.get("/product-category/:slug", productCategoryController);

// payment route
//token
router.get("/braintree/token", braintreeTokenController);

// payments

router.post("/braintree/payment", requireSignIn, braintreePaymentController);

//

export default router;