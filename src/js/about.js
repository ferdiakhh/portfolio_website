/**
 * About Page — Entry Point
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

// Preloader
window.addEventListener('load', () => {
    initLoader();
});

// Bio text reveal (scrollytelling)
gsap.fromTo(
    '#bio-text',
    { opacity: 0.1, y: 50 },
    {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'none',
        scrollTrigger: {
            trigger: '#about-bio',
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: true,
        },
    }
);

// Skills tags stagger reveal
gsap.utils.toArray('.skills-group').forEach((group) => {
    gsap.fromTo(
        group.querySelectorAll('.skill-tag'),
        { y: 20, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: group,
                start: 'top 85%',
            },
        }
    );
});

// Timeline items scroll reveal
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.1,
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
        },
    });
});

// Parallax break
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
