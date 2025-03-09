{\rtf1\ansi\ansicpg932\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // FAQ accordion functionality\
document.querySelectorAll('.faq-question').forEach(question => \{\
    question.addEventListener('click', () => \{\
        const item = question.parentNode;\
        const isActive = item.classList.contains('active');\
        \
        // Close all FAQ items\
        document.querySelectorAll('.faq-item').forEach(faqItem => \{\
            faqItem.classList.remove('active');\
        \});\
        \
        // If the clicked item wasn't active, make it active\
        if (!isActive) \{\
            item.classList.add('active');\
        \}\
    \});\
\});\
\
// Smooth scrolling for anchor links\
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
    anchor.addEventListener('click', function(e) \{\
        e.preventDefault();\
        \
        const targetId = this.getAttribute('href');\
        if (targetId === '#') return;\
        \
        const targetElement = document.querySelector(targetId);\
        if (targetElement) \{\
            window.scrollTo(\{\
                top: targetElement.offsetTop - 80,\
                behavior: 'smooth'\
            \});\
        \}\
    \});\
\});\
\
// \uc0\u12473 \u12463 \u12525 \u12540 \u12523 \u12450 \u12491 \u12513 \u12540 \u12471 \u12519 \u12531 \
function checkInView() \{\
    const windowHeight = window.innerHeight;\
    const windowTop = window.scrollY;\
    const windowBottom = windowTop + windowHeight;\
    \
    // Problem Cards Animation\
    document.querySelectorAll('.problem-card').forEach((element, index) => \{\
        const elementTop = element.getBoundingClientRect().top + windowTop;\
        if (elementTop < windowBottom - 100) \{\
            setTimeout(() => \{\
                element.classList.add('animated');\
            \}, index * 150);\
        \}\
    \});\
    \
    // Future Cards Animation\
    document.querySelectorAll('.future-card').forEach((element, index) => \{\
        const elementTop = element.getBoundingClientRect().top + windowTop;\
        if (elementTop < windowBottom - 100) \{\
            setTimeout(() => \{\
                element.classList.add('animated');\
            \}, index * 150);\
        \}\
    \});\
    \
    // Bonus Cards Animation\
    document.querySelectorAll('.bonus-card').forEach((element, index) => \{\
        const elementTop = element.getBoundingClientRect().top + windowTop;\
        if (elementTop < windowBottom - 100) \{\
            setTimeout(() => \{\
                element.classList.add('animated');\
            \}, index * 100);\
        \}\
    \});\
    \
    // FAQ Items Animation\
    document.querySelectorAll('.faq-item').forEach((element, index) => \{\
        const elementTop = element.getBoundingClientRect().top + windowTop;\
        if (elementTop < windowBottom - 100) \{\
            setTimeout(() => \{\
                element.classList.add('animated');\
            \}, index * 100);\
        \}\
    \});\
    \
    // Solution Items Animation\
    document.querySelectorAll('.solution-item').forEach((element, index) => \{\
        const elementTop = element.getBoundingClientRect().top + windowTop;\
        if (elementTop < windowBottom - 100) \{\
            setTimeout(() => \{\
                element.classList.add('animated');\
            \}, index * 200);\
        \}\
    \});\
    \
    // Recommendation Columns Animation\
    document.querySelectorAll('.recommendation-column').forEach((element, index) => \{\
        const elementTop = element.getBoundingClientRect().top + windowTop;\
        if (elementTop < windowBottom - 100) \{\
            setTimeout(() => \{\
                element.classList.add('animated');\
            \}, index * 200);\
        \}\
    \});\
    \
    // Generic Animation for any element with .animate-on-scroll\
    document.querySelectorAll('.animate-on-scroll').forEach(element => \{\
        const elementTop = element.getBoundingClientRect().top + windowTop;\
        if (elementTop < windowBottom - 100) \{\
            element.classList.add('animated');\
        \}\
    \});\
\}\
\
// \uc0\u21021 \u22238 \u23455 \u34892 \
document.addEventListener('DOMContentLoaded', checkInView);\
// \uc0\u12473 \u12463 \u12525 \u12540 \u12523 \u26178 \u12395 \u23455 \u34892 \
window.addEventListener('scroll', checkInView);}