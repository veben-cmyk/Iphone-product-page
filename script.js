//on recupère toutes les petites images (thumbnails) et l'image principale
const thumbnails = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

//on ajoute un event listener à chaque thumbnail pour changer l'image principale et la couleur de fond du body
thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        mainImage.src = img.src;

        //on change la couleur de fond du body en fonction de la couleur associée à l'image
        document.body.style.backgroundColor = img.dataset.color;

        //l'effet de surbrillance sur l'image sélectionnée
        thumbnails.forEach(t => {
            t.classList.remove("ring-black");
            t.classList.add("ring-transparent");
        });
        
        //on ajoute la classe de surbrillance à l'image sélectionnée
        img.classList.add("ring-black");
        img.classList.remove("ring-transparent");
    });
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

//on recupère le bouton d'appel à l'action (CTA)
const ctaButton = document.getElementById("ctaButton");
const colorPicker = document.getElementById("colorPicker");

//on scroll vers lecolorPicker lorsque le bouton CTA est cliqué
// scrollIntoView() → permet de scroller vers un élément
ctaButton.addEventListener("click",()=>{
    colorPicker.scrollIntoView({behavior: "smooth", block: "center"});
});