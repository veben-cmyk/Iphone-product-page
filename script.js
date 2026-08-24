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