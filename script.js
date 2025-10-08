// Contact links
const links = {
    wechat: 'https://u.wechat.com/kGIBJQ7ZOnflJdLzbC-gqqA?s=2',
    whatsapp: 'https://wa.me/306949470445',
    email: 'mailto:iam.hamade@gmail.com',
    instagram: 'https://www.instagram.com/h.amad.e/',
    facebook: 'https://www.facebook.com/mahmoud.hamade.965',
    telegram: 'https://t.me/iamhamade',
    fb: 'fb.html',  // F&B restaurants page
    hamade: 'hamade-group.html'  // Hamade Group projects page
};

// Set up event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // WeChat QR Code Modal
    const wechatBtn = document.getElementById('wechat-btn');
    const wechatModal = document.getElementById('wechat-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    wechatBtn.onclick = function() {
        wechatModal.style.display = 'flex';
    };
    
    closeBtn.onclick = function() {
        wechatModal.style.display = 'none';
    };
    
    window.onclick = function(event) {
        if (event.target === wechatModal) {
            wechatModal.style.display = 'none';
        }
    };
    
    // Contact buttons
    document.getElementById('whatsapp-link').href = links.whatsapp;
    
    // Social media links
    document.getElementById('email-link').href = links.email;
    document.getElementById('instagram-link').href = links.instagram;
    document.getElementById('facebook-link').href = links.facebook;
    document.getElementById('telegram-link').href = links.telegram;
    
    // Feature buttons (F&B and Hamade Group)
    document.getElementById('fb-link').onclick = function() {
        window.location.href = 'fb.html';
    };
    
    document.getElementById('hamade-link').onclick = function() {
        window.location.href = 'hamade-group.html';
    };

    // Add smooth animations on scroll (if needed)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all buttons for animation
    document.querySelectorAll('.contact-btn, .feature-btn, .hamade-group-btn').forEach(btn => {
        observer.observe(btn);
    });
});

// Function to update links (can be called later when user provides actual links)
function updateLinks(newLinks) {
    Object.assign(links, newLinks);
    
    // Update href attributes
    if (newLinks.whatsapp) document.getElementById('whatsapp-link').href = newLinks.whatsapp;
    if (newLinks.email) document.getElementById('email-link').href = newLinks.email;
    if (newLinks.instagram) document.getElementById('instagram-link').href = newLinks.instagram;
    if (newLinks.facebook) document.getElementById('facebook-link').href = newLinks.facebook;
    if (newLinks.telegram) document.getElementById('telegram-link').href = newLinks.telegram;
}

