(function () {
    const addStyles = () => {
        [
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
            'css/style.css'
        ].forEach((href) => {
            if (!document.querySelector(`link[href="${href}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
            }
        });
    };

    const addScripts = () => {
        window.googleTranslateElementInit = () => {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,fr,pa',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');
        };
        [
            'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
        ].forEach((src) => {
            if (!document.querySelector(`script[src="${src}"]`)) {
                const script = document.createElement('script');
                script.src = src;
                document.body.appendChild(script);
            }
        });
    };

    const header = `
        <header>
            <div class="bgl-topbar py-2">
                <div class="container d-flex justify-content-between align-items-center">
                    <div class="bgl-social d-flex align-items-center gap-3">
                        <a href="https://www.instagram.com/bg_laws?igsh=MXR4cTE4ejFiOGNqOQ%3D%3D" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="bgl-quicklinks dropdown">
                        <a href="about.html"> <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Services</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="laws.html">All Services</a></li>
                            <li><a class="dropdown-item" href="immigration.html">Immigration Law</a></li>
                            <li><a class="dropdown-item" href="criminal-law.html">Criminal Defence</a></li>
                            <li><a class="dropdown-item" href="real-estate.html">Real Estate Law</a></li>
                        </ul></a>
                        <a href="about.html">About Us</a>
                    </div>
                </div>
            </div>
            <div class="bgl-main-header py-3">
                <div class="container d-flex justify-content-between align-items-center">
                    <a class="d-flex align-items-center text-decoration-none" href="index.html" aria-label="BG Laws home">
                        <img src="./images/Bg.PNG" alt="BG Laws" class="bgl-logo-image">
                    </a>
                    <div class="d-flex align-items-center gap-4 flex-wrap">
                        <div>
                            <div class="bgl-phone-label">For advice and support</div>
                            <a class="bgl-phone" href="tel:6473029946">647 302 9946</a>
                        </div>
                        <a class="bgl-contact-btn" href="contact.html">CONTACT US</a>
                        <div id="google_translate_element" class="translate-widget"></div>
                    </div>
                </div>
            </div>
            <nav class="bgl-nav-wrap" aria-label="Service navigation">
                <div class="container">
                    <ul class="bgl-service-nav">
                        <li class="bgl-service-item">
                            <a class="bgl-service-link" href="immigration.html">Immigration Law <i class="fas fa-caret-down"></i></a>
                            <div class="bgl-dropdown">
                                <a href="civil-law.html">Civil Litigation <i class="fas fa-chevron-right"></i></a>
                                <a href="immigration.html">Immigration Law <i class="fas fa-chevron-right"></i></a>
                                <a href="criminal-law.html">Criminal Defence <i class="fas fa-chevron-right"></i></a>
                                <a href="real-estate.html">Real Estate Law <i class="fas fa-chevron-right"></i></a>
                                <a href="labor-law.html">Employment &amp; Work <i class="fas fa-chevron-right"></i></a>
                                <a href="administrative-law.html">Administrative Law <i class="fas fa-chevron-right"></i></a>
                                <a href="constitutional-law.html">Constitutional Law <i class="fas fa-chevron-right"></i></a>
                            </div>
                        </li>
                        <li class="bgl-service-item">
                            <a class="bgl-service-link" href="criminal-law.html">Criminal Defence <i class="fas fa-caret-down"></i></a>
                            <div class="bgl-dropdown">
                                <a href="labor-law.html">Employment Law</a>
                                <a href="immigration.html">Immigration Law</a>
                                <a href="corporate-law.html">Corporate <i class="fas fa-chevron-right"></i></a>
                                <a href="criminal-law.html">Criminal Defence <i class="fas fa-chevron-right"></i></a>
                                <a href="real-estate.html">Real Estate Law</a>
                                <a href="civil-law.html">Litigation &amp; Dispute Resolution <i class="fas fa-chevron-right"></i></a>
                                <a href="laws.html">Insolvency</a>
                            </div>
                        </li>
                        <li class="bgl-service-item">
                            <a class="bgl-service-link" href="real-estate.html">Real Estate Law <i class="fas fa-caret-down"></i></a>
                            <div class="bgl-dropdown">
                                <a href="civil-law.html">Charity Disputes</a>
                                <a href="constitutional-law.html">Defending Injunctions</a>
                                <a href="administrative-law.html">Obtaining Injunctions</a>
                                <a href="laws.html">Unlawful Expulsion</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>`;

    const footer = `
        <footer class="hl-footer">
            <div class="container">
                <div class="row g-1">
                    <div class="col-md-3"><h3>Quick Links</h3><a href="index.html">Home</a><a href="about.html">About Us</a><a href="laws.html">Services</a><a href="contact.html">Contact</a></div>
                    <div class="col-md-3"><h3>Our Services</h3><a href="criminal-law.html">Criminal Law</a><a href="immigration.html">Immigration Law</a><a href="real-estate.html">Real Estate Law</a><a href="corporate-law.html">Corporate Law</a></div>
                    <div class="col-md-6 text-md-center"><h3>Hours</h3><div class="hours-list"><div><span>Mon</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Tue</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Wed</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Thu</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Fri</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Sat</span><span>By Appointment</span></div><div><span>Sun</span><span>Closed</span></div></div></div>
                </div>
                <div class="hl-footer-bottom">Copyright &copy; 2026 BG Laws. All Rights Reserved.</div>
            </div>
        </footer>`;

    if (!document.querySelector('.service-detail-page')) return;
    addStyles();
    const shell = document.querySelector('.service-detail-shell');
    if (!shell) return;
    if (!shell.querySelector('.service-site-header')) shell.insertAdjacentHTML('afterbegin', header);
    if (!shell.querySelector('.hl-footer')) shell.insertAdjacentHTML('beforeend', footer);
    addScripts();
})();
