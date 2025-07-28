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
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and notifications on the go.",
    price: 149.99,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Coffee Maker",
    description: "Brew the perfect cup every time.",
    price: 59.99,
    image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Home Appliances",
  },
  {
    id: 4,
    name: "Yoga Mat",
    description: "Comfortable and non-slip yoga mat for all exercises.",
    price: 29.99,
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Fitness",
  },
  {
    id: 5,
    name: "Running Shoes",
    description: "Lightweight running shoes for all terrains.",
    price: 79.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Footwear",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    description: "Portable wireless speaker with excellent sound quality.",
    price: 45.99,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
  },
];