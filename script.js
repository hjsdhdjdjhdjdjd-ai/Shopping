const cartCount = document.querySelector('#cart-count');
const productsGrid = document.querySelector('#products-grid');
const searchInput = document.querySelector('#searchInput');
const yearEl = document.querySelector('#year');
const languageToggle = document.querySelector('#language-toggle');

const translations = {
  en: {
    pageTitle: 'Smart Shopping',
    pageDescription: 'NexaCart offers modern essentials, trending gadgets, and handcrafted home finds with fast shipping and easy returns.',
    freeShippingTop: 'Free shipping over $50',
    seasonSaleTop: 'New season sale: up to 50% off',
    brandName: 'Tota Cart',
    homeLabel: 'TotaCart home',
    mainNavigation: 'Main navigation',
    navHome: 'Home',
    navShop: 'Shop',
    navDeals: 'Deals',
    navWhyUs: 'Why us',
    navReviews: 'Reviews',
    searchLabel: 'Search',
    cartLabel: 'Shopping cart',
    heroEyebrow: 'New arrivals this week',
    heroTitle: 'Smart style for',
    heroTitleAccent: 'everyday life',
    heroCopy: 'Discover premium essentials, beauty picks, and home upgrades designed to make your everyday routine smoother and more enjoyable.',
    shopNow: 'Shop now',
    exploreMore: 'Explore more',
    storeBenefits: 'Store benefits',
    ratingMeta: '⭐ 4.9/5 rated',
    deliveryMeta: '🚚 Fast delivery',
    paymentMeta: '🔒 Secure payment',
    heroImageLabel: 'Featured products image collage',
    heroProductAlt: 'Modern wireless headphones',
    customerRating: 'Customer rating',
    upToOff: 'Up to 40% off',
    seasonFavorites: 'Season favorites',
    freeShipping: 'Free shipping',
    freeShippingCopy: 'On all orders over $50',
    secureCheckout: 'Secure checkout',
    secureCheckoutCopy: 'Protected and encrypted',
    returns: '30-day returns',
    returnsCopy: 'Easy, stress-free policy',
    trending: 'Trending now',
    popularPicks: 'Popular picks',
    popularCopy: 'Handpicked favorites chosen for comfort, style, and everyday value.',
    searchPlaceholder: 'Search products',
    searchProducts: 'Search products',
    flashDeal: 'Flash deal',
    dealTitle: 'Weekend essentials at unbeatable prices',
    dealCopy: 'Explore must-have items for work, travel, and home, with unbeatable savings across our most-loved categories.',
    hours: 'Hrs',
    minutes: 'Min',
    seconds: 'Sec',
    shopDeal: 'Shop the deal',
    dealImageAlt: 'Interior design product display',
    whyChooseUs: 'Why choose us',
    betterShopping: 'Built for better shopping',
    fastDelivery: 'Fast delivery',
    fastDeliveryCopy: 'Get your favorites shipped quickly and tracked from checkout to doorstep.',
    helpfulSupport: 'Helpful support',
    helpfulSupportCopy: 'Our team is here to answer questions and guide your purchases with care.',
    giftReady: 'Gift-ready picks',
    giftReadyCopy: 'Curated upgrades for birthdays, celebrations, and thoughtful surprises.',
    verifiedQuality: 'Verified quality',
    verifiedQualityCopy: 'Every order is carefully selected to offer style, comfort, and reliability.',
    customerLove: 'Customer love',
    whatShoppersSay: 'What shoppers say',
    reviewAmelia: '“The quality is fantastic and delivery was incredibly fast. The whole shopping experience felt smooth and premium.”',
    reviewDaniel: '“I found everything I needed for my home office and the style matches my space perfectly. Highly recommended.”',
    reviewSophia: '“Beautiful product selection with genuine value. I especially love how easy it is to discover standout deals.”',
    customerPortrait: 'Customer portrait',
    verifiedBuyer: 'Verified buyer',
    homeShopper: 'Home shopper',
    repeatCustomer: 'Repeat customer',
    newsletterTitle: 'Stay in the loop',
    newsletterCopy: 'Get exclusive offers and new arrival alerts sent right to your inbox.',
    emailPlaceholder: 'Enter your email',
    emailLabel: 'Email address',
    subscribe: 'Subscribe',
    footerBrandCopy: 'Curated essentials for modern living, designed to keep your everyday life stylish, practical, and joyful.',
    footerShop: 'Shop',
    newArrivals: 'New arrivals',
    bestSellers: 'Best sellers',
    sales: 'Sales',
    company: 'Company',
    about: 'About',
    footerReviews: 'Reviews',
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
    pageDescription: 'توتا كارت يقدم مستلزمات عصرية وأجهزة رائجة ومنتجات منزلية مميزة، مع شحن سريع وإرجاع سهل.',
    freeShippingTop: 'شحن مجاني للطلبات فوق ٥٠ دولارًا',
    seasonSaleTop: 'تخفيضات الموسم الجديد: خصم يصل إلى ٥٠٪',
    brandName: 'توتا كارت',
    homeLabel: 'الصفحة الرئيسية لتوتا كارت',
    mainNavigation: 'القائمة الرئيسية',
    navHome: 'الرئيسية',
    navShop: 'المتجر',
    navDeals: 'العروض',
    navWhyUs: 'لماذا نحن',
    navReviews: 'آراء العملاء',
    searchLabel: 'بحث',
    cartLabel: 'سلة التسوق',
    heroEyebrow: 'وصل حديثًا هذا الأسبوع',
    heroTitle: 'أناقة ذكية لكل',
    heroTitleAccent: 'يوم',
    heroCopy: 'اكتشف مستلزمات مميزة ومنتجات للعناية والجمال ولمسات منزلية تجعل يومك أسهل وأكثر متعة.',
    shopNow: 'تسوق الآن',
    exploreMore: 'اكتشف المزيد',
    storeBenefits: 'مزايا المتجر',
    ratingMeta: '⭐ تقييم ٤٫٩ من ٥',
    deliveryMeta: '🚚 توصيل سريع',
    paymentMeta: '🔒 دفع آمن',
    heroImageLabel: 'صور المنتجات المميزة',
    heroProductAlt: 'سماعات لاسلكية عصرية',
    customerRating: 'تقييم العملاء',
    upToOff: 'خصم يصل إلى ٤٠٪',
    seasonFavorites: 'اختيارات الموسم',
    freeShipping: 'شحن مجاني',
    freeShippingCopy: 'على جميع الطلبات فوق ٥٠ دولارًا',
    secureCheckout: 'دفع آمن',
    secureCheckoutCopy: 'حماية وتشفير للبيانات',
    returns: 'إرجاع خلال ٣٠ يومًا',
    returnsCopy: 'سياسة سهلة وخالية من المتاعب',
    trending: 'رائج الآن',
    popularPicks: 'اختيارات مميزة',
    popularCopy: 'منتجات مختارة بعناية تجمع بين الراحة والأناقة والقيمة.',
    searchPlaceholder: 'ابحث عن المنتجات',
    searchProducts: 'البحث عن المنتجات',
    flashDeal: 'عرض خاطف',
    dealTitle: 'مستلزمات نهاية الأسبوع بأسعار لا تُفوّت',
    dealCopy: 'اكتشف مستلزمات العمل والسفر والمنزل، واستفد من توفير مميز على الفئات الأكثر شعبية.',
    hours: 'ساعة',
    minutes: 'دقيقة',
    seconds: 'ثانية',
    shopDeal: 'تسوق العرض',
    dealImageAlt: 'عرض لمنتجات التصميم الداخلي',
    whyChooseUs: 'لماذا تختارنا',
    betterShopping: 'تجربة تسوق أفضل',
    fastDelivery: 'توصيل سريع',
    fastDeliveryCopy: 'نوصّل منتجاتك المفضلة بسرعة، مع إمكانية تتبع الطلب حتى باب منزلك.',
    helpfulSupport: 'دعم ومساعدة',
    helpfulSupportCopy: 'فريقنا جاهز للإجابة عن أسئلتك ومساعدتك في اختيار المنتجات المناسبة.',
    giftReady: 'هدايا مميزة',
    giftReadyCopy: 'اختيارات رائعة لأعياد الميلاد والمناسبات والمفاجآت الجميلة.',
    verifiedQuality: 'جودة موثوقة',
    verifiedQualityCopy: 'نختار كل منتج بعناية لنقدم لك الأناقة والراحة والموثوقية.',
    customerLove: 'آراء عملائنا',
    whatShoppersSay: 'ماذا يقول المتسوقون',
    reviewAmelia: '«الجودة رائعة والتوصيل سريع للغاية. كانت تجربة التسوق بأكملها سهلة ومميزة.»',
    reviewDaniel: '«وجدت كل ما أحتاجه لمكتب المنزل، والتصميم يناسب مساحتي تمامًا. أنصح به بشدة.»',
    reviewSophia: '«تشكيلة جميلة وأسعار مناسبة. أعجبني بشكل خاص سهولة العثور على العروض المميزة.»',
    customerPortrait: 'صورة العميل',
    verifiedBuyer: 'عميل موثّق',
    homeShopper: 'مهتم بالمنزل',
    repeatCustomer: 'عميل دائم',
    newsletterTitle: 'ابقَ على اطلاع',
    newsletterCopy: 'اشترك لتصلك العروض الحصرية وإشعارات المنتجات الجديدة.',
    emailPlaceholder: 'أدخل بريدك الإلكتروني',
    emailLabel: 'البريد الإلكتروني',
    subscribe: 'اشترك',
    footerBrandCopy: 'منتجات مختارة للحياة العصرية، لتجعل أيامك أكثر أناقة وعملية ومتعة.',
    footerShop: 'المتجر',
    newArrivals: 'وصل حديثًا',
    bestSellers: 'الأكثر مبيعًا',
    sales: 'التخفيضات',
    company: 'الشركة',
    about: 'من نحن',
    footerReviews: 'آراء العملاء',
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

let cartTotal = 0;
let allProducts = [];
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
      cartTotal += 1;
      if (cartCount) cartCount.textContent = cartTotal;

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

if (searchInput) {
  searchInput.addEventListener('input', applyFilters);
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
