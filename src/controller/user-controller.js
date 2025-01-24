import UserRepo from "../repositories/user-repo.js";

class UserController {
  static async fetchProductsByCategory(req, res) {
    try {
      // Destructure category, page, and pageSize from the request body
      const { category, page = 1, pageSize = 6 } = req.body;

      // Fetch paginated products from the repository
      const { products, hasMore } = await UserRepo.fetchProductsByCategory(category, page, pageSize);

      // Check if no products were found
      if (products.length === 0) {
        return res.status(404).json({
          status: false,
          message: "No products found for this category",
          data: [],
          hasMore: false,
        });
      }

      // Respond with the product details
      return res.status(200).json({
        status: true,
        data: products,
        message: "Products fetched successfully",
        hasMore,
      });
    } catch (error) {
      // Send error response if any issues arise
      return res.status(500).json({
        status: false,
        message: error.message,
        data: [],
        hasMore: false,
      });
    }
  }
}

export default UserController;
