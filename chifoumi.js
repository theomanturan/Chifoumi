let images = ["pierre", "feuille", "ciseau"];

let gauche = document.getElementById("gauche");
let droite = document.getElementById("droite");
let imageGauche = document.getElementById("image-gauche");
let imageDroite = document.getElementById("image-droite");
let resultatGauche = document.getElementById("resultat-gauche");
let resultatDroite = document.getElementById("resultat-droite");
let titre = document.getElementById("titre");
let rejouer = document.getElementById("boutonRejouer");
let imageParDefaut = `url("/images-pfc/depart.jpg")`;

function getRandomElement(images) {
    let randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

imageGauche.addEventListener("click", () => {
    let randomImage = getRandomElement(images);
    imageGauche.style.backgroundImage = `url("images-pfc/${randomImage}.jpg")`;
    resultatGauche.textContent = randomImage;
    resultatGauche.style.color = "black";
    imageGauche.style.pointerEvents = "none";
    verifierResultat();
})

imageDroite.addEventListener("click", () => {
    let randomImage = getRandomElement(images);
    imageDroite.style.backgroundImage = `url("images-pfc/${randomImage}.jpg")`;
    resultatDroite.textContent = randomImage;
    resultatDroite.style.color = "black";
    imageDroite.style.pointerEvents = "none";
    verifierResultat();
})

rejouer.addEventListener("click", () => {
    imageGauche.style.backgroundImage = imageParDefaut;
    imageDroite.style.backgroundImage = imageParDefaut;
    imageGauche.style.pointerEvents = "auto";
    imageDroite.style.pointerEvents = "auto";
    gauche.style.backgroundColor = "white";
    droite.style.backgroundColor = "white";
    resultatGauche.textContent = "";
    resultatDroite.textContent = "";
    titre.textContent = "CHIFOUMI";
})

function verifierResultat() {
    let bgGauche = imageGauche.style.backgroundImage;
    let bgDroite = imageDroite.style.backgroundImage;

    if (bgGauche === bgDroite) {
        titre.textContent = "Égalité";
        gauche.style.backgroundColor = "white";
        droite.style.backgroundColor = "white";
    }

    else if (bgGauche === `url("images-pfc/pierre.jpg")` && bgDroite === `url("images-pfc/ciseau.jpg")`) {
        setTimeout(() => {
            titre.textContent = "La pierre bat le ciseau";
            gauche.style.backgroundColor = "green";
            droite.style.backgroundColor = "red";
            resultatGauche.textContent = "Gagnant";
            resultatDroite.textContent = "Perdant";
        }, 1000);

    }
    else if (bgGauche === `url("images-pfc/ciseau.jpg")` && bgDroite === `url("images-pfc/pierre.jpg")`) {
        setTimeout(() => {
            titre.textContent = "La pierre bat le ciseau";
            gauche.style.backgroundColor = "red";
            droite.style.backgroundColor = "green";
            resultatGauche.textContent = "Perdant";
            resultatDroite.textContent = "Gagnant";
        }, 1000);
    }

    else if (bgGauche === `url("images-pfc/pierre.jpg")` && bgDroite === `url("images-pfc/feuille.jpg")`) {
        setTimeout(() => {
            titre.textContent = "La feuille bat la pierre";
            gauche.style.backgroundColor = "red";
            droite.style.backgroundColor = "green";
            resultatGauche.textContent = "Perdant";
            resultatDroite.textContent = "Gagnant";
        }, 1000);
    }
    else if (bgGauche === `url("images-pfc/feuille.jpg")` && bgDroite === `url("images-pfc/pierre.jpg")`) {
        setTimeout(() => {
            titre.textContent = "La feuille bat la pierre";
            gauche.style.backgroundColor = "green";
            droite.style.backgroundColor = "red";
            resultatGauche.textContent = "Gagnant";
            resultatDroite.textContent = "Perdant";
        }, 1000);
    }

    else if (bgGauche === `url("images-pfc/feuille.jpg")` && bgDroite === `url("images-pfc/ciseau.jpg")`) {
        setTimeout(() => {
            titre.textContent = "Le ciseau bat la feuille";
            gauche.style.backgroundColor = "red";
            droite.style.backgroundColor = "green";
            resultatGauche.textContent = "Perdant";
            resultatDroite.textContent = "Gagnant";
        }, 1000);
    }
    else if (bgGauche === `url("images-pfc/ciseau.jpg")` && bgDroite === `url("images-pfc/feuille.jpg")`) {
        setTimeout(() => {
            titre.textContent = "Le ciseau bat la feuille";
            gauche.style.backgroundColor = "green";
            droite.style.backgroundColor = "red";
            resultatGauche.textContent = "Gagnant";
            resultatDroite.textContent = "Perdant";
        }, 1000);
    }
}