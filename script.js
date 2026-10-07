const cartCount = document.querySelector('#cart-count');
const cartToggle = document.querySelector('#cart-toggle');
const cartDrawer = document.querySelector('#cart-drawer');
const cartBackdrop = document.querySelector('#cart-backdrop');
const cartClose = document.querySelector('#cart-close');
const cartContinue = document.querySelector('#cart-continue');
const cartItems = document.querySelector('#cart-items');
const cartItemCount = document.querySelector('#cart-item-count');
const cartSubtotal = document.querySelector('#cart-subtotal');
const productDialog = document.querySelector('#product-dialog');
const productDialogClose = document.querySelector('#product-dialog-close');
const productDetailImage = document.querySelector('#product-detail-image');
const productDetailTitle = document.querySelector('#product-dialog-title');
const productDetailPrice = document.querySelector('#product-detail-price');
const productDetailDescription = document.querySelector('#product-detail-description');
const productDetailAdd = document.querySelector('#product-detail-add');
const productsGrid = document.querySelector('#products-grid');
const searchInput = document.querySelector('#searchInput');
const headerSearchInput = document.querySelector('#headerSearchInput');
const yearEl = document.querySelector('#year');
const languageToggle = document.querySelector('#language-toggle');

const translations = {
  en: {
    pageTitle: 'Smart Shopping',
    pageDescription: 'Browse modern essentials, trending gadgets, and home finds. Explore product details and add favorites to your cart.',
    brandName: 'Tota Cart',
    homeLabel: 'TotaCart home',
    mainNavigation: 'Main navigation',
    navHome: 'Home',
    navShop: 'Shop',
    navWhyUs: 'Why us',
    searchLabel: 'Search',
    cartLabel: 'Shopping cart',
    cartTitle: 'Shopping Cart',
    closeCartLabel: 'Close cart',
    subtotal: 'Subtotal',
    items: 'items',
    continueShopping: 'Continue shopping',
    emptyCart: 'Your shopping cart is empty.',
    decreaseQuantity: 'Decrease quantity',
    increaseQuantity: 'Increase quantity',
    removeItem: 'Remove item',
    productInformation: 'Product information',
    closeProductDetails: 'Close product information',
    priceLabel: 'Price:',
    viewProductDetails: 'View product details',
    heroEyebrow: 'New arrivals this week',
    heroTitle: 'Smart style for',
    heroTitleAccent: 'everyday life',
    heroCopy: 'Discover premium essentials, beauty picks, and home upgrades designed to make your everyday routine smoother and more enjoyable.',
    shopNow: 'Shop now',
    exploreMore: 'Explore more',
    storeBenefits: 'Store benefits',
    deliveryMeta: '🚚 Fast delivery',
    paymentMeta: '🔒 Secure payment',
    secureCheckout: 'Secure checkout',
    secureCheckoutCopy: 'Protected and encrypted',
    returns: '30-day returns',
    returnsCopy: 'Easy, stress-free policy',
    trending: 'Trending now',
    popularPicks: 'Popular picks',
    popularCopy: 'Handpicked favorites chosen for comfort, style, and everyday value.',
    searchPlaceholder: 'Search products',
    searchProducts: 'Search products',
    whyChooseUs: 'Why choose us',
    betterShopping: 'Built for better shopping',
    fastDelivery: 'Fast delivery',
    fastDeliveryCopy: 'Get your favorites shipped quickly and tracked from checkout to doorstep.',
    helpfulSupport: 'Helpful support',
    helpfulSupportCopy: 'Our team is here to answer questions and guide your purchases with care.',
    giftReady: 'Gift-ready picks',
    giftReadyCopy: 'Curated upgrades for birthdays, celebrations, and thoughtful surprises.',
    verifiedQuality: 'Verified quality',
    verifiedQualityCopy: 'Products are carefully selected for style, comfort, and reliability.',
    newsletterTitle: 'Stay in the loop',
    newsletterCopy: 'Get updates about new products and additions to the store.',
    emailPlaceholder: 'Enter your email',
    emailLabel: 'Email address',
    subscribe: 'Subscribe',
    footerBrandCopy: 'Curated essentials for modern living, designed to keep your everyday life stylish, practical, and joyful.',
    footerShop: 'Shop',
    newArrivals: 'New arrivals',
    bestSellers: 'Best sellers',
    company: 'Company',
    about: 'About',
    careers: 'Careers',
    support: 'Support',
    shipping: 'Shipping',
    footerReturns: 'Returns',
    contact: 'Contact',
    copyright: '©',
    rightsReserved: 'All rights reserved.',
    socialLinks: 'Social media links',
    addToCart: 'Add to cart',
    added: 'Added',
    unnamedProduct: 'Unnamed product',
    noProducts: 'No products found. Add a product folder under products with text.txt and a media folder.',
    noMatches: 'No products match your search.',
    loadError: 'Failed to load products. Please make sure the server is running (node server.js).',
    languageButton: 'العربية',
    languageLabel: 'Switch language'
  },
  ar: {
    pageTitle: 'تسوق بذكاء',
    pageDescription: 'تصفح المستلزمات العصرية والأجهزة الرائجة والمنتجات المنزلية. اطلع على تفاصيل المنتجات وأضف ما يعجبك إلى سلتك.',
    brandName: 'توتا كارت',
    homeLabel: 'الصفحة الرئيسية لتوتا كارت',
    mainNavigation: 'القائمة الرئيسية',
    navHome: 'الرئيسية',
    navShop: 'المتجر',
    navWhyUs: 'لماذا نحن',
    searchLabel: 'بحث',
    cartLabel: 'سلة التسوق',
    cartTitle: 'سلة التسوق',
    closeCartLabel: 'إغلاق السلة',
    subtotal: 'الإجمالي الفرعي',
    items: 'منتجات',
    continueShopping: 'متابعة التسوق',
    emptyCart: 'سلة التسوق فارغة.',
    decreaseQuantity: 'تقليل الكمية',
    increaseQuantity: 'زيادة الكمية',
    removeItem: 'حذف المنتج',
    productInformation: 'معلومات المنتج',
    closeProductDetails: 'إغلاق معلومات المنتج',
    priceLabel: 'السعر:',
    viewProductDetails: 'عرض تفاصيل المنتج',
    heroEyebrow: 'وصل حديثًا هذا الأسبوع',
    heroTitle: 'أناقة ذكية لكل',
    heroTitleAccent: 'يوم',
    heroCopy: 'اكتشف مستلزمات مميزة ومنتجات للعناية والجمال ولمسات منزلية تجعل يومك أسهل وأكثر متعة.',
    shopNow: 'تسوق الآن',
    exploreMore: 'اكتشف المزيد',
    storeBenefits: 'مزايا المتجر',
    deliveryMeta: '🚚 توصيل سريع',
    paymentMeta: '🔒 دفع آمن',
    secureCheckout: 'دفع آمن',
    secureCheckoutCopy: 'حماية وتشفير للبيانات',
    returns: 'إرجاع خلال ٣٠ يومًا',
    returnsCopy: 'سياسة سهلة وخالية من المتاعب',
    trending: 'رائج الآن',
    popularPicks: 'اختيارات مميزة',
    popularCopy: 'منتجات مختارة بعناية تجمع بين الراحة والأناقة والقيمة.',
    searchPlaceholder: 'ابحث عن المنتجات',
    searchProducts: 'البحث عن المنتجات',
    whyChooseUs: 'لماذا تختارنا',
    betterShopping: 'تجربة تسوق أفضل',
    fastDelivery: 'توصيل سريع',
    fastDeliveryCopy: 'نوصّل منتجاتك المفضلة بسرعة، مع إمكانية تتبع الطلب حتى باب منزلك.',
    helpfulSupport: 'دعم ومساعدة',
    helpfulSupportCopy: 'فريقنا جاهز للإجابة عن أسئلتك ومساعدتك في اختيار المنتجات المناسبة.',
    giftReady: 'هدايا مميزة',
    giftReadyCopy: 'اختيارات رائعة لأعياد الميلاد والمناسبات والمفاجآت الجميلة.',
    verifiedQuality: 'جودة موثوقة',
    verifiedQualityCopy: 'نختار المنتجات بعناية لما تتميز به من أناقة وراحة وموثوقية.',
    newsletterTitle: 'ابقَ على اطلاع',
    newsletterCopy: 'اشترك لتصلك تحديثات المنتجات الجديدة وإضافات المتجر.',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    emailLabel: 'البريد الإلكتروني',
    subscribe: 'اشترك',
    footerBrandCopy: 'منتجات مختارة للحياة العصرية، لتجعل أيامك أكثر أناقة وعملية ومتعة.',
    footerShop: 'المتجر',
    newArrivals: 'وصل حديثًا',
    bestSellers: 'الأكثر مبيعًا',
    company: 'الشركة',
    about: 'من نحن',
    careers: 'الوظائف',
    support: 'الدعم',
    shipping: 'الشحن',
    footerReturns: 'الإرجاع',
    contact: 'اتصل بنا',
    copyright: '©',
    rightsReserved: 'جميع الحقوق محفوظة.',
    socialLinks: 'روابط التواصل الاجتماعي',
    addToCart: 'أضف إلى السلة',
    added: 'تمت الإضافة',
    unnamedProduct: 'منتج بدون اسم',
    noProducts: 'لا توجد منتجات. أضف مجلدًا داخل products يحتوي على text.txt ومجلد media.',
    noMatches: 'لا توجد منتجات تطابق بحثك.',
    loadError: 'تعذر تحميل المنتجات. تأكد من تشغيل الخادم باستخدام node server.js.',
    languageButton: 'English',
    languageLabel: 'تغيير اللغة'
  }
};

const cart = new Map();
let allProducts = [];
let selectedProduct = null;
let productDetailTrigger = null;
let currentLanguage = localStorage.getItem('storeLanguage') === 'ar' ? 'ar' : 'en';

function translatePage() {
  const dictionary = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.title = dictionary.pageTitle;
  document.querySelector('#page-description').content = dictionary.pageDescription;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translation = dictionary[element.dataset.i18n];
    if (translation) element.textContent = translation;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', dictionary[element.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = dictionary[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.alt = dictionary[element.dataset.i18nAlt];
  });

  languageToggle.textContent = dictionary.languageButton;
  languageToggle.setAttribute('aria-label', dictionary.languageLabel);
  applyFilters();
  renderCart();
}

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
      productsGrid.textContent = translations[currentLanguage].loadError;
    }
  }
}

function productKey(product) {
  return String(product.id || `${product.name || ''}|${product.price || ''}|${getProductImage(product)}`);
}

function getProductImage(product) {
  return Array.isArray(product.images) ? product.images[0] : product.image;
}

function getNumericPrice(product) {
  const match = String(product.price || '').replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function updateCartCount() {
  const count = [...cart.values()].reduce((total, item) => total + item.quantity, 0);
  if (cartCount) cartCount.textContent = count;
  if (cartItemCount) cartItemCount.textContent = count;
  const subtotal = [...cart.values()].reduce((total, item) => total + getNumericPrice(item.product) * item.quantity, 0);
  if (cartSubtotal) {
    cartSubtotal.textContent = subtotal.toLocaleString(currentLanguage, { maximumFractionDigits: 2 });
  }
}

function renderCart() {
  if (!cartItems) return;

  const dictionary = translations[currentLanguage];
  cartItems.replaceChildren();
  updateCartCount();

  if (cart.size === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'cart-empty';
    emptyMessage.textContent = dictionary.emptyCart;
    cartItems.append(emptyMessage);
    return;
  }

  cart.forEach(({ product, quantity }, key) => {
    const row = document.createElement('article');
    row.className = 'cart-item';

    const image = document.createElement('img');
    image.className = 'cart-item-image';
    image.src = getProductImage(product) || '';
    image.alt = product.name || dictionary.unnamedProduct;

    const details = document.createElement('div');
    details.className = 'cart-item-details';

    const name = document.createElement('h3');
    name.className = 'cart-item-name';
    name.textContent = product.name || dictionary.unnamedProduct;

    const price = document.createElement('strong');
    price.className = 'cart-item-price';
    price.textContent = product.price || '';

    const controls = document.createElement('div');
    controls.className = 'cart-item-controls';

    const decreaseButton = document.createElement('button');
    decreaseButton.type = 'button';
    decreaseButton.className = 'quantity-button';
    decreaseButton.textContent = '−';
    decreaseButton.setAttribute('aria-label', dictionary.decreaseQuantity);
    decreaseButton.addEventListener('click', () => {
      if (quantity === 1) cart.delete(key);
      else cart.set(key, { product, quantity: quantity - 1 });
      renderCart();
    });

    const quantityText = document.createElement('span');
    quantityText.className = 'cart-item-quantity';
    quantityText.textContent = quantity;

    const increaseButton = document.createElement('button');
    increaseButton.type = 'button';
    increaseButton.className = 'quantity-button';
    increaseButton.textContent = '+';
    increaseButton.setAttribute('aria-label', dictionary.increaseQuantity);
    increaseButton.addEventListener('click', () => {
      cart.set(key, { product, quantity: quantity + 1 });
      renderCart();
    });

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'remove-cart-item';
    removeButton.textContent = dictionary.removeItem;
    removeButton.addEventListener('click', () => {
      cart.delete(key);
      renderCart();
    });

    controls.append(decreaseButton, quantityText, increaseButton, removeButton);
    details.append(name, price, controls);
    row.append(image, details);
    cartItems.append(row);
  });
}

function openCart() {
  cartDrawer.hidden = false;
  cartBackdrop.hidden = false;
  cartToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('cart-open');
  cartClose.focus();
}

function closeCart() {
  cartDrawer.hidden = true;
  cartBackdrop.hidden = true;
  cartToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('cart-open');
  cartToggle.focus();
}

function openProductDetails(product, trigger) {
  const dictionary = translations[currentLanguage];
  selectedProduct = product;
  productDetailTrigger = trigger;
  productDetailImage.src = getProductImage(product) || '';
  productDetailImage.alt = product.name || dictionary.unnamedProduct;
  productDetailTitle.textContent = product.name || dictionary.unnamedProduct;
  productDetailPrice.textContent = product.price || '';
  productDetailDescription.textContent = product.description || '';
  productDetailAdd.textContent = dictionary.addToCart;
  productDialog.hidden = false;
  cartBackdrop.hidden = false;
  document.body.classList.add('cart-open');
  productDialogClose.focus();
}

function closeProductDetails() {
  productDialog.hidden = true;
  cartBackdrop.hidden = true;
  document.body.classList.remove('cart-open');
  selectedProduct = null;
  if (productDetailTrigger) productDetailTrigger.focus();
  productDetailTrigger = null;
}

function addProductToCart(product) {
  const key = productKey(product);
  const existingItem = cart.get(key);
  cart.set(key, { product, quantity: existingItem ? existingItem.quantity + 1 : 1 });
  renderCart();
}

function renderProducts(products) {
  if (!productsGrid) return;

  productsGrid.replaceChildren();

  if (products.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'products-empty';
    emptyMessage.textContent = allProducts.length === 0
      ? translations[currentLanguage].noProducts
      : translations[currentLanguage].noMatches;
    productsGrid.append(emptyMessage);
    return;
  }

  products.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';

    const imageFrame = document.createElement('button');
    imageFrame.type = 'button';
    imageFrame.className = 'product-image product-image-button';
    imageFrame.setAttribute('aria-label', `${translations[currentLanguage].viewProductDetails}: ${product.name || translations[currentLanguage].unnamedProduct}`);
    const image = document.createElement('img');
    image.src = getProductImage(product);
    image.alt = product.name || 'Product image';
    image.loading = 'lazy';
    imageFrame.addEventListener('click', () => openProductDetails(product, imageFrame));
    imageFrame.append(image);

    const body = document.createElement('div');
    body.className = 'product-body';

    const name = document.createElement('h3');
    name.className = 'product-name';
    name.textContent = product.name || translations[currentLanguage].unnamedProduct;

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
    addButton.textContent = translations[currentLanguage].addToCart;
    addButton.addEventListener('click', () => {
      addProductToCart(product);

      addButton.textContent = translations[currentLanguage].added;
      addButton.disabled = true;
      setTimeout(() => {
        addButton.textContent = translations[currentLanguage].addToCart;
        addButton.disabled = false;
      }, 800);
    });

    body.append(name, description, pricing, addButton);
    card.append(imageFrame, body);
    productsGrid.append(card);
  });
}

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartContinue.addEventListener('click', closeCart);
productDialogClose.addEventListener('click', closeProductDetails);
productDetailAdd.addEventListener('click', () => {
  if (!selectedProduct) return;
  addProductToCart(selectedProduct);
  productDetailAdd.textContent = translations[currentLanguage].added;
  setTimeout(() => {
    if (!productDialog.hidden) productDetailAdd.textContent = translations[currentLanguage].addToCart;
  }, 800);
});
cartBackdrop.addEventListener('click', () => {
  if (!productDialog.hidden) closeProductDetails();
  else closeCart();
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!productDialog.hidden) closeProductDetails();
  else if (!cartDrawer.hidden) closeCart();
});

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    if (headerSearchInput) headerSearchInput.value = event.target.value;
    applyFilters();
  });
}

if (headerSearchInput) {
  headerSearchInput.addEventListener('input', (event) => {
    if (searchInput) searchInput.value = event.target.value;
    applyFilters();
  });
}

languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  localStorage.setItem('storeLanguage', currentLanguage);
  translatePage();
});

function applyFilters() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const filteredProducts = allProducts.filter(product => {
    const searchableText = `${product.name || ''} ${product.description || ''}`.toLowerCase();
    return query === '' || searchableText.includes(query);
  });

  renderProducts(filteredProducts);
}

// Initialize the page
translatePage();
loadProducts();
if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
  setInterval(loadProducts, 5000);
}
