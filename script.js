// ===================================
// M Website Creation - JavaScript
// ===================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// CTA Button - Scroll to contact section
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form validation before submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});

// Log website status
console.log('✅ M Website Creation loaded successfully!');
console.log('📧 To enable contact form: Visit https://formspree.io and update YOUR_FORM_ID');
