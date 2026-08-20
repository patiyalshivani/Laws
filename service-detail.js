(function () {
    const menuGroups = [
        { title: "Immigration Law", className: "immigration", items: [
            ["Post-Graduate Work Permits", "post-graduate-work-permits.html"], ["LMIA", "lmia.html"], ["Spousal Open Work Permit", "spousal-open-work-permit.html"], ["LMIA-Based Work Permits", "lmia-based-work-permits.html"], ["Super Visa", "super-visa.html"], ["Visitor Visas", "visitor-visas.html"], ["Provincial Nominee Programs", "provincial-nominee-programs.html"], ["Express Entry", "express-entry.html"], ["Spousal Sponsorships", "spousal-sponsorships.html"], ["Parents & Grandparents", "parents-grandparents.html"], ["Humanitarian & Compassionate", "humanitarian-compassionate.html"], ["PR Card Renewals", "permanent-resident-card-renewals.html"], ["Citizenship Applications", "citizenship-applications.html"], ["Atlantic Immigration Program", "atlantic-immigration-program.html"], ["Rural Community Immigration Pilot", "rural-community-immigration-pilot.html"], ["Refugee Claims & Appeals", "refugee-claims-appeals.html"], ["Protected Person PR", "protected-person-pr-applications.html"], ["PRRA", "prra.html"], ["Travel Documents", "travel-documents.html"], ["Judicial Reviews", "judicial-reviews-federal-court.html"], ["Stay of Removal Orders", "stay-of-removal-orders.html"], ["Admissibility Hearings", "admissibility-hearings.html"], ["Detention Reviews", "detention-reviews.html"], ["Family Class Sponsorship Appeals", "family-class-sponsorship-appeals.html"]
        ]},
        { title: "Criminal Defence", className: "criminal", items: [["Bail Hearings & Reviews", "bail-hearings-reviews.html"], ["Impaired Driving", "impaired-driving.html"], ["Breath Sample Refusal", "breath-sample-refusal.html"], ["Assault-Related Charges", "assault-charges.html"], ["Domestic Allegations", "domestic-allegations.html"], ["Uttering Threats", "uttering-threats.html"], ["Criminal Harassment", "criminal-harassment.html"], ["Robbery & Extortion", "robbery-extortion.html"], ["Mischief", "mischief.html"], ["Theft", "theft.html"], ["Fraud", "fraud.html"]]},
        { title: "Real Estate Law", className: "real-estate", items: [["Real Estate Law", "real-estate.html"]]}
    ];

    const groupMarkup = (group) => `<div class="bgl-menu-group bgl-menu-${group.className}"><strong>${group.title}</strong>${group.items.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</div>`;
    const categoryMarkup = (group) => {
        const sections = group.className === 'immigration'
            ? [['Temporary Status', 0, 6], ['Permanent Residence & Citizenship', 6, 15], ['Refugee & Protection', 15, 19], ['Litigation & Enforcement', 19, 24]]
            : group.className === 'criminal'
                ? [['Bail & Driving', 0, 3], ['Assault & Allegations', 3, 7], ['Property & Financial Charges', 7, 11]]
                : [['Residential Real Estate', 0, 1], ['Commercial Real Estate', 1, 2], ['Investment & Refinancing', 2, 3]];
        return sections.map(([title, start, end]) => `<div class="bgl-menu-subgroup bgl-submenu-trigger"><button type="button" class="bgl-subgroup-label">${title}<i class="fas fa-chevron-right" aria-hidden="true"></i></button><div class="bgl-submenu">${group.items.slice(start, end).map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</div></div>`).join('');
    };
    const addSiteChrome = () => {
        if (!document.querySelector('.service-detail-page')) return;
        ['https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', 'css/style.css'].forEach((href) => {
            if (!document.querySelector(`link[href="${href}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
            }
        });
        document.querySelector('.service-detail-nav')?.remove();
        document.querySelector('.service-detail-footer')?.remove();
        document.querySelector('.service-detail-shell')?.insertAdjacentHTML('afterbegin', `<header class="service-site-header"><div class="bgl-topbar py-2"><div class="container d-flex justify-content-between align-items-center"><div class="bgl-social"><a href="https://www.instagram.com/bg_laws" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a></div><div class="bgl-quicklinks dropdown"><button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Services</button><ul class="dropdown-menu"></ul><a href="about.html">About Us</a></div></div></div><div class="bgl-main-header py-3"><div class="container d-flex justify-content-between align-items-center"><a class="d-flex align-items-center text-decoration-none" href="index.html" aria-label="BG Laws home"><img src="./images/Bg.PNG" alt="BG Laws" class="bgl-logo-image"></a><div class="d-flex align-items-center gap-4"><div><div class="bgl-phone-label">For advice and support</div><a class="bgl-phone" href="tel:6473029946">647 302 9946</a></div><a class="bgl-contact-btn" href="contact.html">CONTACT US</a></div></div></div><nav class="bgl-nav-wrap" aria-label="Service navigation"><div class="container"><ul class="bgl-service-nav"><li class="bgl-service-item"><a class="bgl-service-link" href="immigration.html">Immigration Law <i class="fas fa-caret-down"></i></a><div class="bgl-dropdown"></div></li><li class="bgl-service-item"><a class="bgl-service-link" href="criminal-law.html">Criminal Defence <i class="fas fa-caret-down"></i></a><div class="bgl-dropdown"></div></li><li class="bgl-service-item"><a class="bgl-service-link" href="real-estate.html">Real Estate Law <i class="fas fa-caret-down"></i></a><div class="bgl-dropdown"></div></li></ul></div></nav></header>`);
        document.querySelector('.service-detail-shell')?.insertAdjacentHTML('beforeend', `<footer class="hl-footer"><div class="container"><div class="row g-1"><div class="col-md-3"><h3>Quick Links</h3><a href="index.html">Home</a><a href="about.html">About Us</a><a href="laws.html">Services</a><a href="contact.html">Contact</a></div><div class="col-md-3"><h3>Our Services</h3><a href="criminal-law.html">Criminal Law</a><a href="immigration.html">Immigration Law</a><a href="real-estate.html">Real Estate Law</a><a href="corporate-law.html">Corporate Law</a></div><div class="col-md-6 text-md-center"><h3>Hours</h3><div class="hours-list"><div><span>Mon</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Tue</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Wed</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Thu</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Fri</span><span>09:00 a.m. - 05:00 p.m.</span></div><div><span>Sat</span><span>By Appointment</span></div><div><span>Sun</span><span>Closed</span></div></div></div></div><div class="hl-footer-bottom">Copyright &copy; 2026 BG Laws. All Rights Reserved.</div></div></footer>`);
    };

    const appendSourceContent = async (type, category, title, slug) => {
        const sourcePage = type === 'immigration' ? 'immigration.html' : type === 'criminal' ? 'criminal-law.html' : 'real-estate.html';
        try {
            const response = await fetch(sourcePage);
            if (!response.ok) return;
            const source = new DOMParser().parseFromString(await response.text(), 'text/html');
            let sourceNode;
            if (type === 'criminal') {
                const selectors = { 'Bail Hearings & Bail Reviews': '#bail', 'Impaired Driving (DUI)': '#dui', 'Refusal to Provide a Breath Sample': '#dui', 'Assault-Related Charges': '#assault', 'Domestic-Related Criminal Allegations': '#harassment', 'Uttering Threats': '#harassment', 'Criminal Harassment': '#harassment', 'Robbery & Extortion': '#property', 'Mischief': '#property', 'Theft': '#property', 'Fraud': '#property' };
                sourceNode = source.querySelector(selectors[title]);
            } else if (type === 'immigration') {
                const phrase = category.includes('Temporary') ? 'Post-Graduation Work Permit' : category.includes('Permanent') ? 'Provincial Nominee Program' : category.includes('Refugee') ? 'Refugee Claims' : 'Judicial Reviews';
                sourceNode = [...source.querySelectorAll('article')].find((article) => article.textContent.includes(phrase));
            } else {
                sourceNode = source.querySelector('.col-lg-8');
            }
            if (!sourceNode) return;
            const panel = document.createElement('section');
            panel.className = 'service-source-content';
            panel.innerHTML = `<p class="service-source-label">Source-based service information</p><h2>Related guidance for ${title}</h2>${sourceNode.innerHTML}`;
            document.querySelector('.service-detail-content')?.appendChild(panel);
        } catch (error) {
            if (slug === 'post-graduate-work-permits') {
                const panel = document.createElement('section');
                panel.className = 'service-source-content';
                panel.innerHTML = '<p class="service-source-label">Source-based service information</p><h2>Post-Graduate Work Permit (PGWP)</h2><h3>What is the PGWP?</h3><p>The Post-Graduation Work Permit is an open work permit that allows international graduates from eligible Canadian institutions to work for any employer in any industry across Canada. It offers valuable Canadian work experience and helps build eligibility for permanent residence through pathways like the Canadian Experience Class (CEC).</p><h3>Eligibility Requirements</h3><p>To qualify for a PGWP you must:</p><ul><li>Graduate from a program at a designated learning institution (DLI) and complete it full-time for at least 8 months.</li><li>Apply within 180 days after receiving your final transcript or completion letter.</li><li>Be in valid status, such as a study permit or visitor record, when applying.</li><li>Meet new eligibility rules, including language test requirements for programs started November 1, 2024 or later.</li></ul><h3>Validity Period</h3><p>If your program was 8 months to less than 2 years, your PGWP may match the program length. If your program is 2 years or more, you may qualify for up to a 3-year PGWP. Multiple eligible programs may be combined to increase PGWP validity.</p><h3>Working After Graduation</h3><p>If you apply before your study permit expires, you may work full-time while waiting for a decision under implied status. If you wait until your permit expires without applying, you lose that right.</p><h3>Documents You’ll Need</h3><p>Your application should include the supporting documents identified for your program, status, graduation, language results, and other applicable eligibility requirements.</p>';
                document.querySelector('.service-detail-content')?.appendChild(panel);
            }
        }
    };

    const renderServiceMenus = () => {
        const groups = menuGroups.map(groupMarkup).join('');
        document.querySelectorAll('.bgl-quicklinks .dropdown-menu').forEach((menu) => { menu.innerHTML = groups; menu.classList.add('bgl-service-menu-list'); });
        document.querySelectorAll('.bgl-service-nav').forEach((nav) => {
            nav.querySelectorAll('.bgl-service-item:not(.bgl-all-services)').forEach((item) => {
                const href = item.querySelector('.bgl-service-link')?.getAttribute('href') || '';
                const group = href.includes('immigration') ? menuGroups[0] : href.includes('criminal') ? menuGroups[1] : href.includes('real-estate') ? menuGroups[2] : null;
                const dropdown = item.querySelector('.bgl-dropdown');
                if (group?.className === 'real-estate') { dropdown?.remove(); item.querySelector('.bgl-service-link i')?.remove(); return; }
                if (group && dropdown) { dropdown.innerHTML = categoryMarkup(group); dropdown.classList.add('bgl-category-dropdown'); }
            });
        });
        document.querySelectorAll('.service-detail-nav').forEach((nav) => {
            if (nav.querySelector('.service-detail-menu')) return;
            const menu = document.createElement('details');
            menu.className = 'service-detail-menu';
            menu.innerHTML = `<summary>Services</summary><div class="service-detail-menu-panel">${groups}</div>`;
            nav.appendChild(menu);
        });
    };
    addSiteChrome();
    renderServiceMenus();

    const services = {
        "post-graduate-work-permits": ["Immigration Law / Temporary Status", "Post-Graduate Work Permits", "The Post-Graduation Work Permit is an open work permit for eligible international graduates from Canadian institutions. Eligibility, validity, working after graduation, and required documents depend on the program and application timing.", "immigration"],
        "lmia": ["Immigration Law / Temporary Status", "Labour Market Impact Assessment (LMIA)", "An LMIA is a Government of Canada decision that allows an employer to hire a foreign worker where the job cannot be filled by a Canadian citizen or permanent resident. BG Laws assists with employer requirements and high-wage or low-wage considerations.", "immigration"],
        "spousal-open-work-permit": ["Immigration Law / Temporary Status", "Spousal Open Work Permit", "Spouses or common-law partners of certain foreign nationals in Canada may qualify for an open work permit. Eligibility depends on the principal applicant's status and circumstances.", "immigration"],
        "lmia-based-work-permits": ["Immigration Law / Temporary Status", "LMIA-Based Work Permits", "LMIA-based work permits connect an approved employer position with a work permit application. The application must address the employer, offered position, and supporting evidence identified in the source material.", "immigration"],
        "super-visa": ["Immigration Law / Temporary Status", "Super Visa", "The Super Visa allows eligible parents and grandparents of Canadian citizens or permanent residents to visit Canada for extended stays. Applications involve medical, insurance, host, and income considerations.", "immigration"],
        "visitor-visas": ["Immigration Law / Temporary Status", "Visitor Visas", "A Temporary Resident Visa permits entry to Canada for a temporary stay, commonly for travel, tourism, or visiting family and friends. Supporting documents should address the purpose of travel and the temporary nature of the visit.", "immigration"],
        "provincial-nominee-programs": ["Immigration Law / Permanent Residence & Citizenship", "Provincial Nominee Programs (PNP)", "Provincial Nominee Programs allow provinces and territories to select people whose skills, education, and work experience meet the needs of their local economy.", "immigration"],
        "express-entry": ["Immigration Law / Permanent Residence & Citizenship", "Express Entry", "Express Entry is Canada's points-based selection system for skilled workers. The process includes eligibility, profile creation, CRS ranking, an invitation, the permanent residence application, and a decision.", "immigration"],
        "spousal-sponsorships": ["Immigration Law / Permanent Residence & Citizenship", "Spousal Sponsorships", "Spousal sponsorship may proceed through the Family Class for an out-of-Canada application or the spouse or common-law partner in Canada class. The appropriate class depends on the family's circumstances.", "immigration"],
        "parents-grandparents": ["Immigration Law / Permanent Residence & Citizenship", "Parents & Grandparents", "Parents and grandparents applications involve sponsorship eligibility, financial requirements, and the application process described in the supplied website content.", "immigration"],
        "humanitarian-compassionate": ["Immigration Law / Permanent Residence & Citizenship", "Humanitarian & Compassionate Applications", "The H&C pathway under section 25(1) of the Immigration and Refugee Protection Act may allow eligible foreign nationals to request permanent residence despite not meeting usual program requirements.", "immigration"],
        "permanent-resident-card-renewals": ["Immigration Law / Permanent Residence & Citizenship", "Permanent Resident Card Renewals", "A permanent resident card is proof of status in Canada and expires even though permanent resident status does not. Renewal applications must address the residency obligation and supporting documents.", "immigration"],
        "citizenship-applications": ["Immigration Law / Permanent Residence & Citizenship", "Citizenship Applications", "Citizenship applications involve eligibility requirements, physical presence, language and knowledge requirements where applicable, and the application documents identified in the source material.", "immigration"],
        "atlantic-immigration-program": ["Immigration Law / Permanent Residence & Citizenship", "Atlantic Immigration Program", "The Atlantic Immigration Program is a permanent residence pathway for skilled workers and international graduates who want to live and work in New Brunswick, Nova Scotia, Prince Edward Island, or Newfoundland and Labrador.", "immigration"],
        "rural-community-immigration-pilot": ["Immigration Law / Permanent Residence & Citizenship", "Rural Community Immigration Pilot", "The Rural Community Immigration Pilot helps eligible skilled workers and international graduates settle in designated rural communities across Canada.", "immigration"],
        "refugee-claims-appeals": ["Immigration Law / Refugee & Protection", "Refugee Claims & Appeals", "Refugee claims involve eligibility, a Basis of Claim, evidence, a hearing, and a decision. The available appeal or judicial review step depends on the decision and applicable process.", "immigration"],
        "protected-person-pr-applications": ["Immigration Law / Refugee & Protection", "Protected Person PR Applications", "Protected persons may pursue permanent residence applications using the process and supporting documents applicable to their circumstances.", "immigration"],
        "prra": ["Immigration Law / Refugee & Protection", "Pre-Removal Risk Assessment (PRRA)", "A PRRA is a legal process for persons facing removal who seek protection because they may face serious risk if returned to their country.", "immigration"],
        "travel-documents": ["Immigration Law / Refugee & Protection", "Travel Documents", "BG Laws assists with Refugee Travel Documents and Certificates of Identity for protected persons and people who cannot obtain travel documents from their country of citizenship.", "immigration"],
        "judicial-reviews-federal-court": ["Immigration Law / Litigation & Enforcement", "Judicial Reviews in Federal Court", "Judicial review matters can involve strict timelines and require careful review of the decision, record, and available Federal Court process.", "immigration"],
        "stay-of-removal-orders": ["Immigration Law / Litigation & Enforcement", "Stay of Removal Orders", "A stay application may be urgent where a removal order is scheduled. Legal representation is important because timelines and available remedies are strictly limited.", "immigration"],
        "admissibility-hearings": ["Immigration Law / Litigation & Enforcement", "Admissibility Hearings", "Admissibility proceedings address whether a person may remain in Canada under the applicable immigration legislation and evidence.", "immigration"],
        "detention-reviews": ["Immigration Law / Litigation & Enforcement", "Detention Reviews", "Detention review matters require focused preparation about the reasons for detention, release planning, and proposed conditions.", "immigration"],
        "family-class-sponsorship-appeals": ["Immigration Law / Litigation & Enforcement", "Family Class Sponsorship Appeals", "Family Class sponsorship appeals require careful attention to the refusal, evidence, and applicable appeal process and timelines.", "immigration"],
        "bail-hearings-reviews": ["Criminal Defence", "Bail Hearings & Bail Reviews", "Bail affects liberty, defence preparation, family, and work. BG Laws prepares release plans, surety materials, and bail-review applications where appropriate.", "criminal"],
        "impaired-driving": ["Criminal Defence", "Impaired Driving (DUI)", "Impaired-driving cases may involve breath tests, blood tests, field-sobriety evidence, police observations, timelines, and Charter issues. Each case turns on its evidence.", "criminal"],
        "breath-sample-refusal": ["Criminal Defence", "Refusal to Provide a Breath Sample", "Refusing or failing to provide a sample when lawfully required is a separate offence. The source material identifies issues such as the demand, instructions, equipment, and medical or physical conditions.", "criminal"],
        "assault-charges": ["Criminal Defence", "Assault-Related Charges", "Assault offences cover a range of allegations. Defence issues may include consent, identity, credibility, intent, accidental contact, and the evidence of harm or weapon use.", "criminal"],
        "domestic-allegations": ["Criminal Defence", "Domestic-Related Criminal Allegations", "Domestic-related allegations can affect bail conditions, contact, family life, and the criminal process. Early advice helps address evidence, communication, and release conditions.", "criminal"],
        "uttering-threats": ["Criminal Defence", "Uttering Threats", "Threat allegations may involve statements about physical harm, property damage, or implied violence. Context, intent, credibility, and the evidence of the alleged words are important issues.", "criminal"],
        "criminal-harassment": ["Criminal Defence", "Criminal Harassment", "Criminal harassment allegations may involve repeated messages, following, monitoring, or appearing at a person's home, workplace, or school. The evidence and context must be examined carefully.", "criminal"],
        "robbery-extortion": ["Criminal Defence", "Robbery & Extortion", "Robbery and extortion allegations can carry serious consequences. Defence review may examine force, threats, identity, credibility, Charter issues, and intent.", "criminal"],
        "mischief": ["Criminal Defence", "Mischief", "Mischief allegations may concern intentional interference with property or data, including damage, unsafe use, blocked enjoyment, or computer-data interference.", "criminal"],
        "theft": ["Criminal Defence", "Theft", "Theft requires proof that property belonging to another person was taken without consent with intent to permanently deprive the owner. Consent, identity, honest belief, and evidence handling may be relevant.", "criminal"],
        "fraud": ["Criminal Defence", "Fraud", "Fraud allegations involve deceit, falsehoods, or dishonest conduct used to obtain property, money, services, or an advantage. Intent, records, digital evidence, and credibility are central issues.", "criminal"],
        "residential-real-estate": ["Real Estate Law", "Residential Real Estate", "BG Laws assists with buying and selling homes and condos, title searches and registration, agreements of purchase and sale, mortgage transactions, refinancing, title transfers, and survivorship applications.", "real-estate"],
        "commercial-real-estate": ["Real Estate Law", "Commercial Real Estate", "Commercial real estate matters may include property purchases and sales, commercial leases and agreements, corporate ownership structures, and investment transactions.", "real-estate"],
        "investment-refinancing": ["Real Estate Law", "Investment & Refinancing", "BG Laws assists with condo investments, rental property transactions, private financing, refinancing, closing-cost guidance, and transaction documentation.", "real-estate"]
    };

    const pathSlug = window.location.pathname.split('/').pop().replace(/\.html$/, '');
    const slug = services[pathSlug] ? pathSlug : document.body.dataset.service;
    const service = services[slug];
    if (!service) return;
    const [category, title, description, type] = service;
    document.title = `${title} | BG Laws`;
    document.querySelector('.service-detail-hero').dataset.category = type;
    document.querySelector('[data-detail-category]').textContent = category;
    document.querySelector('[data-detail-title]').textContent = title;
    document.querySelector('[data-detail-description]').textContent = description;
    document.querySelector('[data-detail-heading]').textContent = `How BG Laws can help with ${title}`;
    document.querySelector('[data-detail-copy]').textContent = 'We begin by understanding the facts, reviewing the available documents, and identifying the next practical step. The appropriate process and supporting evidence depend on the circumstances of each matter.';
    appendSourceContent(type, category, title, slug);
})();
