// ===== HARRISON SHOWCASE - MAIN JAVASCRIPT =====
// Consolidated JavaScript for all pages

// Common utility functions
const HarrisonShowcase = {
    // Theme management
    initTheme: function() {
        // Check for saved theme preference or default to 'dark'
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Update toggle button text
        this.updateThemeToggleText(savedTheme);
        
        // Add event listener for theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', this.toggleTheme.bind(this));
        }
    },
    
    toggleTheme: function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        this.updateThemeToggleText(newTheme);
    },
    
    updateThemeToggleText: function(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            if (theme === 'dark') {
                themeToggle.innerHTML = '<span class="icon">🌙</span> Dark Mode';
            } else {
                themeToggle.innerHTML = '<span class="icon">☀️</span> Light Mode';
            }
        }
    },

    // Initialize loader removal
    initLoader: function() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.querySelector('.loader');
                if (loader) {
                    loader.style.display = 'none';
                }
            }, 1000);
        });
    },

    // Initialize cursor glow effect
    initCursorGlow: function() {
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
    },

    // Initialize 3D tilt effects for cards
    init3DTilt: function() {
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
    },

    // Initialize smooth page transitions
    initPageTransitions: function() {
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
    },

    // Initialize parallax scrolling for orbs
    initParallaxScrolling: function() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const orbs = document.querySelectorAll('.orb');
            
            orbs.forEach((orb, index) => {
                const speed = 0.5 + (index * 0.2);
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    },

    // Initialize scroll animations with intersection observer
    initScrollAnimations: function() {
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);
        
        // Animate project cards and other elements
        const animatedElements = document.querySelectorAll('.project-card, .showcase-item, .tech-detail-card, .ps-card');
        animatedElements.forEach(element => {
            element.style.animationPlayState = 'paused';
            observer.observe(element);
        });
    },

    // Initialize profile-specific animations
    initProfileAnimations: function() {
        // Animate skill tags and contact links on hover
        document.querySelectorAll('.skill-tag, .contact-link').forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    },

    // Animate counting stats
    animateValue: function(element, start, end, duration) {
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
    },

    // Initialize stats counter animation
    initStatsCounter: function() {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const endValue = parseInt(element.getAttribute('data-count'));
                    if (endValue) {
                        HarrisonShowcase.animateValue(element, 0, endValue, 2000);
                        statsObserver.unobserve(element);
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('[data-count]').forEach(stat => {
            statsObserver.observe(stat);
        });
    },

    // Initialize play demo button
    initPlayDemo: function() {
        const playDemoBtn = document.querySelector('.play-demo-btn');
        if (playDemoBtn) {
            playDemoBtn.addEventListener('click', () => {
                alert('WebGL demo would load here!');
            });
        }
    },

    // Initialize all common functionality
    initCommon: function() {
        this.initTheme();
        this.initLoader();
        this.initCursorGlow();
        this.init3DTilt();
        this.initPageTransitions();
        this.initParallaxScrolling();
        this.initScrollAnimations();
    },

    // Initialize page-specific functionality
    initPageSpecific: function() {
        const path = window.location.pathname;
        
        if (path.includes('profile.html')) {
            this.initProfileAnimations();
        }
        
        if (path.includes('flappyfootball.html')) {
            this.initStatsCounter();
            this.initPlayDemo();
        }
        
        if (path.includes('picturelocationapp.html') || 
            path.includes('3dcharacteranimation.html') || 
            path.includes('gamedevelopmentinunity.html') ||
            path.includes('wineabout.html')) {
            this.initStatsCounter();
        }
    }
};

// Initialize page functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Run common initialization
    HarrisonShowcase.initCommon();
    
    // Run page-specific initialization  
    HarrisonShowcase.initPageSpecific();
});

// Legacy compatibility - keep old functions for any external dependencies
function initPage() {
    HarrisonShowcase.initCommon();
}

function initFlappyFootballPage() {
    HarrisonShowcase.initStatsCounter();
    HarrisonShowcase.initPlayDemo();
}