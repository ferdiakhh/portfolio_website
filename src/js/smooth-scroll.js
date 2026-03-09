import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize Lenis smooth scrolling synced with GSAP ScrollTrigger
 */
export function initSmoothScroll() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Smart Header specific
    const nav = document.querySelector('.nav');
    if (nav) {
        lenis.on('scroll', (e) => {
            // Don't hide if mobile menu is open
            if (nav.classList.contains('menu-open')) return;

            if (e.scroll > 100 && e.velocity > 0.5) {
                // Scrolling down clearly -> hide
                nav.classList.add('nav--hidden');
            } else if (e.velocity < -0.5 || e.scroll <= 100) {
                // Scrolling up clearly or near top -> show
                nav.classList.remove('nav--hidden');
            }
        });
    }

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return lenis;
}
