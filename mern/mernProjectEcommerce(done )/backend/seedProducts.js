const mongoose = require("mongoose");
const Product = require("./models/productModel");

const products = [
  {
    name: "Gaming Laptop Pro 15",
    images: [{ url: "https://i.imgur.com/9j8Zb8I.jpg" }],
    price: 75999,
    ratings: 4.5,
    numOfReviews: 112,
    category: "Laptop",
  },
  {
    name: "Running Shoes Max",
    images: [{ url: "https://i.imgur.com/SXJbM1b.jpg" }],
    price: 3499,
    ratings: 4.0,
    numOfReviews: 89,
    category: "Footwear",
  },
  {
    name: "Slim Fit Chinos",
    images: [{ url: "https://i.imgur.com/8zE7ZpT.jpg" }],
    price: 1299,
    ratings: 3.5,
    numOfReviews: 56,
    category: "Bottom",
  },
  {
    name: "Cotton Casual Shirt",
    images: [{ url: "https://i.imgur.com/FflDBKM.jpg" }],
    price: 799,
    ratings: 4.2,
    numOfReviews: 120,
    category: "Tops",
  },
  {
    name: "Formal Suit Set",
    images: [{ url: "https://i.imgur.com/TDQZGP4.jpg" }],
    price: 4999,
    ratings: 4.7,
    numOfReviews: 250,
    category: "Attire",
  },
  {
    name: "Digital DSLR Camera",
    images: [{ url: "https://i.imgur.com/PRXWz4m.jpg" }],
    price: 45999,
    ratings: 3.8,
    numOfReviews: 37,
    category: "Camera",
  },
  {
    name: "Smartphone X1 5G",
    images: [{ url: "https://i.imgur.com/bkDpMCh.jpg" }],
    price: 22999,
    ratings: 4.1,
    numOfReviews: 143,
    category: "SmartPhones",
  },
  {
    name: "Yoga Pants Flex",
    images: [{ url: "https://i.imgur.com/JKhEHuO.jpg" }],
    price: 1199,
    ratings: 4.0,
    numOfReviews: 70,
    category: "Bottom",
  },
  {
    name: "Leather Boots",
    images: [{ url: "https://i.imgur.com/nE6cf0F.jpg" }],
    price: 2599,
    ratings: 4.3,
    numOfReviews: 205,
    category: "Footwear",
  },
  {
    name: "Graphic T-Shirt",
    images: [{ url: "https://i.imgur.com/OStpX3z.jpg" }],
    price: 599,
    ratings: 3.9,
    numOfReviews: 94,
    category: "Tops",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ecommerce", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products seeded successfully");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding the database:", err);
    mongoose.disconnect();
  }
}

seedDatabase();
