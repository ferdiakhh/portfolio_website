/**
 * Mobile Navigation Toggle (Hamburger Menu)
 */
export function initNavToggle() {
    const hamburger = document.querySelector('.nav__hamburger');
    const navLinks = document.querySelector('.nav__links');
    const nav = document.querySelector('.nav');

    if (!hamburger || !navLinks || !nav) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        nav.classList.toggle('menu-open');

        // Prevent body scroll when mobile menu is open
        if (navLinks.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            nav.classList.remove('menu-open');
            document.body.style.overflow = '';
        });
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            nav.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
    });

    // Download dropdown toggle
    const downloadToggle = document.getElementById('nav-download-toggle');
    const downloadMenu = document.getElementById('nav-download-menu');

    if (downloadToggle && downloadMenu) {
        downloadToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            downloadMenu.classList.toggle('open');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!downloadToggle.contains(e.target) && !downloadMenu.contains(e.target)) {
                downloadMenu.classList.remove('open');
            }
        });

        // Close after clicking a download link
        downloadMenu.querySelectorAll('a:not(.disabled)').forEach((link) => {
            link.addEventListener('click', () => {
                downloadMenu.classList.remove('open');
            });
        });
    }
}
