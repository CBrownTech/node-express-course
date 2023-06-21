const express = require('express')
const { products } = require('./data')
const app = express();

// Serve static files from the public directory
app.use(express.static('./public'));

// API endpoint: /api/v1/test
app.get('/api/v1/test', (req, res) => {
    res.json({message: 'It worked!'});
});

// API endpoint: /api/v1/products
app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

// API endpoint: /api/v1/products/:id
app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID) // Because this will be a string, and we need an integer
    const product = products.find(p => p.id = idToFind);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// API endpoint: /api/v1/query
app.get('/api/v1/query', (req, res) => {
    const { search, limit, maxPrice } = req.query;

    let filteredProducts = [...products];

    // Filter based on the search query
    if (search) {
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }
  
    // Filter based on the maximum price
    if (maxPrice) {
      const maxPriceValue = parseFloat(maxPrice);
      filteredProducts = filteredProducts.filter(product => product.price <= maxPriceValue);
    }
  
    // Limit the number of results if limit is specified
    if (limit) {
      filteredProducts = filteredProducts.slice(0, parseInt(limit));
    }
  
    res.json(filteredProducts);
  });


// Not found handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Express Tutorial');
});

// Add an event listener to the button
// const fetchButton = document.getElementById('fetchButton');
// const productListDiv = document.getElementById('productList');

// fetchButton.addEventListener('click', () => {
//   fetch('/api/v1/products')
//     .then(response => response.json())
//     .then(data => {
//       // Clear any existing content in the productListDiv
//       productListDiv.innerHTML = '';

//       // Loop through the products and create HTML elements to display them
//       data.forEach(product => {
//         const productElement = document.createElement('p');
//         productElement.textContent = `Product ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`;

//         // Append each product element to the productListDiv
//         productListDiv.appendChild(productElement);
//       });
//     })
//     .catch(error => console.log(error));
// });
