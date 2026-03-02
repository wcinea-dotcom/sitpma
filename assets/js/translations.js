// Variable globale pour la langue courante
let currentLang = 'fr';

function applyTranslations(lang) {
    currentLang = lang;
    const texts = i18n[lang];

    if (!texts) return; // Safety check just in case

    // 1. Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.textContent = texts[key];
        }
    });

    // 2. Update placeholders (like the search bars)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (texts[key]) {
            el.placeholder = texts[key];
        }
    });

    // 3. Update Active Button Styling (Desktop Language Switcher)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            // Active state: Gold background, Dark Green text
            btn.classList.add('bg-[#c5a059]', 'text-[#1e4028]');
            btn.classList.remove('hover:bg-[#c5a059]/20');
        } else {
            // Inactive state: Transparent background, default text
            btn.classList.remove('bg-[#c5a059]', 'text-[#1e4028]');
            btn.classList.add('hover:bg-[#c5a059]/20');
        }
    });

    // 4. Sync the Mobile Select Dropdown
    const mobileSelect = document.getElementById('mobileLang');
    if (mobileSelect) {
        mobileSelect.value = lang;
    }
}

// Set default language as soon as the page loads
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
});
