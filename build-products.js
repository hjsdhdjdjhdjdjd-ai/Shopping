const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const productsDir = path.join(rootDir, 'products');
const outputPath = path.join(rootDir, 'products.json');

function readProducts() {
  const productFolders = fs.readdirSync(productsDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  return productFolders.flatMap(folder => {
    const folderPath = path.join(productsDir, folder.name);
    const textPath = path.join(folderPath, 'text.txt');
    const mediaPath = path.join(folderPath, 'media');

    if (!fs.existsSync(textPath) || !fs.statSync(textPath).isFile()) {
      console.warn(`Skipping product folder "${folder.name}": text.txt is missing.`);
      return [];
    }

    if (!fs.existsSync(mediaPath) || !fs.statSync(mediaPath).isDirectory()) {
      console.warn(`Skipping product folder "${folder.name}": media folder is missing.`);
      return [];
    }

    const lines = fs.readFileSync(textPath, 'utf8')
      .replace(/^\uFEFF/, '')
      .split(/\r?\n/)
      .map(line => line.trim());
    const [price, name, ...descriptionLines] = lines;

    if (!price || !name || !descriptionLines.some(Boolean)) {
      console.warn(`Skipping product folder "${folder.name}": text.txt must contain a price, name, and description.`);
      return [];
    }

    const images = fs.readdirSync(mediaPath, { withFileTypes: true })
      .filter(file => file.isFile() && /\.(avif|gif|jpe?g|png|webp)$/i.test(file.name))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(file => {
        const relativePath = path.relative(rootDir, path.join(mediaPath, file.name));
        return relativePath.split(path.sep).map(encodeURIComponent).join('/');
      });

    if (images.length === 0) {
      console.warn(`Skipping product folder "${folder.name}": no supported image files were found in media.`);
      return [];
    }

    return [{
      id: folder.name,
      name,
      price,
      description: descriptionLines.join('\n').trim(),
      images
    }];
  });
}

function generateProducts() {
  const products = readProducts();
  const content = `${JSON.stringify(products, null, 2)}\n`;

  if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, 'utf8') !== content) {
    fs.writeFileSync(outputPath, content);
    console.log(`Updated products.json with ${products.length} product(s).`);
  }

  return products;
}

module.exports = { generateProducts };

if (require.main === module) {
  try {
    const products = generateProducts();
    console.log(`Generated products.json with ${products.length} product(s).`);
  } catch (error) {
    console.error('Unable to generate products.json:', error);
    process.exitCode = 1;
  }
}
