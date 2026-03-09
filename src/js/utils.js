import gsap from 'gsap';

/**
 * Parallax effect on mouse move for elements with [data-speed]
 */
export function initParallaxMouse() {
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('[data-speed]').forEach((layer) => {
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            gsap.to(layer, { x: x, y: y, duration: 0.5 });
        });
    });
}

/**
 * Get URL query parameter by name
 */
export function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}
