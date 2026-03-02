// Script de recherche pour les plantes
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterFamille = document.getElementById('filterFamille');
    const filterSysteme = document.getElementById('filterSysteme');
    const plantsGrid = document.getElementById('plantsGrid');
    const resultCount = document.getElementById('resultCount');
    
    const allPlants = Array.from(document.querySelectorAll('.plant-card'));
    
    function filterPlants() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const famille = filterFamille ? filterFamille.value : '';
        const systeme = filterSysteme ? filterSysteme.value : '';
        
        let visibleCount = 0;
        
        allPlants.forEach(card => {
            const plantId = card.dataset.plantId;
            const plantName = card.querySelector('h3').textContent.toLowerCase();
            const plantCommon = card.querySelector('p.text-gray-500').textContent.toLowerCase();
            const plantFamille = card.querySelector('span.text-\\[\\#c5a059\\]').textContent;
            
            const matchesSearch = plantName.includes(searchTerm) || plantCommon.includes(searchTerm);
            const matchesFamille = !famille || plantFamille === famille;
            const matchesSysteme = true; // À implémenter avec les données système
            
            if (matchesSearch && matchesFamille && matchesSysteme) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (resultCount) {
            resultCount.textContent = visibleCount;
        }
    }
    
    if (searchInput) searchInput.addEventListener('input', filterPlants);
    if (filterFamille) filterFamille.addEventListener('change', filterPlants);
    if (filterSysteme) filterSysteme.addEventListener('change', filterPlants);
    
    // Exposer la fonction reset globalement
    window.resetFilters = function() {
        if (searchInput) searchInput.value = '';
        if (filterFamille) filterFamille.value = '';
        if (filterSysteme) filterSysteme.value = '';
        filterPlants();
    };
});
