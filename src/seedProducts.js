import ProductCollection from "./models/product-model.js"; // Adjust the path to your model file

const productData = [
  {
    type: "Food",
    products: [
      {
        "name": "Burger",
        "description": "A juicy grilled beef patty cooked to perfection, served with fresh lettuce, tomato, onions, and your choice of cheese, all stacked between a toasted, soft bun. A classic favorite, served with crispy fries on the side.",
        "price": 12,
        "image": "/products/burger.png"
      },
      {
        "name": "Pizza",
        "description": "A delicious pizza topped with cheesy mozzarella, savory pepperoni slices, and a flavorful tomato sauce. The crust is perfectly crispy on the edges and soft in the middle, providing the perfect balance of texture. A must-try for pizza lovers.",
        "price": 15,
        "image": "/products/pizza.png"
      }      
    ],
  },
  {
    type: "Drinks",
    products: [
      {
        name: "Cinnamon Toast Crunch",
        description: "Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon.",
        price: 16,
        image: "/products/Brunch-1.svg",
      },
      {
        name: "Moet Spritz",
        description: "Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper.",
        price: 20,
        image: "/products/Brunch-2.svg",
      },
      {
        name: "Bar 42 Mary",
        description: "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded.",
        price: 14,
        image: "/products/mary.jpg",
      },
    ],
  },
  {
    type: "Brunch",
    products: [
      
      {
        name: "Avocado Toast",
        description: "Fresh avocado, poached egg, and a dash of chili flakes on whole grain toast.",
        price: 12,
        image: "/products/avocado-toast.png"
      },
      {
        name: "Classic Cupcakes",
        description: "Fluffy Cupcakes topped with maple syrup, butter, and fresh berries.",
        price: 10,
        image: "/products/cup-cake.png"
      }
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
