const liens = document.querySelectorAll("#projets a");

liens.forEach(lien => {
    lien.addEventListener("mouseover", () => {
        lien.style.color = "green";
    });

    lien.addEventListener("mouseout", () => {
        lien.style.color = "black";
    });

    lien.addEventListener("click", () => {
        lien.style.color = "grey";
    });
});

const descriptions = {
    python: "J’utilise Python pour le data cleaning, l’analyse, l’automatisation et la manipulation de datasets.",
    powerbi: "Je crée des dashboards interactifs, des KPI, des rapports dynamiques et des visualisations avancées.",
    sql: "Je fais des requêtes, jointures, agrégations, vues, optimisation de tables et extraction de données.",
    excel: "J’utilise Excel pour les TCD, les formules avancées, le nettoyage rapide et la préparation de données."
};

const logos = document.querySelectorAll(".logo-tech");
const descBox = document.getElementById("tool-description");

logos.forEach(logo => {
    const tool = logo.dataset.tool;

    logo.addEventListener("mouseover", () => {
        descBox.textContent = descriptions[tool];
    });

    logo.addEventListener("mouseout", () => {
        descBox.textContent = "Survolez un outil pour voir ce que je fais avec.";
    });
});

const descriptionP1 = {
    cleaning: "Data cleaning : Etape de compréhension du dataset des colonnes des champs des valeurs etc, gestion des valeurs manquantes, correction des types, création de nouvelles colonnes, suppression des doublons.",
    visualisation: "Data visualisation : barplots et courbes avec Matplotlib/Pandas, ventes globales par genre, évolution des ventes par décennie, top 10 des plateformes, différences régionales par genre (NA / EU / JP).",
    kpi: "L’étude met en lumière la domination du genre Action, le pic des ventes dans les années 2000 et la position historique de la PS2 comme plateforme la plus vendue."
};

const logosP1 = document.querySelectorAll(".logo-techp1");
const descBoxP1 = document.getElementById("tool-description");

logosP1.forEach(logop1 => {
    const tool = logop1.dataset.tool;

    logop1.addEventListener("mouseover", () => {
        descBoxP1.textContent = descriptionP1[tool];
    });

    logop1.addEventListener("mouseout", () => {
        descBoxP1.textContent = "Survolez un outil pour voir les étapes qui ont été effectué ou cliquez sur un outil";
    });

    logop1.addEventListener("click", () => {
        const targetId = logop1.dataset.target;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });

});

const descriptionP2 = {
    cleaning2: "Data cleaning : compréhension du dataset (colonnes, champs, valeurs), gestion des valeurs manquantes, correction des types, suppression des doublons, création de nouvelles colonnes pour simplifier la structure et réduire le nombre de variables, vérification et traitement des valeurs aberrantes.",
    visualisation2: "Data visualisation : réalisation de 11 visualisations exploratoires avec Matplotlib, Pandas (.plot, .hist) et Seaborn. Les graphiques incluent barplots, histogrammes, courbes et répartitions permettant de répondre à des questions clés : distribution des accidents par heure, proportion par sexe, répartition par âge, influence de la luminosité, de la météo, du type de route et des zones géographiques. Après la création des visualisations, la base a été testée dans SQLite puis importée dans PostgreSQL (via Supabase) afin de vérifier la cohérence des données. Plusieurs requêtes SQL ont été exécutées pour analyser les tendances, valider les résultats observés et renforcer l’interprétation des visualisations.",
    insight2: "Insights : chaque visualisation a été accompagnée d’une analyse permettant d’interpréter les tendances observées. Les insights mettent en évidence plusieurs points clés : concentration des accidents aux heures de pointe, surreprésentation des hommes dans les accidents corporels, forte implication des jeunes conducteurs, influence de la luminosité et des conditions météo, ainsi que des différences marquées selon les types de routes. Ces observations permettent de mieux comprendre les facteurs de risque et d’orienter l’analyse globale du dataset.",
    manipdata2: "Manipulation de donnée : J’ai utilisé SQLite pour extraire les données et j’ai réalisé des requêtes SQL, simples et avancées, pour tester la base, vérifier qu’elle fonctionne correctement et analyser les informations grâce aux fonctions d’agrégat."
};
const logosP2 = document.querySelectorAll(".logo-techp2");
const descBoxP2 = document.getElementById("tool-description");

logosP2.forEach(logop2 => {
    const tool = logop2.dataset.tool;

    logop2.addEventListener("mouseover", () => {
        descBoxP2.textContent = descriptionP2[tool];
    });

    logop2.addEventListener("mouseout", () => {
        descBoxP2.textContent = "Survolez un outil pour voir les étapes qui ont été effectué ou cliquez sur un outil";
    });

    logop2.addEventListener("click", () => {
        const targetId = logop2.dataset.target;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });

});