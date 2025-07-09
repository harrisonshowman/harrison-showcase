document.addEventListener('DOMContentLoaded', () => {
    // Example: Show a greeting modal on page load
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';

    const box = document.createElement('div');
    box.style.background = '#fff';
    box.style.padding = '30px 40px';
    box.style.borderRadius = '8px';
    box.style.boxShadow = '0 2px 16px rgba(0,0,0,0.2)';
    box.innerHTML = `
        <h2>Welcome!</h2>
        <p>Thanks for visiting my website.</p>
        <button id="closeModalBtn">Close</button>
    `;

    modal.appendChild(box);
    document.body.appendChild(modal);

    document.getElementById('closeModalBtn').addEventListener('click', () => {
        modal.remove();
    });
});

// Initialize page functionality
function initPage() {
    // Remove loader
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 1000);
    });

    // Cursor glow
    const cursor = document.querySelector('.cursor-glow');
    if (cursor) {
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
    }

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
}

// Flappy Football page specific functionality
function initFlappyFootballPage() {
    // Stats counter animation
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
}

// Initialize pages based on current URL
document.addEventListener('DOMContentLoaded', () => {
    // Run common initialization
    initPage();

    // Run page-specific initialization
    const path = window.location.pathname;
    if (path.includes('flappyfootball.html')) {
        initFlappyFootballPage();
    }
});