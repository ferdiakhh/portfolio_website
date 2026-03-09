import { translations } from './data/translations.js';

// Get user language preference or default to 'id'
let currentLang = localStorage.getItem('appLang') || 'id';

// Callbacks to re-run layout/animation scripts when texts change width
let onLangChangeCallbacks = [];

/**
 * Initialize i18n
 */
export function initI18n() {
    // 1. Setup UI Toggle buttons
    setupLangToggles();

    // 2. Initial translation render
    renderTranslations();

    // 3. Mark active state on initial load
    updateToggleUI();
}

/**
 * Register a callback to be run whenever language changes.
 * Useful for recalculating ScrollTrigger heights after text length changes.
 */
export function registerLangChangeCallback(cb) {
    if (typeof cb === 'function') {
        onLangChangeCallbacks.push(cb);
    }
}

/**
 * Find all language toggle buttons and attach listeners
 */
function setupLangToggles() {
    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    if (!toggleBtns.length) return;

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            if (lang && lang !== currentLang) {
                setLanguage(lang);
            }
        });
    });
}

/**
 * Change current language, save to local storage, and re-render
 */
export function setLanguage(lang) {
    if (lang !== 'id' && lang !== 'en') return;

    currentLang = lang;
    localStorage.setItem('appLang', lang);

    // Update active highlight classes
    updateToggleUI();

    // Process HTML replacement
    renderTranslations();

    // Trigger any custom callbacks (like ScrollTrigger.refresh())
    onLangChangeCallbacks.forEach(cb => cb());
}

/**
 * Get current language code
 */
export function getCurrentLang() {
    return currentLang;
}

/**
 * Get translated string by key
 * @param {string} key Dictionary key mapping to translations object
 * @returns {string} Translated text
 */
export function t(key) {
    const entry = translations[key];
    if (entry) {
        return entry[currentLang] || entry['id'] || key;
    }
    return key;
}

/**
 * Finds all elements with data-i18n and replaces their innerHTML
 */
export function renderTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        // specifically use innerHTML so tags inside translations (like <span class="text-red">) work
        el.innerHTML = t(key);
    });
}

/**
 * Visual update for the toggle switch in the nav
 */
function updateToggleUI() {
    const toggleBtns = document.querySelectorAll('.lang-toggle-btn');
    toggleBtns.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
