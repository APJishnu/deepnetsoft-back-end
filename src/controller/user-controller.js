import UserRepo from "../repositories/user-repo.js";

class UserController{

    static async fetchProductsByCategory(req,res){
        try {
            // Assuming we get the category from the request body (adjust accordingly)
            const { category } = req.body;
      
            // Fetch products from the repository
            const products = await UserRepo.fetchProductsByCategory(category);
      
            // Respond with the product details
            return res.status(200).json({
              status: "success",
              data: products,
              message: "Products fetched successfully",
            });
          } catch (error) {
            // Send error response if any issues arise
            return res.status(500).json({
              status: "error",
              message: error.message,
            });
          }
    }
}
export default UserController