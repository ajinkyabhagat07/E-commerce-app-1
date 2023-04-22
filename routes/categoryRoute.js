import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createCategoryController, categoryControlller, deleteCategoryController, singleCategoryController, updateCategoryController } from "./../controllers/categoryController.js";



const router = express.Router();

//routes
//create category

router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

//update category

router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController);

//getALL category

router.get('/get-category', categoryControlller);

//single category

router.get('/single-category/:slug', singleCategoryController);

//delete route

router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController);

export default router;