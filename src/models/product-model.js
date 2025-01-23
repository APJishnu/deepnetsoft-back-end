import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true }, // Category like "Food", "Drinks"
  products: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
    },
  ],
});

const ProductCollection = mongoose.model("ProductCollection", productSchema);

export default ProductCollection;
