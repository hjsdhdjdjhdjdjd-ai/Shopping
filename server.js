const express = require('express');
const { generateProducts } = require('./build-products');

const app = express();
const PORT = 3000;
const ROOT_DIR = __dirname;
const PRODUCT_REFRESH_INTERVAL = 5000;
let products = [];
let productsError = null;

// Serve static files from absolute root
app.use(express.static(ROOT_DIR));

function refreshProducts() {
    try {
        products = generateProducts();
        productsError = null;
    } catch (error) {
        productsError = error;
        console.error('Unable to refresh products.json from the products directory:', error);
    }
}

refreshProducts();
setInterval(refreshProducts, PRODUCT_REFRESH_INTERVAL);

app.get('/api/products', (req, res) => {
    if (productsError) {
        return res.status(500).json({ error: 'Unable to scan the products directory.' });
    }

    res.json(products);
});

app.listen(PORT, () => {
    console.log(`\n🚀 Server is running from: ${ROOT_DIR}`);
    console.log(`👉 Visit: http://localhost:${PORT}\n`);
});
