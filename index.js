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
        descBoxP1.textContent = "Survolez un outil pour voir les étapes qui ont été effectué";
    });
});
