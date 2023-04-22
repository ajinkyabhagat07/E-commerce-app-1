import express from "express";
import { registerController, loginController, testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object

const router = express.Router()

//routing
//REGISTER || METHOD POST

router.post('/register', registerController);

//LOGIN || POST

router.post('/login', loginController);

//Forgot pass

router.post('/forgot-password', forgotPasswordController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected route auth for user

router.get('/user-auth', requireSignIn, (_req, res) => {
    res.status(200).send({ ok: true });
});

//protected route auth for admin

router.get('/admin-auth', requireSignIn, isAdmin, (_req, res) => {
    res.status(200).send({ ok: true });
})

// update profile

router.put('/profile', requireSignIn, updateProfileController);

//order display
router.get('/orders', requireSignIn, getOrdersController);

//order display
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController);

//status 
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

export default router;

