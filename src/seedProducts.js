import ProductCollection from "./models/product-model.js"; // Adjust the path to your model file

const productData = [
  {
    type: "Food",
    products: [
      {
        name: "Burger",
        description: "A juicy grilled beef patty cooked to perfection, served with fresh lettuce, tomato, onions, and your choice of cheese, all stacked between a toasted, soft bun. A classic favorite, served with crispy fries on the side.",
        price: 12,
        image: "/products/burger.png"
      },
      {
        name: "Pizza",
        description: "A delicious pizza topped with cheesy mozzarella, savory pepperoni slices, and a flavorful tomato sauce. The crust is perfectly crispy on the edges and soft in the middle, providing the perfect balance of texture. A must-try for pizza lovers.",
        price: 15,
        image: "/products/pizza.png"
      },
      {
        name: "Hot Dog",
        description: "A savory hot dog sausage grilled to perfection and placed in a soft, warm bun, topped with mustard, ketchup, and relish.",
        price: 8,
        image: "/products/hotdog.png"
      },
      {
        name: "Cheeseburger",
        description: "A grilled beef patty with melted cheddar cheese, lettuce, tomato, pickles, and onions, all in a soft burger bun.",
        price: 14,
        image: "/products/cheeseburger.png"
      },
      {
        name: "Fish & Chips",
        description: "Crispy battered fish fillets served with golden, crispy fries, and tartar sauce for dipping.",
        price: 18,
        image: "/products/fish-chips.png"
      },
      {
        name: "Fried Chicken",
        description: "Juicy chicken pieces fried to a crispy golden brown, served with a side of creamy mashed potatoes and gravy.",
        price: 16,
        image: "/products/fried-chicken.png"
      },
      {
        name: "Steak & Fries",
        description: "A tender, perfectly grilled steak, served with crispy French fries and a rich peppercorn sauce.",
        price: 22,
        image: "/products/steak-fries.png"
      },
      {
        name: "Pasta Primavera",
        description: "A delicious pasta dish with fresh vegetables like bell peppers, zucchini, and tomatoes, tossed in a garlic olive oil sauce.",
        price: 13,
        image: "/products/pasta-primavera.png"
      },
      {
        name: "Tacos",
        description: "Soft corn tortillas filled with seasoned beef, lettuce, tomatoes, cheese, and topped with a zesty sour cream sauce.",
        price: 10,
        image: "/products/tacos.png"
      }
    ]
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
      {
        name: "Mojito",
        description: "A refreshing cocktail made with rum, fresh mint leaves, lime juice, and soda water.",
        price: 12,
        image: "/products/mojito.png",
      },
      {
        name: "Lemon Margarita",
        description: "Tequila, triple sec, fresh lime juice, and a salted rim for that perfect margarita kick.",
        price: 18,
        image: "/products/margarita.png",
      },
      {
        name: "Piña Colada",
        description: "A creamy cocktail made with rum, coconut cream, and pineapple juice, blended to perfection.",
        price: 15,
        image: "/products/pina-colada.png",
      },
      {
        name: "Long Island Iced Tea",
        description: "A mix of vodka, tequila, rum, gin, triple sec, lemon juice, and a splash of cola.",
        price: 22,
        image: "/products/long-island.png",
      },
      {
        name: "Cosmopolitan",
        description: "A sweet and tangy cocktail made with vodka, cranberry juice, and lime juice.",
        price: 17,
        image: "/products/cosmo.png",
      },
      {
        name: "Whiskey Sour",
        description: "A classic cocktail with whiskey, lemon juice, and simple syrup, shaken to perfection.",
        price: 14,
        image: "/products/whiskey-sour.png",
      }
    ]
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
      },
      {
        name: "French Toast",
        description: "Crispy golden-brown toast served with a drizzle of maple syrup and fresh fruit.",
        price: 13,
        image: "/products/french-toast.png"
      },
      {
        name: "Breakfast Burrito",
        description: "A warm tortilla stuffed with scrambled eggs, cheese, salsa, and bacon, perfect for breakfast on the go.",
        price: 14,
        image: "/products/breakfast-burrito.png"
      },
      {
        name: "Eggs Benedict",
        description: "A classic brunch dish with poached eggs, Canadian bacon, and hollandaise sauce, served on an English muffin.",
        price: 16,
        image: "/products/eggs-benedict.png"
      },
      {
        name: "Chia Pudding",
        description: "Healthy chia seeds soaked in almond milk, topped with fresh fruit and a drizzle of honey.",
        price: 9,
        image: "/products/chia-pudding.png"
      },
      {
        name: "Granola Parfait",
        description: "Layers of crunchy granola, fresh yogurt, and mixed berries, topped with a drizzle of honey.",
        price: 11,
        image: "/products/granola-parfait.png"
      },
      {
        name: "Scrambled Eggs with Bacon",
        description: "Soft scrambled eggs served with crispy bacon and a side of toast.",
        price: 12,
        image: "/products/scrambled-eggs.png"
      },
      {
        name: "Omelette",
        description: "A fluffy omelette with your choice of fillings like cheese, mushrooms, and spinach.",
        price: 14,
        image: "/products/omelette.png"
      }
    ]
  }
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
