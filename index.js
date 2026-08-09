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

