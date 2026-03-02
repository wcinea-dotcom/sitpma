---
layout: default
title: Atlas des Plantes du Grand Sud d'Haïti
lang: fr
---

<section class="bg-gradient-to-r from-red-700 to-red-500 text-white py-6 px-4">
  <div class="max-w-6xl mx-auto flex items-center justify-center gap-4 flex-wrap">
    <div class="bg-white/20 p-3 rounded-full">
      <i class="fa-solid fa-triangle-exclamation text-2xl"></i>
    </div>
    <p class="text-lg font-bold text-center">
      ⚠️ AVERTISSEMENT : Cet atlas n'est pas un guide d'automédication. Consultez un professionnel de la santé.
    </p>
  </div>
</section>

<section class="bg-[#2c5e3b] text-white py-8">
  <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div class="bg-white/10 p-4 rounded-xl">
      <div class="text-3xl font-black">90+</div>
      <div class="text-sm uppercase tracking-wider opacity-90">Plantes Documentées</div>
    </div>
    <div class="bg-white/10 p-4 rounded-xl">
      <div class="text-3xl font-black">25+</div>
      <div class="text-sm uppercase tracking-wider opacity-90">Familles Botaniques</div>
    </div>
    <div class="bg-white/10 p-4 rounded-xl">
      <div class="text-3xl font-black">12</div>
      <div class="text-sm uppercase tracking-wider opacity-90">Systèmes du Corps</div>
    </div>
    <div class="bg-white/10 p-4 rounded-xl">
      <div class="text-3xl font-black">80%</div>
      <div class="text-sm uppercase tracking-wider opacity-90">Utilisation Traditionnelle</div>
    </div>
  </div>
</section>

<section id="data-hub" class="bg-[#e8f5e9] py-16 px-4 border-b border-gray-200">
  <div class="max-w-6xl mx-auto text-center">
    <span class="inline-block py-1 px-4 rounded-full bg-[#2c5e3b] text-white text-sm font-bold mb-6 tracking-wide">
      <i class="fa-solid fa-leaf mr-1"></i> 90+ Plantes Documentées
    </span>
    <h2 class="text-4xl md:text-5xl font-black text-[#1e4028] mb-4">Atlas des Plantes du Grand Sud</h2>
    <p class="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
      Explorez la richesse de la flore médicinale, aromatique et nutritionnelle des départements du Sud et de la Grand'Anse.
    </p>

    <div class="bg-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4 items-center border border-gray-100">
      <div class="relative w-full md:w-1/4">
        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input type="text" id="searchInput"
               class="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2c5e3b] focus:border-[#2c5e3b] outline-none transition"
               placeholder="🔍 Ruellia, Moringa...">
      </div>

      <select id="filterFamille" class="w-full md:w-1/5 py-3 px-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2c5e3b] focus:border-[#2c5e3b] outline-none bg-white">
        <option value="">Toutes les familles</option>
        <option value="Acanthaceae">Acanthaceae</option>
        <option value="Asteraceae">Asteraceae</option>
        <option value="Cucurbitaceae">Cucurbitaceae</option>
        <option value="Euphorbiaceae">Euphorbiaceae</option>
        <option value="Fabaceae">Fabaceae</option>
        <option value="Lamiaceae">Lamiaceae</option>
        <option value="Rutaceae">Rutaceae</option>
        <option value="Solanaceae">Solanaceae</option>
      </select>

      <select id="filterSysteme" class="w-full md:w-1/5 py-3 px-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2c5e3b] focus:border-[#2c5e3b] outline-none bg-white">
        <option value="">Tous les systèmes</option>
        <option value="Nerveux">Nerveux</option>
        <option value="Digestif">Digestif</option>
        <option value="Cardiovasculaire">Cardiovasculaire</option>
        <option value="Respiratoire">Respiratoire</option>
        <option value="Immunitaire">Immunitaire</option>
      </select>

      <select id="filterMaladie" class="w-full md:w-1/5 py-3 px-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2c5e3b] focus:border-[#2c5e3b] outline-none bg-white">
        <option value="">Toutes les maladies</option>
        <option value="Diabète">Diabète</option>
        <option value="Hypertension">Hypertension</option>
        <option value="Paludisme">Paludisme</option>
        <option value="Infections">Infections</option>
      </select>

      <button onclick="resetFilters()" class="w-full md:w-auto px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition flex items-center justify-center gap-2" type="button">
        <i class="fa-solid fa-rotate-right"></i> Réinitialiser
      </button>
    </div>
  </div>
</section>

<section class="py-12 px-4 max-w-7xl mx-auto">
  <div class="flex justify-between items-center mb-6">
    <h3 class="text-2xl font-bold text-gray-800">🌿 Plantes Médicinales</h3>
    <span id="resultCount" class="bg-[#e8f5e9] border border-[#2c5e3b] text-[#2c5e3b] px-4 py-2 rounded-full text-sm font-bold">0</span>
  </div>
  <div id="resultatsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]"></div>
</section>

<section id="resources-hub" class="bg-gray-100 py-16 px-4 border-t border-gray-200">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <span class="inline-block py-1 px-4 rounded-full bg-[#c5a059] text-[#1e4028] text-sm font-bold mb-4">
        <i class="fa-solid fa-book-open-reader mr-1"></i> Bibliothèque Numérique
      </span>
      <h2 class="text-4xl md:text-5xl font-black text-[#1e4028] mb-4">Base de Données des Ressources</h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Parcourez notre collection d'articles scientifiques, de livres spécialisés et de vocabulaire botanique.
      </p>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-4 items-center max-w-4xl mx-auto">
      <div class="relative w-full md:w-2/3">
        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input type="text" id="searchResInput"
               class="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c5a059] focus:border-[#c5a059] outline-none"
               placeholder="Rechercher une ressource...">
      </div>
      <select id="filterResType" class="w-full md:w-1/3 py-3 px-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c5a059] focus:border-[#c5a059] outline-none bg-white">
        <option value="">Tous les types</option>
        <option value="Livre">📚 Livres</option>
        <option value="Article">📄 Articles</option>
        <option value="Vocabulaire">📖 Vocabulaire</option>
      </select>
    </div>

    <div id="ressourcesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"></div>
  </div>
</section>

<section id="valorisation" class="bg-[#e8f5e9] py-16 px-4">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <span class="inline-block py-1 px-4 rounded-full bg-[#2c5e3b] text-white text-sm font-bold mb-4">
        <i class="fa-solid fa-chart-line mr-1"></i> Potentiel Multisectoriel
      </span>
      <h2 class="text-4xl md:text-5xl font-black text-[#1e4028] mb-4">Valorisation de la Phytothérapie</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#2c5e3b] card-hover">
        <div class="w-16 h-16 bg-[#e8f5e9] text-[#2c5e3b] rounded-2xl flex items-center justify-center text-3xl mb-6">
          <i class="fa-solid fa-heart-pulse"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Santé Médicale</h3>
        <p class="text-gray-600">Prévention et traitement naturel des affections chroniques.</p>
      </div>
      <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#c5a059] card-hover">
        <div class="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
          <i class="fa-solid fa-apple-whole"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Nutrition & Nutraceutiques</h3>
        <p class="text-gray-600">Superaliments pour renforcer l'immunité.</p>
      </div>
      <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 card-hover">
        <div class="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-6">
          <i class="fa-solid fa-brain"></i>
        </div>
        <h3 class="text-xl font-bold mb-3">Santé Mentale</h3>
        <p class="text-gray-600">Plantes adaptogènes pour le stress.</p>
      </div>
    </div>
  </div>
</section>

<section id="mission" class="bg-white py-16 px-4 border-t border-gray-200">
  <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
    <div>
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 bg-[#2c5e3b] text-white rounded-xl flex items-center justify-center text-xl">
          <i class="fa-solid fa-book-open"></i>
        </div>
        <h2 class="text-2xl font-bold text-gray-800">Histoire</h2>
      </div>
      <p class="text-gray-600 mb-4">Les plantes médicinales ont une histoire riche en Haïti, fusionnant les savoirs taïnos, africains et européens pour créer une pharmacopée unique.</p>
      <p class="text-gray-600">Aujourd'hui, plus de 80% des Haïtiens utilisent encore les plantes comme première ligne de défense pour leur santé.</p>
    </div>

    <div>
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 bg-[#2c5e3b] text-white rounded-xl flex items-center justify-center text-xl">
          <i class="fa-solid fa-bullseye"></i>
        </div>
        <h2 class="text-2xl font-bold text-gray-800">Notre Mission</h2>
      </div>
      <ul class="space-y-4">
        <li class="flex gap-3">
          <span class="font-bold text-[#2c5e3b] min-w-[100px]">Documenter :</span>
          <span class="text-gray-600">Cataloguer systématiquement la flore du Grand Sud.</span>
        </li>
        <li class="flex gap-3">
          <span class="font-bold text-[#2c5e3b] min-w-[100px]">Valider :</span>
          <span class="text-gray-600">Faire le pont entre les savoirs ancestraux et la science moderne.</span>
        </li>
        <li class="flex gap-3">
          <span class="font-bold text-[#2c5e3b] min-w-[100px]">Conserver :</span>
          <span class="text-gray-600">Promouvoir la protection des espèces menacées.</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="bg-red-50 py-16 px-4 border-y border-red-200">
  <div class="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border-l-8 border-red-600">
    <h2 class="text-2xl font-bold text-red-800 mb-6">Avertissement Légal et Sanitaire</h2>
    <ul class="space-y-4">
      <li class="flex items-start gap-3">
        <i class="fa-solid fa-circle-exclamation text-red-600 mt-1"></i>
        <span class="text-gray-700">Cet atlas n'est pas un manuel d'automédication.</span>
      </li>
      <li class="flex items-start gap-3">
        <i class="fa-solid fa-circle-exclamation text-red-600 mt-1"></i>
        <span class="text-gray-700">Une mauvaise identification d'une plante peut être fatale.</span>
      </li>
      <li class="flex items-start gap-3">
        <i class="fa-solid fa-circle-exclamation text-red-600 mt-1"></i>
        <span class="text-gray-700">Certaines espèces sont protégées par la loi.</span>
      </li>
      <li class="flex items-start gap-3">
        <i class="fa-solid fa-circle-exclamation text-red-600 mt-1"></i>
        <span class="text-gray-700">Consultez TOUJOURS un professionnel de la santé.</span>
      </li>
    </ul>
  </div>
</section>
