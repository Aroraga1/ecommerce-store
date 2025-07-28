export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    image: "https://via.placeholder.com/200x200?text=Headphones",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and notifications on the go.",
    price: 149.99,
    image: "https://via.placeholder.com/200x200?text=Smart+Watch",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Coffee Maker",
    description: "Brew the perfect cup every time.",
    price: 59.99,
    image: "https://via.placeholder.com/200x200?text=Coffee+Maker",
    category: "Home Appliances",
  },
  {
    id: 4,
    name: "Yoga Mat",
    description: "Comfortable and non-slip yoga mat for all exercises.",
    price: 29.99,
    image: "https://via.placeholder.com/200x200?text=Yoga+Mat",
    category: "Fitness",
  },
  {
    id: 5,
    name: "Running Shoes",
    description: "Lightweight running shoes for all terrains.",
    price: 79.99,
    image: "https://via.placeholder.com/200x200?text=Running+Shoes",
    category: "Footwear",
  },
];
