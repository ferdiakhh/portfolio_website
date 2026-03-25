import gsap from 'gsap';

/**
 * Initialize custom cursor (yellow dot + red outline)
 * Only active on desktop (screen width >= 1024px)
 */
export function initCursor() {
    // Early return on mobile/tablet screens
    if (window.innerWidth < 1024) {
        return;
    }

    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    if (!cursorDot || !cursorOutline) return;

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Fast follow for dot
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth follow for outline using GSAP
        gsap.to(cursorOutline, {
            x: posX,
            y: posY,
            duration: 0.15,
            ease: 'power2.out',
        });
    });

    // Add hover effect to interactive elements
    const interactives = document.querySelectorAll('a, .project-card, .project-grid-card, .filter-tab, button');
    interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '80px';
            cursorOutline.style.height = '80px';
            cursorOutline.style.borderColor = '#FBE122';
            cursorDot.style.backgroundColor = '#DA291C';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.borderColor = '#DA291C';
            cursorDot.style.backgroundColor = '#FBE122';
        });
    });
}
