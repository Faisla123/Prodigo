import express from "express";
import formidable from "express-formidable";

const router = express.Router();
//controllers
import { addProduct } from "../controllers/productController.js";

router.route("/").post(formidable(), addProduct);

export default router;
