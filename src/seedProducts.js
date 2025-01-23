import ProductCollection from "./models/product-model.js"; // Adjust the path to your model file

const productData = [
  {
    type: "Food",
    products: [
      {
        name: "Burger",
        description: "Juicy grilled beef patty.",
        price: 12,
        image: "/images/food/burger.jpg",
      },
      {
        name: "Pizza",
        description: "Cheesy pepperoni goodness.",
        price: 15,
        image: "/images/food/pizza.jpg",
      },
    ],
  },
  {
    type: "Drinks",
    products: [
      {
        name: "Cinnamon Toast Crunch",
        description: "Skrewball peanut butter whiskey.",
        price: 16,
        image: "/products/Brunch-1.svg",
      },
      {
        name: "Moet Spritz",
        description: "Aperol, St Germain, fresh lime juice.",
        price: 20,
        image: "/products/Brunch-2.svg",
      },
    ],
  },
  {
    type: "Brunch",
    products: [
      {
        name: "Bar 42 Mary",
        description: "Titos, tomato juice, fully loaded.",
        price: 14,
        image: "/images/brunch/mary.jpg",
      },
    ],
  },
];

const seedProducts = async () => {
  try {
    // Clear existing data
    await ProductCollection.deleteMany({});
    console.log("Cleared existing product data.");
    // Insert new data
    await ProductCollection.insertMany(productData);
    console.log("Database seeded with new product data.");
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
};

export default seedProducts;
