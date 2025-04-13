// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    navLinks.classList.add('mobile');
    if (!navLinks.classList.contains('active')) {
        setTimeout(() => navLinks.classList.remove('mobile'), 300);
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        displayContent(sectionId);

        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            setTimeout(() => navLinks.classList.remove('mobile'), 300);
        }
    });
});

// Display content in panel
function displayContent(sectionId) {
    const panel = document.getElementById('contentPanel');
    const panelContent = document.getElementById('panelContent');
    let content = '';

    // Map section IDs to their content
    switch (sectionId) {
        case 'home':
            content = `
                <h2>Home</h2>
                <p>Welcome to NI Overseas - Your Trusted Partner for MBBS Abroad. Explore our services to pursue your dream of becoming a doctor at top international universities. We offer comprehensive support for students seeking medical education worldwide.</p>
            `;
            break;
        case 'about':
            content = `
                <h2>About Us</h2>
                <p>At NI Overseas Consultancy, we specialize in helping aspiring doctors fulfill their dreams of studying MBBS abroad. With over five years of experience, we provide comprehensive guidance and support to students seeking medical education at top international universities in Russia, Kazakhstan, Uzbekistan, and other leading destinations. Our team is uniquely equipped to assist students, as many of our employees have lived and studied in Russia themselves. Having experienced student life firsthand, they are now pursuing their own medical careers there. This dual perspective—as former students and current mentors—sets us apart from other consultancies. We understand the challenges students may face during their academic journey and offer practical solutions to ensure their success.</p>
                <p>Our hands-on experience and dedication to simplifying university life make us a reliable partner for students and a trustworthy choice for parents. We take pride in being both a faithful guide and a promising company, committed to supporting students and earning the confidence of families who entrust us with their children’s futures.</p>
            `;
            break;
        case 'universities':
            content = `
                <h2>Universities</h2>
                <p>Our partnered universities are recognized by WHO, NMC (MCI), and other international medical bodies, ensuring graduates can pursue careers in India and globally. Explore top institutions in Russia, Kazakhstan, and Uzbekistan, with detailed lists available in our university section.</p>
            `;
            break;
        case 'countries':
            content = `
                <h2>Countries</h2>
                <p>Study destinations include Russia, Kazakhstan, Uzbekistan, Georgia, Kyrgyzstan, and the Philippines. Each country offers unique opportunities for medical education, with detailed information available upon selection.</p>
            `;
            break;
        case 'gallery':
            content = `
                <h2>Gallery</h2>
                <p>View our gallery featuring images and videos of student life, university campuses, and cultural events from our study abroad programs. Click to explore more visual content.</p>
            `;
            break;
        case 'consultation':
            content = `
                <h2>Contact Us</h2>
                <p>Get free consultation or apply for a scholarship. Contact us at +91 7410103463 or email nioverseas099@gmail.com for personalized support. Fill out our form to get started.</p>
            `;
            break;
    }

    panelContent.innerHTML = content;
    panel.classList.add('active');
}

// Close content panel
function closeContentPanel() {
    const panel = document.getElementById('contentPanel');
    panel.classList.remove('active');
}

// Show logo information
function showLogoInfo() {
    const panel = document.getElementById('contentPanel');
    const panelContent = document.getElementById('panelContent');
    const logoInfo = `
        <h2>About NI Overseas</h2>
        <p>NI Overseas Consultancy is your trusted partner for studying MBBS abroad. With over five years of experience, we guide students to top medical universities in Russia, Kazakhstan, Uzbekistan, and beyond. Our team, many of whom have studied and now practice medicine abroad, offers unparalleled support from admission to settlement. We are committed to making your journey to becoming a doctor seamless and successful.</p>
        <p>Contact us at +91 7410103463 or email nioverseas099@gmail.com to learn more about how we can help you achieve your medical career goals.</p>
    `;
    panelContent.innerHTML = logoInfo;
    panel.classList.add('active');
}

// Close panel on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('contentPanel').classList.contains('active')) {
        closeContentPanel();
    }
});