document.addEventListener('DOMContentLoaded', () => {
    // Live Timezone Display
    function updateTimezone() {
        const timezoneElement = document.getElementById('timezone');
        if (!timezoneElement) return;
        
        const now = new Date();
        const istTime = new Intl.DateTimeFormat('en-IN', {
            timeZone: 'Asia/Kolkata',
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        }).format(now);
        
        timezoneElement.textContent = `IST ${istTime}`;
    }
    
    // Update timezone every minute
    updateTimezone();
    setInterval(updateTimezone, 60000);

    // Rain Animation
    function createRain() {
        const rainContainer = document.getElementById('rainContainer');
        if (!rainContainer) return;
        
        function createRainDrop() {
            const drop = document.createElement('div');
            drop.className = 'rain-drop';
            
            // Random horizontal position
            const leftPosition = Math.random() * 100;
            drop.style.left = leftPosition + '%';
            
            // Random animation duration (2-4 seconds)
            const duration = Math.random() * 2 + 2;
            drop.style.animationDuration = duration + 's';
            
            // Random delay
            const delay = Math.random() * 2;
            drop.style.animationDelay = delay + 's';
            
            // Random size variation
            const height = Math.random() * 10 + 10;
            drop.style.height = height + 'px';
            
            rainContainer.appendChild(drop);
            
            // Remove drop after animation
            setTimeout(() => {
                if (rainContainer.contains(drop)) {
                    rainContainer.removeChild(drop);
                }
            }, (duration + delay) * 1000);
        }
        
        // Create initial rain drops
        for (let i = 0; i < 50; i++) {
            setTimeout(createRainDrop, Math.random() * 2000);
        }
        
        // Continuously create new drops
        setInterval(createRainDrop, 100);
    }
    
    // Start rain animation
    createRain();

    // Animated Stats Counter
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statElement = entry.target;
                    const target = parseFloat(statElement.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 60; // 60 frames for smooth animation
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            // Handle decimal places for uptime percentage
                            if (target % 1 !== 0) {
                                statElement.textContent = current.toFixed(2);
                            } else {
                                statElement.textContent = Math.floor(current);
                            }
                            requestAnimationFrame(updateCounter);
                        } else {
                            // Final value with proper formatting
                            if (target % 1 !== 0) {
                                statElement.textContent = target.toFixed(2);
                            } else {
                                statElement.textContent = target;
                            }
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(statElement);
                }
            });
        }, {
            threshold: 0.5
        });
        
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }
    
    // Initialize stats animation
    animateStats();

    // Enhanced Typing Animation with Professional Roles
    const typedTextElement = document.getElementById('typed-text');
    const professionalRoles = [
        'DevOps Engineer',
        'Cloud Architecture Specialist', 
        'Infrastructure as Code Expert',
        'Kubernetes Orchestrator',
        'CI/CD Pipeline Designer',
        'System Automation Engineer'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;
    
    function typeRole() {
        if (!typedTextElement) return;
        
        const currentRole = professionalRoles[roleIndex];
        
        if (isWaiting) {
            setTimeout(() => {
                isWaiting = false;
                isDeleting = true;
                typeRole();
            }, 2000); // Wait 2 seconds before deleting
            return;
        }
        
        if (isDeleting) {
            // Deleting characters
            typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % professionalRoles.length;
            }
            
            setTimeout(typeRole, 50); // Faster deletion
        } else {
            // Typing characters
            typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentRole.length) {
                isWaiting = true;
            }
            
            setTimeout(typeRole, 100); // Slower typing for readability
        }
    }
    
    // Start professional role typing animation after a delay
    setTimeout(() => {
        typeRole();
    }, 1500);

    // DevOps-themed Social Links Animation (Simplified)
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Simple scale animation for all links
            this.style.transform = 'scale(0.9)';
            this.style.transition = 'transform 0.1s ease';
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = '';
            }, 150);
        });
        
        // DevOps-themed hover effects
        link.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 10px rgba(13, 185, 242, 0.5))';
            
            // Remove terminal cursor effect for social links to prevent underline appearance
            // Terminal cursor was causing visual underline effect
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.filter = '';
            // No terminal cursor to remove anymore
        });
    });

    // Add DevOps-themed CSS animations
    const devOpsStyle = document.createElement('style');
    devOpsStyle.textContent = `
        @keyframes terminalGlow {
            0%, 100% { 
                text-shadow: 0 0 5px rgba(13, 185, 242, 0.5);
            }
            50% { 
                text-shadow: 0 0 15px rgba(13, 185, 242, 0.8), 0 0 25px rgba(13, 185, 242, 0.4);
            }
        }
        
        @keyframes deploymentPulse {
            0% { 
                box-shadow: 0 0 0 0 rgba(13, 185, 242, 0.7);
                transform: scale(1);
            }
            70% { 
                box-shadow: 0 0 0 10px rgba(13, 185, 242, 0);
                transform: scale(1.02);
            }
            100% { 
                box-shadow: 0 0 0 0 rgba(13, 185, 242, 0);
                transform: scale(1);
            }
        }
        
        @keyframes pipelineFlow {
            0% { 
                background-position: 0% 50%;
            }
            100% { 
                background-position: 100% 50%;
            }
        }
        
        .typing-container:hover {
            animation: terminalGlow 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(devOpsStyle);

    // Cursor follower
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-follower');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    const speed = 0.1;
    let lastHovered = null;

    // Navigation and scroll handling
    const navbar = document.querySelector('.navbar');
    const scrollProgress = document.querySelector('.scroll-progress');
    const backToTop = document.querySelector('.back-to-top');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Show navbar on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        // Update scroll progress
        scrollProgress.style.width = scrollPercent + '%';
        
        // Show/hide navbar
        if (scrollTop > 100) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
        
        // Show/hide back to top button
        if (scrollTop > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        // Update active nav link
        const sections = document.querySelectorAll('section, .hero-section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
        
        lastScrollTop = scrollTop;
    });

    // Back to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-fill, .skill-fill-modern, .skill-fill-compact');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillFill = entry.target;
                const width = skillFill.getAttribute('data-width');
                skillFill.style.width = width + '%';
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Portfolio Build Pipeline Visualization
    function createPipelineVisualization() {
        const pipeline = document.createElement('div');
        pipeline.id = 'devops-pipeline';
        pipeline.style.position = 'fixed';
        pipeline.style.top = '20px';
        pipeline.style.right = '20px';
        pipeline.style.width = '220px';
        pipeline.style.background = 'rgba(17, 33, 40, 0.95)';
        pipeline.style.border = '1px solid var(--primary-color)';
        pipeline.style.borderRadius = '8px';
        pipeline.style.padding = '15px';
        pipeline.style.fontFamily = 'monospace';
        pipeline.style.fontSize = '12px';
        pipeline.style.color = 'var(--text-primary)';
        pipeline.style.zIndex = '1000';
        pipeline.style.opacity = '0';
        pipeline.style.transform = 'translateX(100%)';
        pipeline.style.transition = 'all 0.3s ease';
        
        const portfolioStages = [
            { name: 'Page Load', status: 'success', icon: '✓' },
            { name: 'Assets Loaded', status: 'success', icon: '✓' },
            { name: 'Animations Ready', status: 'success', icon: '✓' },
            { name: 'Portfolio Live', status: 'success', icon: '🚀' }
        ];
        
        let content = '<div style="color: var(--primary-color); margin-bottom: 10px;">� Portfolio Status</div>';
        portfolioStages.forEach(stage => {
            const color = stage.status === 'success' ? '#22c55e' : 
                         stage.status === 'running' ? 'var(--primary-color)' : 
                         '#6b7280';
            content += `<div style="margin: 5px 0; color: ${color};">
                ${stage.icon} ${stage.name}
            </div>`;
        });
        
        // Add real-time stats
        content += '<div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(13, 185, 242, 0.3);">';
        content += '<div style="color: var(--text-secondary); font-size: 10px;">Performance:</div>';
        content += '<div style="color: #22c55e; font-size: 11px;">⚡ Fast Loading</div>';
        content += '<div style="color: #22c55e; font-size: 11px;">📱 Responsive</div>';
        content += '<div style="color: #22c55e; font-size: 11px;">🎨 Animated</div>';
        content += '</div>';
        
        pipeline.innerHTML = content;
        document.body.appendChild(pipeline);
        
        // Show pipeline on scroll and update based on page interaction
        let pipelineShown = false;
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
            if (scrollPercent > 10 && !pipelineShown) {
                pipeline.style.opacity = '1';
                pipeline.style.transform = 'translateX(0)';
                pipelineShown = true;
                
                // Animate pipeline stages
                setTimeout(() => animatePipelineStages(pipeline), 500);
                
                // Update status based on scroll progress
                updatePipelineStatus(pipeline, scrollPercent);
            } else if (scrollPercent <= 10 && pipelineShown) {
                pipeline.style.opacity = '0';
                pipeline.style.transform = 'translateX(100%)';
                pipelineShown = false;
            }
            
            if (pipelineShown) {
                updatePipelineStatus(pipeline, scrollPercent);
            }
        });
    }
    
    function updatePipelineStatus(pipeline, scrollPercent) {
        // Update stats based on scroll progress
        const statusDiv = pipeline.querySelector('div:last-child');
        let statusContent = '<div style="color: var(--text-secondary); font-size: 10px;">Live Stats:</div>';
        statusContent += `<div style="color: var(--primary-color); font-size: 11px;">📈 Scroll: ${Math.round(scrollPercent)}%</div>`;
        statusContent += '<div style="color: #22c55e; font-size: 11px;">👤 Visitor Active</div>';
        statusContent += '<div style="color: #22c55e; font-size: 11px;">⭐ Skills Loaded</div>';
        
        const lastDiv = pipeline.querySelector('div:last-child');
        if (lastDiv) {
            lastDiv.innerHTML = statusContent;
        }
    }
    
    function animatePipelineStages(pipeline) {
        const stages = pipeline.querySelectorAll('div:not(:first-child)');
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.style.animation = 'deploymentPulse 0.5s ease';
            }, index * 200);
        });
    }
    
    // Initialize pipeline
    createPipelineVisualization();

    // Mouse move handling for cursor and mask effects
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Update CSS custom properties for mask effect
        const heroSection = document.querySelector('.hero-section .content-wrapper');
        const aboutLeftSection = document.querySelector('.about-left-mask');
        
        if (heroSection) {
            const heroRect = heroSection.getBoundingClientRect();
            const heroMouseX = ((e.clientX - heroRect.left) / heroRect.width) * 100;
            const heroMouseY = ((e.clientY - heroRect.top) / heroRect.height) * 100;
            heroSection.style.setProperty('--mouse-x', heroMouseX + '%');
            heroSection.style.setProperty('--mouse-y', heroMouseY + '%');
        }
        
        if (aboutLeftSection) {
            const aboutRect = aboutLeftSection.getBoundingClientRect();
            const aboutMouseX = ((e.clientX - aboutRect.left) / aboutRect.width) * 100;
            const aboutMouseY = ((e.clientY - aboutRect.top) / aboutRect.height) * 100;
            aboutLeftSection.style.setProperty('--mouse-x', aboutMouseX + '%');
            aboutLeftSection.style.setProperty('--mouse-y', aboutMouseY + '%');
        }

        const element = document.elementFromPoint(e.clientX, e.clientY);
        const isTextElement = element && (element.matches('p, h1, h2, h3, h4, span, strong, li'));

        if (isTextElement) {
            cursor.classList.add('on-text');
            if(element !== lastHovered) {
                if(lastHovered) {
                    lastHovered.classList.remove('text-shadow-hover');
                }
                element.classList.add('text-shadow-hover');
                lastHovered = element;
            }
        } else {
            cursor.classList.remove('on-text');
            if(lastHovered) {
                lastHovered.classList.remove('text-shadow-hover');
                lastHovered = null;
            }
        }
    });

    function animate() {
        const dx = mouseX - followerX;
        const dy = mouseY - followerY;

        followerX += dx * speed;
        followerY += dy * speed;

        cursor.style.left = `${followerX}px`;
        cursor.style.top = `${followerY}px`;

        requestAnimationFrame(animate);
    }

    animate();

    // ===== BLOG FILTER FUNCTIONALITY =====
    function initBlogFilters() {
        const filterTabs = document.querySelectorAll('.filter-tab');
        const blogCards = document.querySelectorAll('.blog-card.modern');
        
        if (!filterTabs.length || !blogCards.length) return;
        
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const filter = tab.dataset.filter;
                
                // Update active tab
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Filter cards with animation
                blogCards.forEach((card, index) => {
                    const categories = card.dataset.category;
                    const shouldShow = filter === 'all' || categories.includes(filter);
                    
                    if (shouldShow) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
        
        // Initialize card animations
        blogCards.forEach(card => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
    }

    // ===== BLOG CARD HOVER EFFECTS =====
    function initBlogCardEffects() {
        const blogCards = document.querySelectorAll('.blog-card.modern');
        
        blogCards.forEach(card => {
            const readMore = card.querySelector('.read-more');
            
            card.addEventListener('mouseenter', () => {
                if (readMore) {
                    readMore.style.transform = 'translateX(4px)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                if (readMore) {
                    readMore.style.transform = 'translateX(0)';
                }
            });
            
            // Add click handler for the entire card
            card.addEventListener('click', (e) => {
                if (e.target.tagName !== 'A') {
                    const link = card.querySelector('h3 a');
                    if (link) {
                        window.open(link.href, '_blank');
                    }
                }
            });
        });
    }

    // ===== FEATURED ARTICLE EFFECTS =====
    function initFeaturedArticleEffects() {
        const featuredCard = document.querySelector('.featured-article-card');
        const featuredIcon = document.querySelector('.featured-icon');
        
        if (!featuredCard || !featuredIcon) return;
        
        featuredCard.addEventListener('mouseenter', () => {
            featuredIcon.style.animationPlayState = 'paused';
            featuredIcon.style.transform = 'scale(1.1) translateY(-5px)';
        });
        
        featuredCard.addEventListener('mouseleave', () => {
            featuredIcon.style.animationPlayState = 'running';
            featuredIcon.style.transform = '';
        });
    }

    // ===== BLOG SECTION SCROLL ANIMATIONS =====
    function initBlogScrollAnimations() {
        const blogSection = document.getElementById('writing');
        if (!blogSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animatedElements = entry.target.querySelectorAll('.blog-card.modern, .featured-article-card, .filter-tab, .blog-cta');
                    
                    animatedElements.forEach((element, index) => {
                        setTimeout(() => {
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(blogSection);
        
        // Initialize elements
        const animatedElements = blogSection.querySelectorAll('.blog-card.modern, .featured-article-card, .filter-tab, .blog-cta');
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    }

    // ===== INITIALIZE ALL BLOG FEATURES =====
    function initBlogSection() {
        initBlogFilters();
        initBlogCardEffects();
        initFeaturedArticleEffects();
        initBlogScrollAnimations();
    }

    // Add to the main initialization
    initBlogSection();
});
