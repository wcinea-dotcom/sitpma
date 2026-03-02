// Données des ressources (structure multilingue)
const ressourcesData = [
    {
        id: 1,
        type: "Livre", // Values match the HTML select options
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400&h=300",
        titre: {
            fr: "Plantes Médicinales d'Haïti",
            en: "Medicinal Plants of Haiti",
            ht: "Plant Medsin Ayiti"
        },
        description: {
            fr: "Un guide complet sur l'utilisation traditionnelle des plantes endémiques.",
            en: "A complete guide on the traditional use of endemic plants.",
            ht: "Yon gid konplè sou jan yo sèvi ak plant peyi a depi lontan."
        },
        lien: "#"
    },
    {
        id: 2,
        type: "Article",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400&h=300",
        titre: {
            fr: "Étude phytochimique du Moringa",
            en: "Phytochemical study of Moringa",
            ht: "Etid sou konpozisyon Moringa"
        },
        description: {
            fr: "Analyse détaillée des propriétés nutritionnelles et antioxydantes.",
            en: "Detailed analysis of nutritional and antioxidant properties.",
            ht: "Gwo analiz sou tout bon noutriman ak fòs plant lan genyen."
        },
        lien: "#"
    },
    {
        id: 3,
        type: "Vocabulaire",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400&h=300",
        titre: {
            fr: "Glossaire Botanique Kreyòl-Français",
            en: "Creole-French Botanical Glossary",
            ht: "Diksyonè Botanik Kreyòl-Franse"
        },
        description: {
            fr: "Traduction et explication des termes botaniques locaux.",
            en: "Translation and explanation of local botanical terms.",
            ht: "Tradiksyon ak esplikasyon mo botanik nou sèvi isit."
        },
        lien: "#"
    }
];

// Fonction pour afficher les cartes de ressources
function renderRessources(ressourcesToRender) {
    const grid = document.getElementById('ressourcesGrid');
    
    // Safety check if the element doesn't exist on the page
    if (!grid) return;

    // Grab the UI translations for the current language
    const t = i18n[currentLang]; 

    grid.innerHTML = '';

    // Show empty state if no resources match the search/filters
    if (ressourcesToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-10">
                <p class="text-xl text-gray-500">${t.res_empty}</p>
                <p class="text-sm text-gray-400">${t.res_empty_desc}</p>
            </div>`;
        return;
    }

    // Loop through the resources and build the HTML cards
    ressourcesToRender.forEach(res => {
        const titre = res.titre[currentLang];
        const description = res.description[currentLang];
        
        // Determine the correct icon based on the resource type
        let iconHtml = '';
        if (res.type === 'Livre') iconHtml = '<i class="fa-solid fa-book"></i>';
        else if (res.type === 'Article') iconHtml = '<i class="fa-solid fa-file-lines"></i>';
        else if (res.type === 'Vocabulaire') iconHtml = '<i class="fa-solid fa-spell-check"></i>';

        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 card-hover flex flex-col';
        
        card.innerHTML = `
            <div class="h-48 relative overflow-hidden bg-gray-200">
                <img src="${res.image}" alt="${titre}" class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-[#c5a059] text-[#1e4028] px-3 py-1 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2">
                    ${iconHtml} ${res.type}
                </div>
            </div>
            <div class="p-6 flex-grow flex flex-col">
                <h4 class="text-xl font-black text-[#1e4028] mb-3">${titre}</h4>
                <p class="text-gray-600 mb-6 flex-grow">${description}</p>
                
                <a href="${res.lien}" class="inline-flex items-center justify-center gap-2 w-full py-3 bg-gray-100 text-[#1e4028] font-bold rounded-xl hover:bg-[#c5a059] transition">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> ${t.btn_read}
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Fonction pour appliquer les filtres et la recherche aux ressources
function applyResFilters() {
    const searchInput = document.getElementById('searchResInput');
    const typeFilter = document.getElementById('filterResType');
    
    if (!searchInput || !typeFilter) return;

    const searchText = searchInput.value.toLowerCase();
    const typeValue = typeFilter.value;

    const filteredRessources = ressourcesData.filter(res => {
        // Search matches Title OR Description in the current language
        const titre = res.titre[currentLang].toLowerCase();
        const desc = res.description[currentLang].toLowerCase();
        const matchSearch = titre.includes(searchText) || desc.includes(searchText);
        
        // Match Type (values are in French as defined in HTML <select>)
        const matchType = typeValue === "" || res.type === typeValue;

        return matchSearch && matchType;
    });

    renderRessources(filteredRessources);
}

// Initialize everything when the DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Attach Event Listeners to resource filters
    const searchResInput = document.getElementById('searchResInput');
    const filterResType = document.getElementById('filterResType');

    if (searchResInput) searchResInput.addEventListener('input', applyResFilters);
    if (filterResType) filterResType.addEventListener('change', applyResFilters);

    // Initial render with a slight delay to ensure i18n dictionary is loaded
    setTimeout(() => {
        renderRessources(ressourcesData);
    }, 100);
});
