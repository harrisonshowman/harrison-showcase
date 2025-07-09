document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetUrl = link.getAttribute('href');
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 300);
    })
})

/* Flappy Football Game */
// Remove loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 1000);
});

// Cursor glow
const cursor = document.querySelector('.cursor-glow');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    
    cursorX += distX * 0.1;
    cursorY += distY * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// 3D tilt for cards
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Smooth transitions
document.querySelectorAll('a[href^="/harrison-showcase/"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        
        document.body.style.opacity = '0';
        document.body.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

// Parallax scrolling
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animate stats counting
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Stats counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const endValue = parseInt(element.getAttribute('data-count'));
            if (endValue) {
                animateValue(element, 0, endValue, 2000);
                statsObserver.unobserve(element);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(stat => {
    statsObserver.observe(stat);
});

// Play demo button
const playDemoBtn = document.querySelector('.play-demo-btn');
if (playDemoBtn) {
    playDemoBtn.addEventListener('click', () => {
        alert('WebGL demo would load here!');
    });
}