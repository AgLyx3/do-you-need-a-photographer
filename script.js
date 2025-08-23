// Gallery Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Add fade-in animation for gallery items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all gallery items
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Add CSS animation for fadeIn
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Optional: Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a subtle entrance animation for the profile section
    const profileSection = document.querySelector('.profile-section');
    if (profileSection) {
        profileSection.style.opacity = '0';
        profileSection.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            profileSection.style.transition = 'opacity 1s ease, transform 1s ease';
            profileSection.style.opacity = '1';
            profileSection.style.transform = 'translateY(0)';
        }, 200);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Main tab switching
    const mainTabButtons = document.querySelectorAll('.main-tab-button');
    const mainTabContents = document.querySelectorAll('.tab-content');

    mainTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all main buttons
            mainTabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked main button
            button.classList.add('active');

            // Hide all main tab contents
            mainTabContents.forEach(content => content.classList.add('hidden'));
            // Show selected main tab content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');
        });
    });

    // Sub tab switching (for photography section)
    const subTabButtons = document.querySelectorAll('.sub-tab-button');
    const subTabContents = document.querySelectorAll('.sub-tab-content');

    subTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all sub buttons
            subTabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked sub button
            button.classList.add('active');

            // Hide all sub tab contents
            subTabContents.forEach(content => content.classList.add('hidden'));
            // Show selected sub tab content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.remove('hidden');
        });
    });
});