/**
 * Home Page — Entry Point
 */
import '../styles/components.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll } from './smooth-scroll.js';
import { initCursor } from './cursor.js';
import { initLoader } from './loader.js';
import { initParallaxMouse } from './utils.js';
import { initNavToggle } from './nav-toggle.js';
import { initI18n, registerLangChangeCallback } from './i18n.js';

gsap.registerPlugin(ScrollTrigger);

// Initialize shared modules
initI18n();
initSmoothScroll();
initCursor();
initParallaxMouse();
initNavToggle();

// Preloader + Hero entrance animation
window.addEventListener('load', () => {
    initLoader(() => {
        // Loader complete callback (optional)
    });

    // Hero text entrance — runs right after loader starts
    const tl = gsap.timeline({ delay: 0.8 });
    tl.fromTo(
        '.hero__content h1',
        { y: 100, opacity: 0, rotationX: 45 },
        {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
        }
    );
});

// Scrollytelling text reveal (About section)
gsap.fromTo(
    '#reveal-text',
    { opacity: 0.1, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'none',
        scrollTrigger: {
            trigger: '#about',
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: true,
        },
    }
);

// Quick Facts grid reveal
const factsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                factsObserver.unobserve(entry.target); // Run once
            }
        });
    },
    { threshold: 0.2 }
);
const factsContainer = document.querySelector('.about-facts');
if (factsContainer) {
    factsObserver.observe(factsContainer);
}

// Horizontal scroll section (pinned projects)
const workContainer = document.querySelector('.horizontal-scroll-container');

if (workContainer) {
    function getScrollAmount() {
        const containerWidth = workContainer.scrollWidth;
        return -(containerWidth - window.innerWidth + 100);
    }

    const tween = gsap.to(workContainer, {
        x: getScrollAmount,
        ease: 'none',
    });

    ScrollTrigger.create({
        trigger: '#work',
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
    });
}

// Parallax image break
gsap.to('.parallax-break__bg', {
    y: '30%',
    ease: 'none',
    scrollTrigger: {
        trigger: '.parallax-break__bg',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
    },
});

// Refresh ScrollTrigger when language changes
registerLangChangeCallback(() => {
    ScrollTrigger.refresh();
});
