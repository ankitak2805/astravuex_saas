// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Pricing Toggle (Monthly/Yearly)
    const pricingToggle = document.getElementById('pricingToggle');
    
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            const monthlyPrices = document.querySelectorAll('.monthly-price');
            const yearlyPrices = document.querySelectorAll('.yearly-price');
            
            if (this.checked) {
                // Show yearly prices
                monthlyPrices.forEach(price => price.style.display = 'none');
                yearlyPrices.forEach(price => price.style.display = 'inline');
            } else {
                // Show monthly prices
                monthlyPrices.forEach(price => price.style.display = 'inline');
                yearlyPrices.forEach(price => price.style.display = 'none');
            }
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[name="email"]');
            const submitButton = this.querySelector('button[type="submit"]');
            const messageElement = this.parentElement.querySelector('.newsletter-message');
            
            const email = emailInput.value;
            const csrfToken = this.querySelector('input[name="csrfmiddlewaretoken"]').value;
            
            // Disable submit button
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';
            
            try {
                const response = await fetch('/newsletter/subscribe/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken
                    },
                    body: JSON.stringify({ email: email })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    messageElement.textContent = data.message;
                    messageElement.style.color = 'var(--success-color)';
                    emailInput.value = '';
                } else {
                    messageElement.textContent = 'Subscription failed. Please try again.';
                    messageElement.style.color = 'var(--error-color)';
                }
            } catch (error) {
                messageElement.textContent = 'An error occurred. Please try again.';
                messageElement.style.color = 'var(--error-color)';
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = 'Subscribe';
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    messageElement.textContent = '';
                }, 5000);
            }
        });
    }

    // Close Alert Messages
    const closeAlertButtons = document.querySelectorAll('.close-alert');
    
    closeAlertButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

    // Auto-hide alert messages after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => alert.remove(), 300);
        }, 5000);
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Form Validation Enhancement
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateInput(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateInput(this);
                }
            });
        });
    });

    function validateInput(input) {
        const errorElement = input.parentElement.querySelector('.error');
        
        if (!input.value.trim()) {
            input.classList.add('error');
            if (!errorElement) {
                const error = document.createElement('span');
                error.className = 'error';
                error.textContent = 'This field is required';
                input.parentElement.appendChild(error);
            }
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            input.classList.add('error');
            if (!errorElement) {
                const error = document.createElement('span');
                error.className = 'error';
                error.textContent = 'Please enter a valid email';
                input.parentElement.appendChild(error);
            }
        } else {
            input.classList.remove('error');
            if (errorElement) {
                errorElement.remove();
            }
        }
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Animate elements on scroll
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

    // Observe elements with animation class
    const animatedElements = document.querySelectorAll('.stat-card, .feature-card-large, .benefit-card, .pricing-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add slideOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
