import Product from "../models/product.js";
import asyncHandler from "../middleware/asyncHandler.js";

const addProduct = asyncHandler(async (req, res) => {
  try {
    const { Title, Duration, Amount } = req.fields;

    const product = new Product({ ...req.fields });
    await product.save();
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

export { addProduct };
