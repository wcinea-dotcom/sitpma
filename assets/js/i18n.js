// Fonction pour changer la langue
function setLanguage(lang) {
    if (!i18n[lang]) {
        console.error(`Langue ${lang} non supportée`);
        return;
    }
    
    currentLang = lang;
    
    // Mettre à jour tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.placeholder) el.placeholder = i18n[lang][key];
            } else {
                el.innerHTML = i18n[lang][key];
            }
        }
    });
    
    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang') || btn.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        if (btnLang === lang) {
            btn.classList.add('bg-botanical-accent', 'text-botanical-dark');
        } else {
            btn.classList.remove('bg-botanical-accent', 'text-botanical-dark');
        }
    });
    
    // Mettre à jour le sélecteur mobile
    const mobileLang = document.getElementById('mobileLang');
    if (mobileLang) mobileLang.value = lang;
    
    // Rafraîchir les affichages
    if (typeof filtrerDonnees === 'function') filtrerDonnees();
    if (typeof filtrerRessources === 'function') filtrerRessources();
    
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
}

// Charger la langue préférée au démarrage
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && i18n[savedLang]) {
        setLanguage(savedLang);
    } else {
        // Détecter la langue du navigateur
        const browserLang = navigator.language.split('-')[0];
        if (i18n[browserLang]) {
            setLanguage(browserLang);
        } else {
            setLanguage('fr'); // Français par défaut
        }
    }
});
