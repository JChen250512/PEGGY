let cart = [];
let cartCount = 0;

const products = {
    fashion: [
        { id: 1, name: "Oversized Knit Sweater", price: "$45", emoji: "🧥" },
        { id: 2, name: "High-waist Denim Jeans", price: "$38", emoji: "👖" },
        { id: 3, name: "Cropped Lace Top", price: "$28", emoji: "👚" },
        { id: 4, name: "Pleated Mini Skirt", price: "$32", emoji: "👗" },
        { id: 5, name: "Oversized Blazer", price: "$55", emoji: "🧥" },
        { id: 6, name: "Ribbed Tank Top", price: "$22", emoji: "👕" }
    ],
    cosmetics: [
        { id: 7, name: "Glass Skin Serum", price: "$35", emoji: "🧴" },
        { id: 8, name: "Cushion Foundation", price: "$28", emoji: "💄" },
        { id: 9, name: "Lip Tint Set", price: "$25", emoji: "💋" },
        { id: 10, name: "Sheet Mask Pack", price: "$18", emoji: "🧖‍♀️" },
        { id: 11, name: "BB Cream", price: "$24", emoji: "🧴" },
        { id: 12, name: "Eyeshadow Palette", price: "$32", emoji: "🎨" }
    ],
    accessories: [
        { id: 13, name: "Heart-shaped Sunglasses", price: "$25", emoji: "🕶️" },
        { id: 14, name: "Mini Crossbody Bag", price: "$42", emoji: "👜" },
        { id: 15, name: "Pearl Hair Clips", price: "$15", emoji: "📎" },
        { id: 16, name: "Chunky Gold Necklace", price: "$35", emoji: "📿" },
        { id: 17, name: "Bucket Hat", price: "$28", emoji: "🧢" },
        { id: 18, name: "Platform Sneakers", price: "$65", emoji: "👟" }
    ]
};

function showProducts(category) {
    const productGrid = document.getElementById('productGrid');
    const categoryProducts = products[category] || [];
    
    productGrid.innerHTML = '';
    
    categoryProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.innerHTML = `
            <div class="product-image">
                ${product.emoji}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', '${product.price}')">
                    Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
    
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function addToCart(id, name, price) {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    
    // Add some visual feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added! ✓';
    button.style.background = 'linear-gradient(45deg, #4caf50, #45a049)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
    }, 1000);
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Initialize with fashion products
window.addEventListener('load', () => {
    showProducts('fashion');
});

// Add scroll animation
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
});
