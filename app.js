// Application data
const appData = {
  "artisans": [
    {
      "id": "art_001",
      "name": "Rajesh Kumar Sharma",
      "shop_name": "Heritage Textiles",
      "location": "Jaipur, Rajasthan",
      "specialization": "Block Printing & Handloom",
      "bio": "Third-generation textile artisan specializing in traditional Rajasthani block printing techniques passed down through generations.",
      "profile_image": "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300",
      "rating": 4.8,
      "products_count": 24,
      "years_experience": 18,
      "heritage_story": "Our family has been practicing block printing for over 60 years, using natural dyes and traditional wooden blocks carved by local craftsmen."
    },
    {
      "id": "art_002", 
      "name": "Meera Devi",
      "shop_name": "Clay Creations",
      "location": "Khurja, Uttar Pradesh",
      "specialization": "Pottery & Ceramics",
      "bio": "Master potter creating beautiful ceramic pieces using traditional techniques from the famous pottery town of Khurja.",
      "profile_image": "https://images.unsplash.com/photo-1680506660555-1c225f5da953?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 4.9,
      "products_count": 18,
      "years_experience": 25,
      "heritage_story": "Khurja pottery tradition dates back 600 years. I learned from my grandmother who taught me the secrets of the perfect clay mixture."
    },
    {
      "id": "art_003",
      "name": "Abdul Rahman",
      "shop_name": "Woodcraft Masters",
      "location": "Saharanpur, Uttar Pradesh", 
      "specialization": "Wood Carving",
      "bio": "Skilled woodcarver creating intricate designs in traditional Indian furniture and decorative pieces.",
      "profile_image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      "rating": 4.7,
      "products_count": 32,
      "years_experience": 22,
      "heritage_story": "Saharanpur wood carving is renowned worldwide. Our techniques have been refined over centuries, creating pieces that blend utility with artistry."
    },
    {
      "id": "art_004",
      "name": "Lakshmi Nair",
      "shop_name": "Golden Threads",
      "location": "Kanchipuram, Tamil Nadu",
      "specialization": "Silk Weaving",
      "bio": "Traditional silk weaver creating exquisite Kanchipuram sarees with intricate zari work.",
      "profile_image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      "rating": 4.9,
      "products_count": 15,
      "years_experience": 20,
      "heritage_story": "Kanchipuram silk sarees are legendary for their quality. Each saree takes weeks to complete, with patterns that tell stories of our culture."
    }
  ],
  "products": [
    {
      "id": "prod_001",
      "artisan_id": "art_001",
      "name": "Royal Rajasthani Block Print Bedsheet Set",
      "category": "Textiles",
      "price": 2499,
      "description": "Handcrafted bedsheet set featuring traditional Rajasthani block prints in natural indigo dye",
      "image_urls": ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400"],
      "cultural_story": "Block printing in Rajasthan dates back to the 12th century, using hand-carved wooden blocks and natural dyes",
      "rating": 4.8,
      "reviews_count": 23,
      "stock": 12
    },
    {
      "id": "prod_002", 
      "artisan_id": "art_002",
      "name": "Traditional Blue Pottery Dinner Set",
      "category": "Pottery",
      "price": 3999,
      "description": "Complete dinner set in traditional Khurja blue pottery with hand-painted floral motifs",
      "image_urls": ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"],
      "cultural_story": "Khurja blue pottery originated in the 14th century, known for its distinctive cobalt blue glaze and Persian-inspired designs",
      "rating": 4.9,
      "reviews_count": 18,
      "stock": 8
    },
    {
      "id": "prod_003",
      "artisan_id": "art_003", 
      "name": "Carved Wooden Jewelry Box",
      "category": "Woodwork",
      "price": 1899,
      "description": "Intricately carved sheesham wood jewelry box with traditional Indian motifs",
      "image_urls": ["https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400"],
      "cultural_story": "Saharanpur wood carving combines Mughal and local traditions, creating pieces that are both functional and artistic",
      "rating": 4.7,
      "reviews_count": 31,
      "stock": 15
    },
    {
      "id": "prod_004",
      "artisan_id": "art_004",
      "name": "Pure Kanchipuram Silk Saree",
      "category": "Textiles", 
      "price": 15999,
      "description": "Handwoven pure silk saree with traditional temple border and rich zari work",
      "image_urls": ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400"],
      "cultural_story": "Kanchipuram sarees are woven with threads blessed in local temples, making each piece sacred and special",
      "rating": 5.0,
      "reviews_count": 12,
      "stock": 5
    }
  ],
  "categories": [
    {"name": "Textiles", "count": 145, "icon": "🧵"},
    {"name": "Pottery", "count": 89, "icon": "🏺"},
    {"name": "Woodwork", "count": 134, "icon": "🪵"},
    {"name": "Metalwork", "count": 67, "icon": "⚒️"},
    {"name": "Jewelry", "count": 234, "icon": "💍"},
    {"name": "Paintings", "count": 78, "icon": "🎨"}
  ],
  "stories": [
    {
      "title": "The Art of Block Printing: A 800-Year Legacy",
      "excerpt": "Discover how traditional block printing techniques have survived through centuries in Rajasthan",
      "image": "https://images.unsplash.com/photo-1578662015088-f1d193b5b1ba?w=400",
      "author": "Cultural Heritage Team"
    },
    {
      "title": "From Clay to Art: The Khurja Pottery Tradition", 
      "excerpt": "Journey through the historic pottery town and meet the master craftsmen preserving ancient techniques",
      "image": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400",
      "author": "Cultural Heritage Team"
    }
  ],
  "features": [
    {
      "title": "AI-Powered Storytelling",
      "description": "Generate compelling product descriptions that highlight cultural heritage and craftsmanship",
      "icon": "🤖"
    },
    {
      "title": "Multilingual Support",
      "description": "Reach global audiences with automatic translation in 15+ Indian and international languages",
      "icon": "🌐"
    },
    {
      "title": "Digital Marketplace",
      "description": "Direct-to-consumer platform eliminating middlemen and maximizing artisan profits",
      "icon": "🛒"
    },
    {
      "title": "Cultural Documentation", 
      "description": "Preserve and share traditional craft techniques and cultural stories for future generations",
      "icon": "📚"
    }
  ]
};

// State management
let currentLanguage = 'en';
let filteredProducts = [...appData.products];

// DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const languageToggle = document.getElementById('language-toggle');

// Modal elements
const artisanModal = document.getElementById('artisan-modal');
const productModal = document.getElementById('product-modal');
const registrationModal = document.getElementById('registration-modal');
const aiToolsModal = document.getElementById('ai-tools-modal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderContent();
});

function initializeApp() {
    console.log('Artisan Connect Platform Initialized');
    
    // Add fade-in animation to main content
    setTimeout(() => {
        document.querySelector('.main-content').classList.add('fade-in');
    }, 100);
}

function setupEventListeners() {
    // Navigation
    hamburger?.addEventListener('click', toggleMobileMenu);
    
    // Language toggle
    languageToggle?.addEventListener('click', toggleLanguage);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu if open
                navMenu?.classList.remove('active');
            }
        });
    });
    
    // Hero action buttons
    document.getElementById('explore-artisans')?.addEventListener('click', () => {
        document.getElementById('artisans').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('join-platform')?.addEventListener('click', () => {
        showModal('registration-modal');
    });
    
    // View all artisans button
    document.getElementById('view-all-artisans')?.addEventListener('click', () => {
        alert('View All Artisans page would be implemented here');
    });
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            hideModal(modal.id);
        });
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal(this.id);
            }
        });
    });
    
    // Filter and search functionality
    document.getElementById('category-filter')?.addEventListener('change', filterProducts);
    document.getElementById('price-filter')?.addEventListener('change', filterProducts);
    document.getElementById('product-search')?.addEventListener('input', debounce(filterProducts, 300));
    
    // AI tools
    document.getElementById('generate-description')?.addEventListener('click', generateAIDescription);
    document.getElementById('translate-description')?.addEventListener('click', translateDescription);
    
    // Form submission
    document.getElementById('artisan-registration-form')?.addEventListener('submit', handleArtisanRegistration);
}

function toggleMobileMenu() {
    navMenu?.classList.toggle('active');
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    languageToggle.textContent = currentLanguage === 'en' ? 'हिंदी' : 'English';
    
    // Update page content based on language
    updateLanguageContent();
}

function updateLanguageContent() {
    const translations = {
        hi: {
            'Discover Artisans': 'शिल्पकारों की खोज करें',
            'Join as Artisan': 'शिल्पकार के रूप में जुड़ें',
            'View All Artisans': 'सभी शिल्पकार देखें',
            'All Categories': 'सभी श्रेणियां',
            'All Prices': 'सभी कीमतें'
        }
    };
    
    if (currentLanguage === 'hi') {
        // Update button texts
        document.getElementById('explore-artisans').textContent = translations.hi['Discover Artisans'];
        document.getElementById('join-platform').textContent = translations.hi['Join as Artisan'];
        document.getElementById('view-all-artisans').textContent = translations.hi['View All Artisans'];
        
        // Update filter options
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter?.options[0]) {
            categoryFilter.options[0].textContent = translations.hi['All Categories'];
        }
        
        const priceFilter = document.getElementById('price-filter');
        if (priceFilter?.options[0]) {
            priceFilter.options[0].textContent = translations.hi['All Prices'];
        }
    } else {
        // Revert to English
        document.getElementById('explore-artisans').textContent = 'Discover Artisans';
        document.getElementById('join-platform').textContent = 'Join as Artisan';
        document.getElementById('view-all-artisans').textContent = 'View All Artisans';
        
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter?.options[0]) {
            categoryFilter.options[0].textContent = 'All Categories';
        }
        
        const priceFilter = document.getElementById('price-filter');
        if (priceFilter?.options[0]) {
            priceFilter.options[0].textContent = 'All Prices';
        }
    }
}

function renderContent() {
    renderFeatures();
    renderCategories();
    renderArtisans();
    renderProducts();
    renderStories();
    populateFilters();
}

function renderFeatures() {
    const featuresGrid = document.getElementById('features-grid');
    if (!featuresGrid) return;
    
    featuresGrid.innerHTML = appData.features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">${feature.icon}</div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
        </div>
    `).join('');
}

function renderCategories() {
    const categoriesGrid = document.getElementById('categories-grid');
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = appData.categories.map(category => `
        <div class="category-card" onclick="filterByCategory('${category.name}')">
            <div class="category-icon">${category.icon}</div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-count">${category.count} items</p>
        </div>
    `).join('');
}

function renderArtisans() {
    const artisansGrid = document.getElementById('artisans-grid');
    if (!artisansGrid) return;
    
    artisansGrid.innerHTML = appData.artisans.map(artisan => `
        <div class="artisan-card" onclick="showArtisanProfile('${artisan.id}')">
            <div class="artisan-header">
                <img src="${artisan.profile_image}" alt="${artisan.name}" class="artisan-avatar">
                <div class="artisan-info">
                    <h3 class="artisan-name">${artisan.name}</h3>
                    <p class="artisan-location">${artisan.location}</p>
                </div>
            </div>
            <p class="artisan-specialization">${artisan.specialization}</p>
            <p class="artisan-bio">${artisan.bio}</p>
            <div class="artisan-stats">
                <div class="artisan-stat">
                    <span class="artisan-stat-number">${artisan.rating}</span>
                    <span class="artisan-stat-label">Rating</span>
                </div>
                <div class="artisan-stat">
                    <span class="artisan-stat-number">${artisan.products_count}</span>
                    <span class="artisan-stat-label">Products</span>
                </div>
                <div class="artisan-stat">
                    <span class="artisan-stat-number">${artisan.years_experience}</span>
                    <span class="artisan-stat-label">Years</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = filteredProducts.map(product => {
        const artisan = appData.artisans.find(a => a.id === product.artisan_id);
        const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
        
        return `
            <div class="product-card" onclick="showProductDetail('${product.id}')">
                <img src="${product.image_urls[0]}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">₹${product.price.toLocaleString()}</p>
                    <p class="product-artisan">by ${artisan?.name || 'Unknown Artisan'}</p>
                    <div class="product-rating">
                        <span class="rating-stars">${stars}</span>
                        <span>(${product.reviews_count})</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderStories() {
    const storiesGrid = document.getElementById('stories-grid');
    if (!storiesGrid) return;
    
    storiesGrid.innerHTML = appData.stories.map(story => `
        <div class="story-card" onclick="showStoryDetail('${story.title}')">
            <img src="${story.image}" alt="${story.title}" class="story-image">
            <div class="story-content">
                <h3 class="story-title">${story.title}</h3>
                <p class="story-excerpt">${story.excerpt}</p>
                <p class="story-author">by ${story.author}</p>
            </div>
        </div>
    `).join('');
}

function populateFilters() {
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        const categories = [...new Set(appData.products.map(p => p.category))];
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }
}

function filterByCategory(categoryName) {
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.value = categoryName;
        filterProducts();
        
        // Scroll to marketplace
        document.getElementById('marketplace').scrollIntoView({ behavior: 'smooth' });
    }
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter')?.value || '';
    const priceFilter = document.getElementById('price-filter')?.value || '';
    const searchTerm = document.getElementById('product-search')?.value.toLowerCase() || '';
    
    filteredProducts = appData.products.filter(product => {
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        const matchesSearch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        
        let matchesPrice = true;
        if (priceFilter) {
            const price = product.price;
            switch(priceFilter) {
                case '0-2000':
                    matchesPrice = price < 2000;
                    break;
                case '2000-5000':
                    matchesPrice = price >= 2000 && price < 5000;
                    break;
                case '5000-10000':
                    matchesPrice = price >= 5000 && price < 10000;
                    break;
                case '10000+':
                    matchesPrice = price >= 10000;
                    break;
            }
        }
        
        return matchesCategory && matchesSearch && matchesPrice;
    });
    
    renderProducts();
}

function showArtisanProfile(artisanId) {
    const artisan = appData.artisans.find(a => a.id === artisanId);
    if (!artisan) return;
    
    const artisanProducts = appData.products.filter(p => p.artisan_id === artisanId);
    const stars = '★'.repeat(Math.floor(artisan.rating)) + '☆'.repeat(5 - Math.floor(artisan.rating));
    
    document.getElementById('artisan-modal-content').innerHTML = `
        <div class="artisan-profile-header">
            <img src="${artisan.profile_image}" alt="${artisan.name}" class="artisan-profile-avatar">
            <div class="artisan-profile-info">
                <h3>${artisan.name}</h3>
                <p class="artisan-profile-shop">${artisan.shop_name}</p>
                <p class="artisan-profile-location">${artisan.location}</p>
                <div class="product-rating">
                    <span class="rating-stars">${stars}</span>
                    <span>(${artisan.rating}/5.0)</span>
                </div>
            </div>
        </div>
        
        <div class="artisan-profile-section">
            <h4>About</h4>
            <p>${artisan.bio}</p>
        </div>
        
        <div class="artisan-profile-section">
            <h4>Heritage Story</h4>
            <p>${artisan.heritage_story}</p>
        </div>
        
        <div class="artisan-profile-section">
            <h4>Specialization</h4>
            <p><strong>${artisan.specialization}</strong> • ${artisan.years_experience} years of experience</p>
        </div>
        
        <div class="artisan-profile-section">
            <h4>Products (${artisan.products_count})</h4>
            <div class="products-grid">
                ${artisanProducts.map(product => `
                    <div class="product-card" onclick="showProductDetail('${product.id}')">
                        <img src="${product.image_urls[0]}" alt="${product.name}" class="product-image">
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-price">₹${product.price.toLocaleString()}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="product-actions">
            <button class="btn btn--primary" onclick="contactArtisan('${artisan.id}')">Message Artisan</button>
            <button class="btn btn--secondary" onclick="showAITools()">View AI Tools Demo</button>
        </div>
    `;
    
    showModal('artisan-modal');
}

function showProductDetail(productId) {
    const product = appData.products.find(p => p.id === productId);
    const artisan = appData.artisans.find(a => a.id === product.artisan_id);
    if (!product) return;
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    document.getElementById('product-modal-content').innerHTML = `
        <div class="product-detail-header">
            <img src="${product.image_urls[0]}" alt="${product.name}" class="product-detail-image">
            <h3>${product.name}</h3>
            <p class="product-detail-price">₹${product.price.toLocaleString()}</p>
            <div class="product-rating">
                <span class="rating-stars">${stars}</span>
                <span>(${product.reviews_count} reviews)</span>
            </div>
        </div>
        
        <div class="product-detail-section">
            <h4>Description</h4>
            <p>${product.description}</p>
        </div>
        
        <div class="product-detail-section">
            <h4>Cultural Story</h4>
            <p>${product.cultural_story}</p>
        </div>
        
        <div class="product-detail-section">
            <h4>Artisan</h4>
            <p><strong>${artisan.name}</strong> from ${artisan.location}</p>
            <p>${artisan.specialization}</p>
            <button class="btn btn--outline btn--sm" onclick="showArtisanProfile('${artisan.id}')">View Artisan Profile</button>
        </div>
        
        <div class="product-detail-section">
            <h4>Availability</h4>
            <p>${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
        </div>
        
        <div class="product-actions">
            <button class="btn btn--primary ${product.stock === 0 ? 'btn:disabled' : ''}" 
                    ${product.stock === 0 ? 'disabled' : ''}>
                ${product.stock === 0 ? 'Out of Stock' : 'Contact for Purchase'}
            </button>
            <button class="btn btn--secondary" onclick="addToWishlist('${product.id}')">Add to Wishlist</button>
        </div>
    `;
    
    showModal('product-modal');
}

function showStoryDetail(title) {
    alert(`Story "${title}" would open in full view. This would be implemented as a detailed story page.`);
}

function contactArtisan(artisanId) {
    const artisan = appData.artisans.find(a => a.id === artisanId);
    alert(`Message system for ${artisan.name} would be implemented here. This would open a chat interface or contact form.`);
}

function addToWishlist(productId) {
    const product = appData.products.find(p => p.id === productId);
    alert(`"${product.name}" has been added to your wishlist! Wishlist functionality would be fully implemented here.`);
}

function showAITools() {
    hideModal('artisan-modal');
    showModal('ai-tools-modal');
}

function generateAIDescription() {
    const productName = document.getElementById('ai-product-name').value;
    const craftType = document.getElementById('ai-craft-type').value;
    const features = document.getElementById('ai-features').value;
    
    if (!productName || !features) {
        alert('Please fill in product name and key features');
        return;
    }
    
    // Simulate AI generation
    document.getElementById('generate-description').textContent = 'Generating...';
    document.getElementById('generate-description').disabled = true;
    
    setTimeout(() => {
        const generatedText = generateMockDescription(productName, craftType, features);
        document.getElementById('generated-text').innerHTML = generatedText;
        document.getElementById('ai-output').style.display = 'block';
        document.getElementById('generate-description').textContent = 'Generate AI Description';
        document.getElementById('generate-description').disabled = false;
    }, 2000);
}

function generateMockDescription(name, craftType, features) {
    const templates = {
        textiles: `Experience the timeless beauty of "${name}", a masterpiece that embodies centuries of textile tradition. Crafted with ${features.toLowerCase()}, this exquisite piece showcases the rich heritage of Indian craftsmanship. Each thread tells a story of cultural legacy, passed down through generations of skilled artisans who have perfected their art over decades.`,
        pottery: `Discover the artistry of "${name}", where ancient pottery traditions meet contemporary elegance. Created using ${features.toLowerCase()}, this stunning piece reflects the mastery of traditional techniques that have been refined over centuries. The careful attention to detail and authentic craftsmanship make this a true treasure.`,
        woodwork: `Behold the magnificence of "${name}", a testament to the skilled woodworking traditions of India. Featuring ${features.toLowerCase()}, this piece represents hours of meticulous craftsmanship and artistic vision. Each carved detail reflects the deep cultural heritage and artistic excellence of our master craftsmen.`,
        metalwork: `Admire the brilliance of "${name}", where traditional metalworking meets artistic excellence. Enhanced with ${features.toLowerCase()}, this exceptional piece showcases the time-honored techniques that have been perfected by generations of skilled metalworkers. The intricate details and superior craftsmanship make this a truly remarkable creation.`
    };
    
    return templates[craftType] || templates.textiles;
}

function translateDescription() {
    const englishText = document.getElementById('generated-text').innerHTML;
    
    // Mock Hindi translation
    const hindiTranslation = `"${document.getElementById('ai-product-name').value}" की कालातीत सुंदरता का अनुभव करें, एक ऐसी कृति जो सदियों की वस्त्र परंपरा को दर्शाती है। यह उत्कृष्ट कृति भारतीय शिल्पकारी की समृद्ध विरासत को प्रदर्शित करती है। हर धागा एक सांस्कृतिक विरासत की कहानी कहता है।`;
    
    document.getElementById('generated-text').innerHTML = 
        `<strong>English:</strong><br>${englishText}<br><br><strong>हिंदी:</strong><br>${hindiTranslation}`;
    
    document.getElementById('translate-description').textContent = 'Translated!';
    setTimeout(() => {
        document.getElementById('translate-description').textContent = 'Translate to Hindi';
    }, 2000);
}

function handleArtisanRegistration(e) {
    e.preventDefault();
    
    // Simulate form submission
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    alert('Registration successful! Welcome to Artisan Connect. You will receive an email with next steps to set up your profile and start showcasing your crafts.');
    hideModal('registration-modal');
    e.target.reset();
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Utility function for debouncing search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling behavior for older browsers
function smoothScroll(element) {
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add some enhanced interactions
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(252, 252, 249, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--color-surface)';
        navbar.style.backdropFilter = 'none';
    }
});

// Add loading states for better UX
function showLoading(element) {
    if (element) {
        element.classList.add('loading');
    }
}

function hideLoading(element) {
    if (element) {
        element.classList.remove('loading');
    }
}

// Initialize tooltips for better accessibility
function initializeTooltips() {
    const elements = document.querySelectorAll('[data-tooltip]');
    elements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            // Tooltip implementation would go here
        });
    });
}

// Console welcome message
console.log('%cArtisan Connect Platform', 'color: #21808D; font-size: 24px; font-weight: bold;');
console.log('%cEmpowering India\'s Traditional Craftsmen through Technology', 'color: #626C71; font-size: 14px;');
console.log('🧵 Built with modern web technologies');
console.log('🤖 AI-powered storytelling and market expansion');
console.log('🌐 Multilingual support for global reach');