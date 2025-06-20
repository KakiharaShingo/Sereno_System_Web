<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="3DMOTOCRAFT - Sereno System | 3Dプリンティング事業">
    <meta name="keywords" content="3Dプリンティング,プロトタイピング,カスタム製造,大阪,和泉市">
    <title>3DMOTOCRAFT - Sereno System</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation Header -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <h1>3DMOTOCRAFT</h1>
                <span class="nav-subtitle">Sereno System</span>
            </div>
            
            <!-- Language Switcher -->
            <div class="language-switcher">
                <div class="dropdown">
                    <button class="dropdown-btn">
                        <i class="fas fa-globe"></i>
                        {{ $availableLocales[$currentLocale] }}
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        @foreach($availableLocales as $locale => $name)
                            <a href="{{ route('language.switch', $locale) }}" class="{{ $locale === $currentLocale ? 'active' : '' }}">
                                {{ $name }}
                            </a>
                        @endforeach
                    </div>
                </div>
            </div>
            
            <!-- Hamburger Menu -->
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <!-- Navigation Menu -->
            <div class="nav-menu" id="nav-menu">
                <a href="#business" class="nav-link">{{ __('messages.nav_business') }}</a>
                <a href="#location" class="nav-link">{{ __('messages.nav_location') }}</a>
                <a href="#contact" class="nav-link">{{ __('messages.nav_contact') }}</a>
                <a href="#company" class="nav-link">{{ __('messages.nav_company') }}</a>
                <a href="#youtube" class="nav-link">{{ __('messages.nav_youtube') }}</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
            <h1 class="hero-title">{{ __('messages.hero_title') }}</h1>
            <p class="hero-subtitle">{{ __('messages.hero_subtitle') }}</p>
            <a href="#business" class="cta-button">{{ __('messages.hero_cta') }}</a>
        </div>
        <div class="hero-scroll-indicator">
            <i class="fas fa-chevron-down"></i>
        </div>
    </section>

    <!-- Business Section -->
    <section class="section" id="business">
        <div class="container">
            <h2 class="section-title">{{ __('messages.business_title') }}</h2>
            <p class="section-description">{{ __('messages.business_description') }}</p>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-cube"></i>
                    </div>
                    <h3>{{ __('messages.business_service1_title') }}</h3>
                    <p>{{ __('messages.business_service1_desc') }}</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3>{{ __('messages.business_service2_title') }}</h3>
                    <p>{{ __('messages.business_service2_desc') }}</p>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3>{{ __('messages.business_service3_title') }}</h3>
                    <p>{{ __('messages.business_service3_desc') }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- YouTube Section -->
    <section class="section section-dark" id="youtube">
        <div class="container">
            <h2 class="section-title">{{ __('messages.youtube_title') }}</h2>
            <p class="section-description">{{ __('messages.youtube_description') }}</p>
            
            <div class="youtube-container">
                <div class="youtube-embed">
                    <iframe 
                        src="https://www.youtube.com/embed?listType=playlist&list=UU{{ str_replace('https://www.youtube.com/@', '', $companyInfo['youtube_channel']) }}"
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="youtube-info">
                    <a href="{{ $companyInfo['youtube_channel'] }}" target="_blank" class="youtube-btn">
                        <i class="fab fa-youtube"></i>
                        {{ __('messages.youtube_visit') }}
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Location Section -->
    <section class="section" id="location">
        <div class="container">
            <h2 class="section-title">{{ __('messages.location_title') }}</h2>
            
            <div class="location-grid">
                <div class="location-info">
                    <div class="location-item">
                        <h3>{{ __('messages.location_address') }}</h3>
                        <p>{{ $companyInfo['address'] }}</p>
                    </div>
                    
                    <div class="location-item">
                        <h3>{{ __('messages.contact_phone') }}</h3>
                        <p><a href="tel:{{ $companyInfo['phone'] }}">{{ $companyInfo['phone'] }}</a></p>
                    </div>
                    
                    <div class="location-item">
                        <h3>{{ __('messages.contact_email') }}</h3>
                        <p><a href="mailto:{{ $companyInfo['email'] }}">{{ $companyInfo['email'] }}</a></p>
                    </div>
                </div>
                
                <div class="location-map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.123456789!2d135.123456789!3d34.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s大阪府和泉市下之宮町170-1!5e0!3m2!1sja!2sjp!4v1234567890"
                        width="100%" 
                        height="300" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="section section-green" id="contact">
        <div class="container">
            <h2 class="section-title">{{ __('messages.contact_title') }}</h2>
            <p class="section-description">{{ __('messages.contact_description') }}</p>
            
            <form class="contact-form" id="contact-form">
                @csrf
                <div class="form-grid">
                    <div class="form-group">
                        <label for="name">{{ __('messages.contact_name') }} *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">{{ __('messages.contact_email') }} *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group form-group-full">
                        <label for="subject">{{ __('messages.contact_subject') }} *</label>
                        <input type="text" id="subject" name="subject" required>
                    </div>
                    
                    <div class="form-group form-group-full">
                        <label for="message">{{ __('messages.contact_message') }} *</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                </div>
                
                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i>
                    {{ __('messages.contact_send') }}
                </button>
            </form>
            
            <div class="form-message" id="form-message"></div>
        </div>
    </section>

    <!-- Company Section -->
    <section class="section" id="company">
        <div class="container">
            <h2 class="section-title">{{ __('messages.company_title') }}</h2>
            
            <div class="company-info">
                <div class="company-item">
                    <h3>{{ __('messages.company_name') }}</h3>
                    <p>{{ $companyInfo['name'] }}</p>
                </div>
                
                <div class="company-item">
                    <h3>{{ __('messages.company_representative') }}</h3>
                    <p>{{ $companyInfo['representative'] }}</p>
                </div>
                
                <div class="company-item">
                    <h3>{{ __('messages.company_founding') }}</h3>
                    <p>{{ $companyInfo['founding_year'] }}年</p>
                </div>
                
                <div class="company-item">
                    <h3>{{ __('messages.company_business') }}</h3>
                    <p>3Dプリンティング事業</p>
                </div>
                
                <div class="company-item">
                    <h3>{{ __('messages.company_address') }}</h3>
                    <p>{{ $companyInfo['address'] }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <h3>3DMOTOCRAFT</h3>
                    <p>Sereno System</p>
                </div>
                
                <div class="footer-links">
                    <a href="#privacy">{{ __('messages.footer_privacy') }}</a>
                    <a href="#terms">{{ __('messages.footer_terms') }}</a>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>{{ __('messages.footer_copyright') }}</p>
            </div>
        </div>
    </footer>

    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>