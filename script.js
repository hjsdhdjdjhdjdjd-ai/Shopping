const cartCount = document.querySelector('#cart-count');
const productsGrid = document.querySelector('#products-grid');
const searchInput = document.querySelector('#searchInput');
const yearEl = document.querySelector('#year');

let cartTotal = 0;
let allProducts = [];

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Fetch products automatically from the server API
async function loadProducts() {
  try {
    const isLocalServer = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const productsUrl = isLocalServer
      ? '/api/products'
      : new URL('products.json', document.baseURI);
    const response = await fetch(productsUrl);
    if (!response.ok) throw new Error(`Product request failed with status ${response.status}`);

    allProducts = await response.json();
    applyFilters();
  } catch (error) {
    console.error('Error loading products from server:', error);
    if (productsGrid) {
      productsGrid.textContent = 'Failed to load products. Please make sure the server is running (node server.js).';
    }
  }
}

function renderProducts(products) {
  if (!productsGrid) return;

  productsGrid.replaceChildren();

  if (products.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'products-empty';
    emptyMessage.textContent = allProducts.length === 0
      ? 'No products found. Add a product folder under products with text.txt and a media folder.'
      : 'No products match your search.';
    productsGrid.append(emptyMessage);
    return;
  }

  products.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';

    const imageFrame = document.createElement('div');
    imageFrame.className = 'product-image';
    const image = document.createElement('img');
    image.src = Array.isArray(product.images) ? product.images[0] : product.image;
    image.alt = product.name || 'Product image';
    image.loading = 'lazy';
    imageFrame.append(image);

    const body = document.createElement('div');
    body.className = 'product-body';

    const name = document.createElement('h3');
    name.className = 'product-name';
    name.textContent = product.name || 'Unnamed product';

    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.description || '';

    const pricing = document.createElement('div');
    pricing.className = 'product-pricing';
    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = product.price || '';
    pricing.append(price);

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.className = 'add-cart';
    addButton.textContent = 'Add to cart';
    addButton.addEventListener('click', () => {
      cartTotal += 1;
      if (cartCount) cartCount.textContent = cartTotal;

      addButton.textContent = 'Added';
      addButton.disabled = true;
      setTimeout(() => {
        addButton.textContent = 'Add to cart';
        addButton.disabled = false;
      }, 800);
    });

    body.append(name, description, pricing, addButton);
    card.append(imageFrame, body);
    productsGrid.append(card);
  });
}

if (searchInput) {
  searchInput.addEventListener('input', applyFilters);
}

function applyFilters() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const filteredProducts = allProducts.filter(product => {
    const searchableText = `${product.name || ''} ${product.description || ''}`.toLowerCase();
    return query === '' || searchableText.includes(query);
  });

  renderProducts(filteredProducts);
}

// Initialize the page
loadProducts();
if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
  setInterval(loadProducts, 5000);
}
