/**
 * Projects Page — Entry Point
 */
import '../styles/components.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll } from './smooth-scroll.js';
import { initCursor } from './cursor.js';
import { initLoader } from './loader.js';
import { initParallaxMouse } from './utils.js';
import { initNavToggle } from './nav-toggle.js';
import { projectsData } from './data/projects-data.js';
import { initI18n, registerLangChangeCallback, getCurrentLang } from './i18n.js';

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

// Render project cards into grid
const grid = document.getElementById('project-grid');

function renderCards(filter = 'all') {
    grid.innerHTML = '';

    const filtered =
        filter === 'all'
            ? projectsData
            : projectsData.filter((p) => p.categoryTag === filter);

    filtered.forEach((project, index) => {
        const card = document.createElement('a');
        card.href = `/project-detail.html?project=${project.slug}`;
        card.className = 'project-grid-card';
        card.setAttribute('data-category', project.categoryTag);

        const lang = getCurrentLang();
        const categoryText = project.category[lang] || project.category.id;
        const titleText = project.title[lang] || project.title.id;

        const bgHtml = project.images && project.images.length > 0
            ? `<img src="${project.images[0]}" class="project-grid-card__bg" style="object-fit: cover; width: 100%; height: 100%;" alt="${titleText}" />`
            : `<div class="project-grid-card__bg" style="background: ${project.gradient};"></div>`;

        card.innerHTML = `
      ${bgHtml}
      <div class="project-grid-card__content">
        <p class="project-grid-card__category">${project.number} — ${categoryText.toUpperCase()}</p>
        <h2 class="project-grid-card__title">${titleText}</h2>
      </div>
    `;

        grid.appendChild(card);
    });

    // Stagger entrance animation
    gsap.fromTo(
        '.project-grid-card',
        { y: 60, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
        }
    );

    // Re-init cursor for new elements
    initCursor();
}

// Initial render
renderCards();

// Filter tabs
const filterTabs = document.querySelectorAll('.filter-tab');
filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        filterTabs.forEach((t) => t.classList.remove('filter-tab--active'));
        tab.classList.add('filter-tab--active');
        renderCards(tab.getAttribute('data-filter'));
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

// Re-render when language changes
registerLangChangeCallback(() => {
    const activeTab = document.querySelector('.filter-tab--active');
    const filter = activeTab ? activeTab.getAttribute('data-filter') : 'all';
    renderCards(filter);
    ScrollTrigger.refresh();
});
