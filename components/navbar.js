class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                }
                
                .navbar {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(229, 231, 235, 0.5);
                    transition: all 0.3s ease;
                }
                
                .navbar.scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }
                
                .nav-link {
                    position: relative;
                    color: #374151;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #7c3aed;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #7c3aed;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                }
                
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none;
                    }
                }
                
                @media (min-width: 769px) {
                    .mobile-menu-btn {
                        display: none;
                    }
                }
            </style>
            <nav class="navbar">
                <div style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; height: 70px;">
                        <!-- Logo -->
                        <a href="index.html" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none;">
                            <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #7c3aed, #4f46e5); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <i data-feather="video" style="color: white; width: 18px; height: 18px;"></i>
                            </div>
                            <span style="font-size: 1.25rem; font-weight: 700; color: #1f2937;">CreativeNexus</span>
                        </a>

                        <!-- Desktop Menu -->
                        <div class="desktop-menu" style="display: flex; gap: 2rem; align-items: center;">
                            <a href="index.html#about" class="nav-link">À propos</a>
                            <a href="portfolio.html" class="nav-link">Portfolio</a>
                            <a href="blog.html" class="nav-link">Blog</a>
                            <a href="index.html#contact" class="nav-link">Contact</a>
                            <a href="index.html#contact" style="background: #7c3aed; color: white; padding: 0.5rem 1.5rem; border-radius: 9999px; text-decoration: none; font-weight: 500; transition: all 0.3s ease;" 
                               onmouseover="this.style.backgroundColor='#6d28d9'; this.style.transform='scale(1.05)';" 
                               onmouseout="this.style.backgroundColor='#7c3aed'; this.style.transform='scale(1)';">
                                Travailler ensemble
                            </a>
                        </div>

                        <!-- Mobile Menu Button -->
                        <button class="mobile-menu-btn" style="background: none; border: none; cursor: pointer; padding: 0.5rem;" onclick="this.toggleMobileMenu()">
                                <i data-feather="menu" style="width: 24px; height: 24px; color: #374151;"></i>
                        </button>
                    </div>

                    <!-- Mobile Menu -->
                    <div id="mobile-menu" class="mobile-menu" style="position: absolute; top: 100%; left: 0; right: 0; display: none; flex-direction: column; gap: 1rem; padding: 1.5rem; border-top: 1px solid rgba(229, 231, 235, 0.5);">
                        <a href="index.html#about" class="nav-link" style="display: block; padding: 0.5rem 0;">À propos</a>
                        <a href="portfolio.html" class="nav-link" style="display: block; padding: 0.5rem 0;">Portfolio</a>
                        <a href="blog.html" class="nav-link" style="display: block; padding: 0.5rem 0;">Blog</a>
                        <a href="index.html#contact" class="nav-link" style="display: block; padding: 0.5rem 0;">Contact</a>
                        <a href="index.html#contact" style="background: #7c3aed; color: white; padding: 0.75rem 1.5rem; border-radius: 9999px; text-decoration: none; font-weight: 500; text-align: center;">Travailler ensemble</a>
                    </div>
                </div>
            </nav>
        `;
        
        // Add scroll behavior
        this.addScrollBehavior();
    }
    
    addScrollBehavior() {
        const navbar = this.shadowRoot.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    toggleMobileMenu() {
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);