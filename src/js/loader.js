import gsap from 'gsap';

/**
 * Initialize preloader animation
 * @param {Function} onComplete - callback when loader is done
 */
export function initLoader(onComplete) {
    const tl = gsap.timeline({
        onComplete: onComplete,
    });

    tl.to('.loader__text', {
        opacity: 0,
        scale: 1.5,
        duration: 0.8,
        ease: 'power3.inOut',
    }).to(
        '.loader',
        {
            y: '-100%',
            duration: 1,
            ease: 'power4.inOut',
        },
        '-=0.2'
    );

    return tl;
}
