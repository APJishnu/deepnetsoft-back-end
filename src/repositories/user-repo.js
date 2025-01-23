import ProductCollection from "../models/product-model.js";

class UserRepo {
  // Method to fetch products by category
  static async fetchProductsByCategory(category) {
    try {
      // Find the product collection for the specified category
      const productCollection = await ProductCollection.findOne({ type: category });
      if (!productCollection) {
        throw new Error("Products not found for the given category");
      }
      return productCollection.products; // Return the list of products for the category
    } catch (error) {
      throw new Error("Error fetching products: " + error.message);
    }
  }
}

export default UserRepo;
