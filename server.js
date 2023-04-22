import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoute from "./routes/categoryRoute.js"
import productRoutes from "./routes/productRoutes.js"
import path from "path"

//configure env
dotenv.config();

//database config
connectDB();

//rest object from given pckage
const app = express();

//middlewares

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

//deployment
app.use(express.static(path.join(__dirname, './client/build')));

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoute);
app.use("/api/v1/product", productRoutes);

app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

//rest appi
// app.get('/', (req, res) => {
//     res.send({
//         message: "welcome to ecommerce app"
//     })
// })

//poert

const PORT = process.env.PORT || 8080;

//run listen

app.listen(PORT, () => {
    console.log("server running on 8080")
})