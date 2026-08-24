//on recupère toutes les petites images (thumbnails) et l'image principale
const thumbnails = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

//on ajoute un event listener à chaque thumbnail pour changer l'image principale et la couleur de fond du body
thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        mainImage.src = img.src;

        //on change la couleur de fond du body en fonction de la couleur associée à l'image
        document.body.style.backgroundColor = img.dataset.color;
    })
});

//on recupère le bouton du menu mobile et le menu mobile
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

//on ajoute un event listener au bouton pour afficher ou cacher le menu mobile
menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    menuButton.textContent = mobileMenu.classList.contains("hidden")? "☰" : "x";
    
});