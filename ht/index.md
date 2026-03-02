---
layout: default
title: Atla Plant Gran Sid Ayiti
lang: ht
---

<section id="akèy"></section>

<section class="bg-gradient-to-r from-red-700 to-red-500 text-white py-6 px-4">
  <div class="max-w-6xl mx-auto flex items-center justify-center gap-4 flex-wrap">
    <div class="bg-white/20 p-3 rounded-full">
      <i class="fa-solid fa-triangle-exclamation text-2xl"></i>
    </div>
    <p class="text-lg font-bold text-center">
      ⚠️ AVÈTISMAN : Atlas sa a se pa yon gid pou oto-medikaman. Konsilte yon pwofesyonèl sante.
    </p>
  </div>
</section>

<section class="bg-[#2c5e3b] text-white py-8">
  <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
    <div class="bg-white/10 p-4 rounded-xl">
      <div class="text-3xl font-black">90+</div>
      <div class="text-sm uppercase tracking-wider opacity-90">Plant dokimante</div>
    </div>
    <div class="bg-white/10 p-4 rounded-xl">
      <div class="text-3xl font-black">25+</div>
      <div class="text-sm uppercase tracking-wider opacity-90">Fanmi botanik</div>
    </div>
    <div class="bg-white/10 p-4 rounded-xl">
      <div class="text-3xl font-black">12</div>
      <div class="text-sm uppercase tracking-wider opacity-90">Sistèm kò</div>
    </div>
    <div class="bg-white/10 p-4 rounded-xl">
      <div class="text-3xl font-black">80%</div>
      <div class="text-sm uppercase tracking-wider opacity-90">Itilizasyon tradisyonèl</div>
    </div>
  </div>
</section>

<section id="data-hub" class="bg-[#e8f5e9] py-16 px-4 border-b border-gray-200">
  <div class="max-w-6xl mx-auto text-center">
    <span class="inline-block py-1 px-4 rounded-full bg-[#2c5e3b] text-white text-sm font-bold mb-6 tracking-wide">
      <i class="fa-solid fa-leaf mr-1"></i> 90+ Plant dokimante
    </span>
    <h2 class="text-4xl md:text-5xl font-black text-[#1e4028] mb-4">Atla Plant Gran Sid</h2>
    <p class="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
      Eksplore richès plant medsin, aromatik ak nitrisyonèl ki nan depatman Sid ak Grandans.
    </p>

    <div class="bg-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4 items-center border border-gray-100">
      <div class="relative w-full md:w-1/4">
        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input type="text" id="searchInput"
               class="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2c5e3b] focus:border-[#2c5e3b] outline-none transition"
               placeholder="🔍 Ruellia, Pèpèt, Moringa..." />
      </div>

      <select id="filterFamille" class="w-full md:w-1/5 py-3 px-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2c5e3b] focus:border-[#2c5e3b] outline-none bg-white">
        <option value="">Tout fanmi</option>
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
        <option value="">Tout sistèm</option>
        <option value="Nerveux">Nève</option>
        <option value="Digestif">Dijestif</option>
        <option value="Cardiovasculaire">Kadyovaskilè</option>
        <option value="Respiratoire">Respiratwa</option>
        <option value="Immunitaire">Iminitè</option>
      </select>

      <select id="filterMaladie" class="w-full md:w-1/5 py-3 px-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2c5e3b] focus:border-[#2c5e3b] outline-none bg-white">
        <option value="">Tout maladi</option>
        <option value="Diabète">Dyabèt</option>
        <option value="Hypertension">Tansyon wo</option>
        <option value="Paludisme">Malarya</option>
        <option value="Infections">Enfeksyon</option>
      </select>

      <button onclick="resetFilters()"
              class="w-full md:w-auto px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition flex items-center justify-center gap-2">
        <i class="fa-solid fa-rotate-right"></i> Reyinisyalize
      </button>
    </div>
  </div>
</section>

<section class="py-12 px-4 max-w-7xl mx-auto">
  <div class="flex justify-between items-center mb-6">
    <h3 class="text-2xl font-bold text-gray-800">🌿 Plant medsin</h3>
    <span id="resultCount" class="bg-[#e8f5e9] border border-[#2c5e3b] text-[#2c5e3b] px-4 py-2 rounded-full text-sm font-bold">0</span>
  </div>
  <div id="resultatsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]"></div>
</section>

<section id="resources-hub" class="bg-gray-100 py-16 px-4 border-t border-gray-200">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <span class="inline-block py-1 px-4 rounded-full bg-[#c5a059] text-[#1e4028] text-sm font-bold mb-4">
        <i class="fa-solid fa-book-open-reader mr-1"></i> Bibliyotèk dijital
      </span>
      <h2 class="text-4xl md:text-5xl font-black text-[#1e4028] mb-4">Baz Done Resous</h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Gade koleksyon atik syantifik nou yo, liv espesyalize ak vokabilè botanik.
      </p>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-4 items-center max-w-4xl mx-auto">
      <div class="relative w-full md:w-2/3">
        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input type="text" id="searchResInput"
               class="block w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c5a059] focus:border-[#c5a059] outline-none"
               placeholder="Chèche yon resous..." />
      </div>
      <select id="filterResType" class="w-full md:w-1/3 py-3 px-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c5a059] focus:border-[#c5a059] outline-none bg-white">
        <option value="">Tout tip</option>
        <option value="Livre">📚 Liv</option>
        <option value="Article">📄 Atik</option>
        <option value="Vocabulaire">📖 Vokabilè</option>
      </select>
    </div>

    <div id="ressourcesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"></div>
  </div>
</section>

<section id="misyon" class="bg-white py-16 px-4 border-t border-gray-200">
  <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
    <div>
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 bg-[#2c5e3b] text-white rounded-xl flex items-center justify-center text-xl">
          <i class="fa-solid fa-book-open"></i>
        </div>
        <h2 class="text-2xl font-bold text-gray-800">Istwa</h2>
      </div>
      <p class="text-gray-600 mb-4">
        Plant medsin yo gen yon istwa rich ann Ayiti, ki melanje konesans Tayino, Afriken ak Ewopeyen pou kreye yon famakopè inik.
      </p>
      <p class="text-gray-600">
        Jodi a, plis pase 80% Ayisyen toujou itilize plant kòm premye mwayen pou pwoteje sante yo.
      </p>
    </div>

    <div>
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 bg-[#2c5e3b] text-white rounded-xl flex items-center justify-center text-xl">
          <i class="fa-solid fa-bullseye"></i>
        </div>
        <h2 class="text-2xl font-bold text-gray-800">Misyon Nou</h2>
      </div>
      <ul class="space-y-4">
        <li class="flex gap-3">
          <span class="font-bold text-[#2c5e3b] min-w-[110px]">Dokimante :</span>
          <span class="text-gray-600">Fè lis plant ki nan Gran Sid la, ak done serye sou yo.</span>
        </li>
        <li class="flex gap-3">
          <span class="font-bold text-[#2c5e3b] min-w-[110px]">Valide :</span>
          <span class="text-gray-600">Konekte konesans zansèt yo ak syans modèn.</span>
        </li>
        <li class="flex gap-3">
          <span class="font-bold text-[#2c5e3b] min-w-[110px]">Konsève :</span>
          <span class="text-gray-600">Ankouraje pwoteksyon espès ki an danje.</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="bg-red-50 py-16 px-4 border-y border-red-200">
  <div class="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border-l-8 border-red-600">
    <h2 class="text-2xl font-bold text-red-800 mb-6">Avètisman Lalwa ak Sante</h2>
    <ul class="space-y-4">
      <li class="flex items-start gap-3">
        <i class="fa-solid fa-circle-exclamation text-red-600 mt-1"></i>
        <span class="text-gray-700">Atlas sa a pa yon manyèl pou trete tèt ou.</span>
      </li>
      <li class="flex items-start gap-3">
        <i class="fa-solid fa-circle-exclamation text-red-600 mt-1"></i>
        <span class="text-gray-700">Si w mal idantifye yon plant, sa ka mete lavi w an danje.</span>
      </li>
      <li class="flex items-start gap-3">
        <i class="fa-solid fa-circle-exclamation text-red-600 mt-1"></i>
        <span class="text-gray-700">Gen kèk espès lalwa pwoteje.</span>
      </li>
      <li class="flex items-start gap-3">
        <i class="fa-solid fa-circle-exclamation text-red-600 mt-1"></i>
        <span class="text-gray-700">TOUJOU konsilte yon pwofesyonèl lasante.</span>
      </li>
    </ul>
  </div>
</section>
