const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const ROOT_DIR = __dirname;
const PRODUCTS_DIR = path.join(ROOT_DIR, 'products');

// Serve static files from absolute root
app.use(express.static(ROOT_DIR));

app.get('/api/products', (req, res) => {
    try {
        const productFolders = fs.readdirSync(PRODUCTS_DIR, { withFileTypes: true })
            .filter(entry => entry.isDirectory())
            .sort((a, b) => a.name.localeCompare(b.name));

        const products = [];

        for (const folder of productFolders) {
            const folderPath = path.join(PRODUCTS_DIR, folder.name);
            const textPath = path.join(folderPath, 'text.txt');
            const mediaPath = path.join(folderPath, 'media');

            if (!fs.existsSync(textPath) || !fs.statSync(textPath).isFile()) {
                console.warn(`Skipping product folder "${folder.name}": text.txt is missing.`);
                continue;
            }

            if (!fs.existsSync(mediaPath) || !fs.statSync(mediaPath).isDirectory()) {
                console.warn(`Skipping product folder "${folder.name}": media folder is missing.`);
                continue;
            }

            const lines = fs.readFileSync(textPath, 'utf8')
                .replace(/^\uFEFF/, '')
                .split(/\r?\n/)
                .map(line => line.trim());
            const [price, name, ...descriptionLines] = lines;

            if (!price || !name || !descriptionLines.some(Boolean)) {
                console.warn(`Skipping product folder "${folder.name}": text.txt must contain a price, name, and description.`);
                continue;
            }

            const images = fs.readdirSync(mediaPath, { withFileTypes: true })
                .filter(file => file.isFile() && /\.(avif|gif|jpe?g|png|webp)$/i.test(file.name))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(file => {
                    const relativePath = path.relative(ROOT_DIR, path.join(mediaPath, file.name));
                    const encodedPath = relativePath.split(path.sep).map(encodeURIComponent).join('/');
                    return `/${encodedPath}`;
                });

            if (images.length === 0) {
                console.warn(`Skipping product folder "${folder.name}": no supported image files were found in media.`);
                continue;
            }

            products.push({
                id: folder.name,
                name,
                price,
                description: descriptionLines.join('\n').trim(),
                images
            });
        }

        res.json(products);
    } catch (error) {
        console.error('Error scanning products directory:', error);
        res.status(500).json({ error: 'Unable to scan the products directory.' });
    }
});

app.listen(PORT, () => {
    console.log(`\n🚀 Server is running from: ${ROOT_DIR}`);
    console.log(`👉 Visit: http://localhost:${PORT}\n`);
});
