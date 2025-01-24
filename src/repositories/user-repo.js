import ProductCollection from "../models/product-model.js";

class UserRepo {
  // Method to fetch products by category with pagination
  static async fetchProductsByCategory(category, page = 1, pageSize = 6) {
    try {
      // Find the product collection for the specified category
      const productCollection = await ProductCollection.findOne({ type: category });
      if (!productCollection) {
        throw new Error("Products not found for the given category");
      }

      // Calculate the starting index for pagination
      const skip = (page - 1) * pageSize;

      // Fetch the paginated products
      const products = await ProductCollection.aggregate([
        { $match: { type: category } },  // Match the category
        { $unwind: "$products" },        // Unwind the products array
        { $skip: skip },                 // Skip the products based on page number
        { $limit: pageSize },            // Limit the number of products per page
        { $project: {                    // Project the required fields
          _id: 0,
          product_id: "$products._id",
          name: "$products.name",
          description: "$products.description",
          price: "$products.price",
          image: "$products.image",
        }},
      ]);

      // Get the total count of products for the category
      const totalCount = await ProductCollection.aggregate([
        { $match: { type: category } },  // Match the category
        { $unwind: "$products" },        // Unwind the products array
        { $count: "total" },             // Count total number of products
      ]);

      // Calculate if more products are available
      const hasMore = totalCount[0]?.total > page * pageSize;

      return { products, hasMore };
    } catch (error) {
      throw new Error("Error fetching products: " + error.message);
    }
  }
}

export default UserRepo;
