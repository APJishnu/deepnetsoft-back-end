import UserRepo from "../repositories/user-repo.js";

class UserController {
  static async fetchProductsByCategory(req, res) {
    try {
      // Assuming we get the category from the request body (adjust accordingly)
      const { category } = req.body;

      // Fetch products from the repository
      const products = await UserRepo.fetchProductsByCategory(category);

      // Map through the products to ensure each product has a product_id
      const productsWithId = products.map((product) => ({
        product_id: product._id, // Assuming '_id' is present in the fetched product
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
      }));
      // Check if products are found
      if (!products || products.length === 0) {
        return res.status(404).json({
          status: false,
          message: "No products found for this category",
          data:[]
        });
      }

      // Respond with the product details
      return res.status(200).json({
        status: true,
        data: productsWithId,
        message: "Products fetched successfully",
      });
    } catch (error) {
      // Send error response if any issues arise
      return res.status(500).json({
        status: false,
        message: error.message,
        data:[]
      });
    }
  }
}
export default UserController;
