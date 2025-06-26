// 3DMOTOCRAFT - Sereno System Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // CTA button smooth scroll
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // YouTube video lazy loading
    const youtubeIframe = document.querySelector('.youtube-embed iframe');
    if (youtubeIframe) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Enable iframe interaction when in view
                    youtubeIframe.style.pointerEvents = 'auto';
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(youtubeIframe);
    }
    
    // Smooth animations for cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    serviceCards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
    
    // EmailJS Configuration
    const EMAIL_CONFIG = {
        publicKey: '4wzDtq7AZn8ndGCr6',
        serviceId: 'service_zpqzyws',
        templateId: 'template_0d2udd9',
        autoReplyTemplateId: 'template_cv79t3n'
    };
    
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAIL_CONFIG.publicKey);
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 送信中...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(contactForm);
            const now = new Date();
            const templateParams = {
                from_name: formData.get('name'),
                from_email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                to_email: 'sk.shingo.10@gmail.com',
                sent_at: now.toLocaleString('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZone: 'Asia/Tokyo'
                })
            };
            
            // Send email via EmailJS
            if (typeof emailjs !== 'undefined') {
                // Send main email to company
                Promise.all([
                    emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.templateId, templateParams),
                    // Send auto-reply to customer
                    emailjs.send(EMAIL_CONFIG.serviceId, EMAIL_CONFIG.autoReplyTemplateId, {
                        from_name: templateParams.from_name,
                        from_email: templateParams.from_email,
                        subject: templateParams.subject,
                        message: templateParams.message,
                        sent_at: templateParams.sent_at,
                        to_email: templateParams.from_email // Send auto-reply to customer's email
                    })
                ])
                .then(function(responses) {
                    console.log('Emails sent successfully:', responses);
                    showMessage('お問い合わせを送信いたしました。自動返信メールもお送りしています。ありがとうございます。', 'success');
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.error('Email send failed:', error);
                    showMessage('送信に失敗しました。お手数ですが、直接メールでお問い合わせください。', 'error');
                })
                .finally(function() {
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
            } else {
                showMessage('メール機能が利用できません。直接メールでお問い合わせください。', 'error');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    // Show form message
    function showMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
    
    // Console branding
    console.log('%c3DMOTOCRAFT - Sereno System', 'color: #8FBC8F; font-size: 16px; font-weight: bold;');
    console.log('%c🚀 Website powered by modern web technologies', 'color: #666; font-size: 12px;');
});