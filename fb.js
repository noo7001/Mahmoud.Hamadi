// Restaurant social media links
const restaurantLinks = {
    afrah: {
        instagram: 'https://www.instagram.com/totangoafrah/',
        facebook: 'https://www.facebook.com/totangoafrah'
    },
    chakif: {
        instagram: 'https://www.instagram.com/totangochakif/',
        facebook: 'https://www.facebook.com/ToTangoch'
    },
    pastry: {
        instagram: 'https://www.instagram.com/totango_pastry/',
        facebook: 'https://www.facebook.com/ToTangoch'
    }
};

// Set up links when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Totango Afrah
    document.getElementById('afrah-instagram').href = restaurantLinks.afrah.instagram;
    document.getElementById('afrah-facebook').href = restaurantLinks.afrah.facebook;
    
    // Totango Chakif
    document.getElementById('chakif-instagram').href = restaurantLinks.chakif.instagram;
    document.getElementById('chakif-facebook').href = restaurantLinks.chakif.facebook;
    
    // Totango Pastry
    document.getElementById('pastry-instagram').href = restaurantLinks.pastry.instagram;
    document.getElementById('pastry-facebook').href = restaurantLinks.pastry.facebook;

    // Add entrance animations
    const cards = document.querySelectorAll('.restaurant-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100 + 200);
    });
});

// Function to update links (can be called later when actual URLs are provided)
function updateRestaurantLinks(restaurant, instagram, facebook) {
    if (restaurantLinks[restaurant]) {
        if (instagram) {
            restaurantLinks[restaurant].instagram = instagram;
            document.getElementById(restaurant + '-instagram').href = instagram;
        }
        if (facebook) {
            restaurantLinks[restaurant].facebook = facebook;
            document.getElementById(restaurant + '-facebook').href = facebook;
        }
    }
}

