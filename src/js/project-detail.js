/**
 * Project Detail Page — Entry Point
 */
import '../styles/components.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSmoothScroll } from './smooth-scroll.js';
import { initCursor } from './cursor.js';
import { initLoader } from './loader.js';
import { getQueryParam } from './utils.js';
import { initNavToggle } from './nav-toggle.js';
import { projectsData } from './data/projects-data.js';
import { initI18n, registerLangChangeCallback, getCurrentLang, t } from './i18n.js';

gsap.registerPlugin(ScrollTrigger);

// Initialize shared modules
initI18n();
initSmoothScroll();
initCursor();
initNavToggle();

// Get project slug from URL
const slug = getQueryParam('project');
const projectIndex = projectsData.findIndex((p) => p.slug === slug);
const project = projectsData[projectIndex];

function renderProjectDetails() {
    if (!project) {
        // Fallback if project not found
        document.getElementById('detail-title').textContent = t('common.loading') === 'MEMUAT...' ? 'Project Tidak Ditemukan' : 'Project Not Found';
        document.getElementById('detail-category').textContent = '';
        document.getElementById('detail-desc-text').textContent = t('common.loading') === 'MEMUAT...' ? 'Maaf, project yang Anda cari tidak tersedia.' : 'Sorry, the project you are looking for is not available.';
        return;
    }

    const lang = getCurrentLang();
    const title = project.title[lang] || project.title.id;
    const category = project.category[lang] || project.category.id;
    const desc = project.description[lang] || project.description.id;

    // Update page title
    document.title = `${title} | Portfolio`;

    // Populate hero
    const heroBg = document.getElementById('detail-hero-bg');
    if (project.images && project.images.length > 0) {
        heroBg.style.backgroundImage = `url(${project.images[0]})`;
        heroBg.style.backgroundSize = 'cover';
        heroBg.style.backgroundPosition = 'center';
    } else {
        heroBg.style.background = project.gradient;
    }
    document.getElementById('detail-category').textContent = `${project.number} — ${category.toUpperCase()}`;
    document.getElementById('detail-title').textContent = title;

    // Populate description (supports HTML for rich descriptions)
    document.getElementById('detail-desc-text').innerHTML = desc;

    // Project navigation (prev/next)
    const prevProject = projectsData[projectIndex - 1];
    const nextProject = projectsData[projectIndex + 1];

    const navPrev = document.getElementById('nav-prev');
    const navNext = document.getElementById('nav-next');

    if (prevProject) {
        navPrev.href = `/project-detail.html?project=${prevProject.slug}`;
        navPrev.textContent = `← ${prevProject.title[lang] || prevProject.title.id}`;
    } else {
        navPrev.style.visibility = 'hidden';
    }

    if (nextProject) {
        navNext.href = `/project-detail.html?project=${nextProject.slug}`;
        navNext.textContent = `${nextProject.title[lang] || nextProject.title.id} →`;
    } else {
        navNext.style.visibility = 'hidden';
    }
}

// Initial render
renderProjectDetails();

if (project) {
    // Populate tech stack
    const techContainer = document.getElementById('detail-tech-tags');
    project.techStack.forEach((tech) => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });

    // Populate Google Play Badge
    const playStoreContainer = document.getElementById('play-store-container');
    if (project.playStoreLink) {
        const playBadge = document.createElement('a');
        playBadge.href = project.playStoreLink;
        playBadge.target = '_blank';
        playBadge.rel = 'noopener noreferrer';
        playBadge.innerHTML = `<img src="/images/getitongplaystore.png" alt="Get it on Google Play" class="play-store-badge">`;
        playStoreContainer.appendChild(playBadge);
    }

    // Populate gallery (mockups or placeholder gradient items)
    const gallerySection = document.getElementById('detail-gallery-section');
    gallerySection.innerHTML = ''; // Clear existing wrappers

    if (project.mockups && project.mockups.length > 0) {
        // Render Premium Mockup Horizontal Scroll Gallery
        const wrapper = document.createElement('div');
        wrapper.className = 'mockup-gallery-wrapper';

        const gallery = document.createElement('div');
        gallery.className = 'mockup-gallery';
        if (project.mockupStyle === 'tilted') {
            gallery.classList.add('mockup-gallery--tilted');
        }
        gallery.id = 'detail-gallery';

        project.mockups.forEach((imgSrc) => {
            const item = document.createElement('div');
            item.className = 'mockup-card';
            if (project.mockupStyle === 'tilted') {
                item.classList.add('mockup-card--tilted');
            }
            item.innerHTML = `<img src="${imgSrc}" alt="${project.title.id} Mockup">`;
            gallery.appendChild(item);
        });

        wrapper.appendChild(gallery);
        gallerySection.appendChild(wrapper);
    } else {
        // Render Standard Detail Grid Gallery
        const gallery = document.createElement('div');
        gallery.className = 'detail-gallery';
        gallery.id = 'detail-gallery';

        if (project.images && project.images.length > 0) {
            project.images.forEach((imgSrc) => {
                const item = document.createElement('div');
                item.className = 'detail-gallery__item';
                item.innerHTML = `<img src="${imgSrc}" alt="${project.title.id}">`;
                gallery.appendChild(item);
            });
        } else {
            // Placeholder gallery items
            for (let i = 0; i < 4; i++) {
                const item = document.createElement('div');
                item.className = 'detail-gallery__item';
                item.style.background = project.gradient;
                item.style.opacity = '0.3';
                gallery.appendChild(item);
            }
        }
        gallerySection.appendChild(gallery);
    }
}

// Re-render when language changes
registerLangChangeCallback(() => {
    renderProjectDetails();
    ScrollTrigger.refresh();
});

// Preloader
window.addEventListener('load', () => {
    initLoader(() => {
        // Hero entrance animation
        gsap.fromTo(
            '.detail-hero__title',
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );
        gsap.fromTo(
            '.detail-hero__category',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
        );
    });
});

// Scroll reveal for sections
gsap.utils.toArray('.detail-section').forEach((section) => {
    gsap.fromTo(
        section,
        { y: 40, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
            },
        }
    );
});

// Gallery stagger reveal (Grid)
if (document.querySelector('.detail-gallery__item')) {
    gsap.fromTo(
        '.detail-gallery__item',
        { y: 30, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#detail-gallery',
                start: 'top 85%',
            },
        }
    );
}

// Mockup gallery – pinned horizontal scroll (like homepage projects)
const mockupGallery = document.querySelector('.mockup-gallery');
const mockupWrapper = document.querySelector('.mockup-gallery-wrapper');

if (mockupGallery && mockupWrapper) {
    // Calculate how far we need to scroll
    function getMockupScrollAmount() {
        return -(mockupGallery.scrollWidth - window.innerWidth + 100);
    }

    const mockupTween = gsap.to(mockupGallery, {
        x: getMockupScrollAmount,
        ease: 'none',
    });

    ScrollTrigger.create({
        trigger: mockupWrapper,
        start: 'top top',
        end: () => `+=${getMockupScrollAmount() * -1}`,
        pin: true,
        animation: mockupTween,
        scrub: 1,
        invalidateOnRefresh: true,
    });

    // Stagger reveal cards as they enter
    gsap.fromTo(
        '.mockup-card',
        { opacity: 0, scale: 0.9 },
        {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: mockupWrapper,
                start: 'top 80%',
            },
        }
    );
}
