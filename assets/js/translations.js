// ============================================================
// translations.js — Dictionnaire i18n FR / EN / HT
// Atlas PMAA — 271 Plantes du Grand Sud d'Haïti
// ============================================================

const i18n = {
    fr: {
        // Navigation
        nav_home:       "Accueil",
        nav_data:       "Base de données",
        nav_val:        "Valorisation",
        nav_cons:       "Conservation",
        nav_res:        "Ressources",

        // Hero
        hero_main:      "Les Plantes du Grand Sud au Service de la Vie",
        hero_tag:       "271 Plantes Documentées",
        hero_title:     "Atlas des Plantes du Grand Sud",
        hero_desc:      "Explorez la richesse de la flore médicinale, aromatique et nutritionnelle du Grand Sud.",
        btn_atlas:      "Explorer l'Atlas",
        btn_explore:    "Accéder à la Base de Données",

        // Statistiques
        stat_plantes:   "Plantes Documentées",
        stat_familles:  "Familles Botaniques",
        stat_systemes:  "Systèmes du Corps",
        stat_langues:   "Langues (FR · EN · HT)",

        // Avertissement
        warn_tag:       "⚠ AVERTISSEMENT",
        warn_desc:      "Cet atlas n'est pas un guide d'automédication. Consultez toujours un professionnel de santé avant toute utilisation.",

        // Qui sommes-nous
        about_title:    "Qu'est-ce que l'Atlas PMAA ?",
        about_p1:       "L'Atlas des Plantes Médicinales, Aromatiques et Alimentaires (PMAA) du Grand Sud d'Haïti est le fruit de plusieurs années de recherche ethnobotanique dans les départements du Sud et de la Grand'Anse.",
        about_p2:       "Ce projet documente 271 espèces végétales utilisées par les communautés locales, avec leurs propriétés pharmacologiques, leurs usages traditionnels et leurs enjeux de conservation.",
        about_badge1:   "Données scientifiques",
        about_badge2:   "Savoirs traditionnels",
        about_badge3:   "Trilingue FR/EN/HT",

        // Mission
        miss_1t:        "Documenter",
        miss_1d:        "Recenser et décrire scientifiquement la flore médicinale du Grand Sud d'Haïti.",
        miss_1d_short:  "271 espèces décrites scientifiquement",
        miss_2t:        "Conserver",
        miss_2d:        "Identifier les espèces menacées et proposer des stratégies de préservation.",
        miss_2d_short:  "Identifier et protéger les espèces menacées",
        miss_3t:        "Valoriser",
        miss_3d:        "Promouvoir l'utilisation durable des plantes pour la santé, l'économie et le bien-être.",
        miss_3d_short:  "Santé, économie et bien-être",
        miss_4t:        "Partager",
        miss_4d_short:  "Savoirs accessibles en 3 langues",

        // Explorer les plantes
        explore_title:  "Explorer les Plantes",
        explore_desc:   "Recherchez parmi 271 espèces documentées par nom, famille botanique, système du corps ou maladie traitée.",
        cat_med:        "Médicinales",
        cat_aro:        "Aromatiques",
        cat_ali:        "Alimentaires",
        cat_end:        "Endémiques",

        // Thématiques
        themes_title:       "Nos Thématiques",
        theme_val_title:    "Valorisation",
        theme_val_desc:     "Santé, aromathérapie, cosmétique, nutrition — découvrez comment transformer les plantes pour le bien-être et l'économie locale.",
        theme_cons_title:   "Conservation",
        theme_cons_desc:    "Statuts UICN, menaces, actions de protection — préserver la biodiversité unique du Grand Sud d'Haïti.",
        theme_res_title:    "Ressources",
        theme_res_desc:     "Bibliothèque numérique, publications scientifiques, références TRAMIL et outils pédagogiques.",

        // Héritages
        heritage_title:         "Trois Héritages Botaniques",
        heritage_desc:          "La flore du Grand Sud porte l'empreinte de trois traditions qui se sont enrichies mutuellement.",
        heritage_taino:         "Héritage Taïno",
        heritage_taino_desc:    "Les premiers habitants d'Hispaniola ont transmis une connaissance profonde des plantes tropicales, du Manioc au Tabac, du Mamey au Corossol.",
        heritage_african:       "Héritage Africain",
        heritage_african_desc:  "Les savoirs des Doktè Fey, héritiers des traditions africaines, forment le cœur vivant de la médecine traditionnelle haïtienne.",
        heritage_european:      "Héritage Européen",
        heritage_european_desc: "La pharmacopée coloniale a introduit de nombreuses espèces et méthodes qui se sont intégrées aux pratiques locales.",

        // CTA
        cta_title:      "Explorez l'Atlas dès maintenant",
        cta_desc:       "271 fiches botaniques détaillées, disponibles en français, anglais et créole haïtien.",

        // Atlas page
        search_ph:      "Rechercher une plante...",
        opt_fam:        "Toutes les familles",
        opt_sys:        "Tous les systèmes",
        opt_sys_ner:    "Nerveux",
        opt_sys_dig:    "Digestif",
        opt_sys_card:   "Cardiovasculaire",
        opt_sys_res:    "Respiratoire",
        opt_sys_imm:    "Immunitaire",
        opt_mal:        "Toutes les maladies",
        opt_mal_dia:    "Diabète",
        opt_mal_hyp:    "Hypertension",
        opt_mal_mal:    "Paludisme",
        opt_mal_inf:    "Infections",
        btn_reset:      "Réinitialiser",
        res_title:      "🌿 Plantes Médicinales",
        no_results:     "Aucun résultat trouvé",

        // Conservation
        cons_title:         "Protéger la Flore du Grand Sud",
        cons_subtitle:      "271 espèces documentées, dont des plantes endémiques menacées. La conservation est une priorité pour préserver ce patrimoine unique.",
        cons_status_title:  "Statuts de Conservation (UICN)",
        cons_cr:            "En danger critique",
        cons_en:            "En danger",
        cons_vu:            "Vulnérable",
        cons_nt:            "Quasi menacé",
        cons_lc:            "Préoccupation mineure",
        cons_threats_title: "Principales Menaces",
        cons_deforest:      "Déforestation",
        cons_deforest_desc: "La couverture forestière d'Haïti est passée de 60% à moins de 2%. L'agriculture sur brûlis et la production de charbon de bois détruisent les habitats naturels.",
        cons_overexploit:      "Surexploitation",
        cons_overexploit_desc: "La récolte excessive de plantes médicinales sans replantation menace la survie de nombreuses espèces.",
        cons_climate:          "Changement climatique",
        cons_climate_desc:     "Les événements météorologiques extrêmes et les modifications des régimes pluviométriques affectent directement les écosystèmes du Sud.",
        cons_actions_title:    "Actions de Conservation",
        cons_act1_title:    "Documentation scientifique",
        cons_act1_desc:     "L'Atlas PMAA documente 271 espèces avec leurs caractéristiques botaniques, écologiques et pharmacologiques.",
        cons_act2_title:    "Jardins botaniques",
        cons_act2_desc:     "Création et renforcement de jardins botaniques communautaires dans le Grand Sud pour la conservation ex-situ.",
        cons_act3_title:    "Éducation & sensibilisation",
        cons_act3_desc:     "Programmes éducatifs dans les écoles et communautés pour faire connaître l'importance des plantes endémiques.",
        cons_act4_title:    "Partenariats institutionnels",
        cons_act4_desc:     "Collaboration avec les ministères, universités et organisations internationales pour des politiques de protection intégrées.",
        cons_cta_title:     "Contribuez à la Conservation",
        cons_cta_desc:      "Explorez notre base de données pour découvrir les plantes menacées et leurs usages traditionnels."
    },

    en: {
        // Navigation
        nav_home:       "Home",
        nav_data:       "Database",
        nav_val:        "Valorization",
        nav_cons:       "Conservation",
        nav_res:        "Resources",

        // Hero
        hero_main:      "Southern Haiti's Plants in the Service of Life",
        hero_tag:       "271 Documented Plants",
        hero_title:     "Plant Atlas of Southern Haiti",
        hero_desc:      "Explore the richness of medicinal, aromatic and nutritional flora of the Grand Sud.",
        btn_atlas:      "Explore the Atlas",
        btn_explore:    "Access the Database",

        // Stats
        stat_plantes:   "Documented Plants",
        stat_familles:  "Botanical Families",
        stat_systemes:  "Body Systems",
        stat_langues:   "Languages (FR · EN · HT)",

        // Warning
        warn_tag:       "⚠ WARNING",
        warn_desc:      "This atlas is not a self-medication guide. Always consult a healthcare professional before any use.",

        // About
        about_title:    "What is the PMAA Atlas?",
        about_p1:       "The Atlas of Medicinal, Aromatic and Food Plants (PMAA) of Southern Haiti is the result of several years of ethnobotanical research in the South and Grand'Anse departments.",
        about_p2:       "This project documents 271 plant species used by local communities, with their pharmacological properties, traditional uses and conservation challenges.",
        about_badge1:   "Scientific data",
        about_badge2:   "Traditional knowledge",
        about_badge3:   "Trilingual FR/EN/HT",

        // Mission
        miss_1t:        "Document",
        miss_1d:        "Survey and scientifically describe the medicinal flora of Southern Haiti.",
        miss_1d_short:  "271 species scientifically described",
        miss_2t:        "Conserve",
        miss_2d:        "Identify threatened species and propose preservation strategies.",
        miss_2d_short:  "Identify and protect threatened species",
        miss_3t:        "Valorize",
        miss_3d:        "Promote the sustainable use of plants for health, economy and well-being.",
        miss_3d_short:  "Health, economy and well-being",
        miss_4t:        "Share",
        miss_4d_short:  "Knowledge accessible in 3 languages",

        // Explore plants
        explore_title:  "Explore the Plants",
        explore_desc:   "Search among 271 documented species by name, botanical family, body system or treated disease.",
        cat_med:        "Medicinal",
        cat_aro:        "Aromatic",
        cat_ali:        "Food Plants",
        cat_end:        "Endemic",

        // Themes
        themes_title:       "Our Themes",
        theme_val_title:    "Valorization",
        theme_val_desc:     "Health, aromatherapy, cosmetics, nutrition — discover how to transform plants for well-being and local economy.",
        theme_cons_title:   "Conservation",
        theme_cons_desc:    "IUCN status, threats, protection actions — preserving the unique biodiversity of Southern Haiti.",
        theme_res_title:    "Resources",
        theme_res_desc:     "Digital library, scientific publications, TRAMIL references and educational tools.",

        // Heritage
        heritage_title:         "Three Botanical Heritages",
        heritage_desc:          "The flora of Southern Haiti bears the imprint of three traditions that have mutually enriched each other.",
        heritage_taino:         "Taíno Heritage",
        heritage_taino_desc:    "The first inhabitants of Hispaniola passed down deep knowledge of tropical plants, from Cassava to Tobacco, from Mamey to Soursop.",
        heritage_african:       "African Heritage",
        heritage_african_desc:  "The knowledge of Doktè Fey, heirs to African traditions, forms the living heart of Haitian traditional medicine.",
        heritage_european:      "European Heritage",
        heritage_european_desc: "Colonial pharmacopoeia introduced many species and methods that became integrated with local practices.",

        // CTA
        cta_title:      "Explore the Atlas now",
        cta_desc:       "271 detailed botanical profiles, available in French, English and Haitian Creole.",

        // Atlas page
        search_ph:      "Search for a plant...",
        opt_fam:        "All families",
        opt_sys:        "All systems",
        opt_sys_ner:    "Nervous",
        opt_sys_dig:    "Digestive",
        opt_sys_card:   "Cardiovascular",
        opt_sys_res:    "Respiratory",
        opt_sys_imm:    "Immune",
        opt_mal:        "All diseases",
        opt_mal_dia:    "Diabetes",
        opt_mal_hyp:    "Hypertension",
        opt_mal_mal:    "Malaria",
        opt_mal_inf:    "Infections",
        btn_reset:      "Reset",
        res_title:      "🌿 Medicinal Plants",
        no_results:     "No results found",

        // Conservation
        cons_title:         "Protecting the Flora of Southern Haiti",
        cons_subtitle:      "271 species documented, including threatened endemic plants. Conservation is a priority to preserve this unique heritage.",
        cons_status_title:  "Conservation Status (IUCN)",
        cons_cr:            "Critically endangered",
        cons_en:            "Endangered",
        cons_vu:            "Vulnerable",
        cons_nt:            "Near threatened",
        cons_lc:            "Least concern",
        cons_threats_title: "Main Threats",
        cons_deforest:      "Deforestation",
        cons_deforest_desc: "Haiti's forest cover has dropped from 60% to less than 2%. Slash-and-burn agriculture and charcoal production destroy natural habitats.",
        cons_overexploit:      "Overexploitation",
        cons_overexploit_desc: "Excessive harvesting of medicinal plants without replanting threatens the survival of many species.",
        cons_climate:          "Climate change",
        cons_climate_desc:     "Extreme weather events and changes in rainfall patterns directly affect the ecosystems of the South.",
        cons_actions_title:    "Conservation Actions",
        cons_act1_title:    "Scientific documentation",
        cons_act1_desc:     "The PMAA Atlas documents 271 species with their botanical, ecological and pharmacological characteristics.",
        cons_act2_title:    "Botanical gardens",
        cons_act2_desc:     "Creation and strengthening of community botanical gardens in the Grand Sud for ex-situ conservation.",
        cons_act3_title:    "Education & awareness",
        cons_act3_desc:     "Educational programs in schools and communities to raise awareness of the importance of endemic plants.",
        cons_act4_title:    "Institutional partnerships",
        cons_act4_desc:     "Collaboration with ministries, universities and international organizations for integrated protection policies.",
        cons_cta_title:     "Contribute to Conservation",
        cons_cta_desc:      "Explore our database to discover threatened plants and their traditional uses."
    },

    ht: {
        // Navigasyon
        nav_home:       "Akèy",
        nav_data:       "Baz done",
        nav_val:        "Valorizasyon",
        nav_cons:       "Konsèvasyon",
        nav_res:        "Resous",

        // Hero
        hero_main:      "Plant Gran Sid yo nan Sèvis Lavi",
        hero_tag:       "271 Plant Dokimante",
        hero_title:     "Atla Plant Gran Sid Ayiti",
        hero_desc:      "Eksplore richès flò medisinale, aromatik ak nitritif Gran Sid la.",
        btn_atlas:      "Eksplore Atla a",
        btn_explore:    "Ale nan Baz Done a",

        // Estatistik
        stat_plantes:   "Plant Dokimante",
        stat_familles:  "Fanmi Botanik",
        stat_systemes:  "Sistèm Kò",
        stat_langues:   "Lang (FR · EN · HT)",

        // Avètisman
        warn_tag:       "⚠ AVÈTISMAN",
        warn_desc:      "Atla sa a pa yon gid pou pran medikaman pou kont ou. Toujou konsilte yon pwofesyonèl sante anvan ou itilize.",

        // Ki moun nou ye
        about_title:    "Kisa Atla PMAA a ye ?",
        about_p1:       "Atla Plant Medisinale, Aromatik ak Alimantè (PMAA) Gran Sid Ayiti se rezilta plizyè ane rechèch etnobotan nan depatman Sid ak Grandans.",
        about_p2:       "Pwojè sa a dokimante 271 espès plant ke kominote lokal yo itilize, ak pwopriyete famakolojik yo, itilizasyon tradisyonèl yo ak defi konsèvasyon yo.",
        about_badge1:   "Done syantifik",
        about_badge2:   "Konesans tradisyonèl",
        about_badge3:   "Trilenng FR/EN/HT",

        // Misyon
        miss_1t:        "Dokimante",
        miss_1d:        "Ranmase ak dekri syantifikman flò medisinale Gran Sid Ayiti.",
        miss_1d_short:  "271 espès dekri syantifikman",
        miss_2t:        "Konsève",
        miss_2d:        "Idantifye espès ki menase e pwopoze estrateji prezèvasyon.",
        miss_2d_short:  "Idantifye ak pwoteje espès ki menase",
        miss_3t:        "Valorize",
        miss_3d:        "Ankouraje itilizasyon dirab plant yo pou sante, ekonomi ak byennèt.",
        miss_3d_short:  "Sante, ekonomi ak byennèt",
        miss_4t:        "Pataje",
        miss_4d_short:  "Konesans aksesib nan 3 lang",

        // Eksplore plant
        explore_title:  "Eksplore Plant yo",
        explore_desc:   "Chèche pami 271 espès dokimante pa non, fanmi botanik, sistèm kò oswa maladi trete.",
        cat_med:        "Medisinale",
        cat_aro:        "Aromatik",
        cat_ali:        "Alimantè",
        cat_end:        "Endemik",

        // Tematik
        themes_title:       "Tematik Nou yo",
        theme_val_title:    "Valorizasyon",
        theme_val_desc:     "Sante, aromoterap, kosmetik, noutrisyon — dekouvri kijan pou transfòme plant pou byennèt ak ekonomi lokal.",
        theme_cons_title:   "Konsèvasyon",
        theme_cons_desc:    "Estati UICN, menas, aksyon pwoteksyon — prezève byodivèsite inik Gran Sid Ayiti.",
        theme_res_title:    "Resous",
        theme_res_desc:     "Biblyotèk nimerik, piblikasyon syantifik, referans TRAMIL ak zouti pedagojik.",

        // Eritaj
        heritage_title:         "Twa Eritaj Botanik",
        heritage_desc:          "Flò Gran Sid la pote anprènt twa tradisyon ki te anrichi youn ak lòt.",
        heritage_taino:         "Eritaj Tayno",
        heritage_taino_desc:    "Premye abitan Ispanyola yo te transmèt yon konesans pwofon plant tropikal yo, soti nan Manyòk rive nan Tabak, soti nan Mami rive nan Kowosòl.",
        heritage_african:       "Eritaj Afriken",
        heritage_african_desc:  "Konesans Doktè Fey yo, eritye tradisyon Afriken, fòme kè vivan medsin tradisyonèl ayisyen.",
        heritage_european:      "Eritaj Ewòp",
        heritage_european_desc: "Famakopeya kolonyal la te entrodwi anpil espès ak metòd ki entegre ak pratik lokal yo.",

        // CTA
        cta_title:      "Eksplore Atla a kounye a",
        cta_desc:       "271 fich botanik detaye, disponib an fransè, anglè ak kreyòl ayisyen.",

        // Paj Atlas
        search_ph:      "Chèche yon plant...",
        opt_fam:        "Tout fanmi",
        opt_sys:        "Tout sistèm",
        opt_sys_ner:    "Nève",
        opt_sys_dig:    "Dijestif",
        opt_sys_card:   "Kadyovaskilè",
        opt_sys_res:    "Respiratwa",
        opt_sys_imm:    "Iminitè",
        opt_mal:        "Tout maladi",
        opt_mal_dia:    "Dyabèt",
        opt_mal_hyp:    "Tansyon",
        opt_mal_mal:    "Malaria",
        opt_mal_inf:    "Enfeksyon",
        btn_reset:      "Reyinisyalize",
        res_title:      "🌿 Plant Medisinale",
        no_results:     "Pa gen rezilta",

        // Konsèvasyon
        cons_title:         "Pwoteje Flò Gran Sid la",
        cons_subtitle:      "271 espès dokimante, tankou plant endemik ki menase. Konsèvasyon se yon priyorite pou prezève eritaj inik sa a.",
        cons_status_title:  "Estati Konsèvasyon (UICN)",
        cons_cr:            "An danje kritik",
        cons_en:            "An danje",
        cons_vu:            "Vilnerab",
        cons_nt:            "Prèske menase",
        cons_lc:            "Preyokipasyon minimòm",
        cons_threats_title: "Menas Prensipal",
        cons_deforest:      "Debwazman",
        cons_deforest_desc: "Kouvèti forè Ayiti pase de 60% a mwens ke 2%. Agrikilti sou brili ak pwodiksyon chabon detri abita natirèl yo.",
        cons_overexploit:      "Sipèeksplwatasyon",
        cons_overexploit_desc: "Rekòt eksesif plant medisinale san replantasyon menase siviv anpil espès.",
        cons_climate:          "Chanjman klimatik",
        cons_climate_desc:     "Evènman metewolojik ekstrèm ak chanjman nan rejim lapli afekte dirèkteman ekosistèm Sid la.",
        cons_actions_title:    "Aksyon Konsèvasyon",
        cons_act1_title:    "Dokimantasyon syantifik",
        cons_act1_desc:     "Atla PMAA dokimante 271 espès ak karakteristik botanik, ekolojik ak famakolojik yo.",
        cons_act2_title:    "Jaden botanik",
        cons_act2_desc:     "Kreyasyon ak ranfòsman jaden botanik kominotè nan Gran Sid pou konsèvasyon ex-situ.",
        cons_act3_title:    "Edikasyon ak sansibilizasyon",
        cons_act3_desc:     "Pwogram edikasyon nan lekòl ak kominote pou fè konnen enpòtans plant endemik yo.",
        cons_act4_title:    "Patenarya enstitisyonèl",
        cons_act4_desc:     "Kolaborasyon ak ministè, inivèsite ak òganizasyon entènasyonal pou politik pwoteksyon entegre.",
        cons_cta_title:     "Kontribye nan Konsèvasyon",
        cons_cta_desc:      "Eksplore baz done nou an pou dekouvri plant ki menase ak itilizasyon tradisyonèl yo."
    }
};

// ---- Variable langue globale --------------------------------
window.currentLang = 'fr';

function applyTranslations(lang) {
    window.currentLang = lang;
    const texts = i18n[lang];
    if (!texts) return;

    // 1. Mettre à jour le texte des éléments data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key] !== undefined) {
            el.textContent = texts[key];
        }
    });

    // 2. Mettre à jour les placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (texts[key] !== undefined) {
            el.placeholder = texts[key];
        }
    });

    // 3. Style du bouton de langue actif (desktop)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('bg-[#c5a059]', 'text-[#1e4028]');
            btn.classList.remove('hover:bg-[#c5a059]/20');
        } else {
            btn.classList.remove('bg-[#c5a059]', 'text-[#1e4028]');
            btn.classList.add('hover:bg-[#c5a059]/20');
        }
    });

    // 4. Synchroniser le select mobile
    const mobileSelect = document.getElementById('mobileLang');
    if (mobileSelect) mobileSelect.value = lang;

    // 5. Rafraîchir la grille avec la nouvelle langue si elle existe
    if (document.getElementById('resultatsGrid') && typeof plantesData !== 'undefined') {
        if (typeof applyFilters === 'function') {
            applyFilters();
        } else if (typeof renderPlantes === 'function') {
            renderPlantes(plantesData);
        }
    }
}

// Appliquer la langue par défaut au chargement
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(window.currentLang);
});
