const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Sample data
const menu = [
  {
    id: 1,
    name: "Pasta",
    description: "Delicious creamy pasta.",
    price: "$12",
    image: "/images/pasta.png"
  },
  {
    id: 2,
    name: "Sushi Roll",
    description: "Fresh salmon and avocado roll.",
    price: "$15",
    image: "/images/sushi.jpg"
  }
];

const restaurants = [
  { id: 1, name: "Chef Master", address: "123 Main St" },
  { id: 2, name: "Food Paradise", address: "456 Market Ave" }
];

const dishes = [
  { id: 1, name: "Grilled Sandwich", price: "$8" },
  { id: 2, name: "Spicy Ramen", price: "$10" }
];

// API routes
app.get('/api/menu', (req, res) => {
  res.json(menu);
});

app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

app.get('/api/dishes', (req, res) => {
  res.json(dishes);
});

// Default route (homepage fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});