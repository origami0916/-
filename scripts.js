// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // If the clicked item wasn't active, make it active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// スクロールアニメーション
function checkInView() {
    const windowHeight = window.innerHeight;
    const windowTop = window.scrollY;
    const windowBottom = windowTop + windowHeight;
    
    // Problem Cards Animation
    document.querySelectorAll('.problem-card').forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top + windowTop;
        if (elementTop < windowBottom - 100) {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 150);
        }
    });
    
    // Future Cards Animation
    document.querySelectorAll('.future-card').forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top + windowTop;
        if (elementTop < windowBottom - 100) {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 150);
        }
    });
    
    // Bonus Cards Animation
    document.querySelectorAll('.bonus-card').forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top + windowTop;
        if (elementTop < windowBottom - 100) {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 100);
        }
    });
    
    // FAQ Items Animation
    document.querySelectorAll('.faq-item').forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top + windowTop;
        if (elementTop < windowBottom - 100) {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 100);
        }
    });
    
    // Solution Items Animation
    document.querySelectorAll('.solution-item').forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top + windowTop;
        if (elementTop < windowBottom - 100) {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 200);
        }
    });
    
    // Recommendation Columns Animation
    document.querySelectorAll('.recommendation-column').forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top + windowTop;
        if (elementTop < windowBottom - 100) {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 200);
        }
    });
    
    // Generic Animation for any element with .animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        const elementTop = element.getBoundingClientRect().top + windowTop;
        if (elementTop < windowBottom - 100) {
            element.classList.add('animated');
        }
    });
}

// 初回実行
document.addEventListener('DOMContentLoaded', checkInView);
// スクロール時に実行
window.addEventListener('scroll', checkInView);
