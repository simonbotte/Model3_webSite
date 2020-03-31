// recuperation des categories et de leur nombre
let category = document.getElementsByClassName("categories__category");
let nbCategory = category.length;

//recuperation des boutons et de leur nombre
let specButton = document.getElementsByClassName("spec__button");
let nbSpecButton = specButton.length;

for (var i = 0; i < nbSpecButton; i++) {
    //lors d'un clic sur un bouton
    specButton[i].addEventListener("click", function() {
        let specButton = this;
        let newCategoryName = this.innerHTML;
        for (var j = 0; j < nbCategory; j++) {
            //si un categorie a plus d'une classe, alors, c'est celle qui est affiché
            if (category[j].classList.length > 1) {
                var actualCategory = category[j];
            }
            //si le titre de la catagorie est ce qui est sur le
            //bouton sur lequel on a clic, alors, c'est la categorie à afficher
            if (category[j].children[0].innerHTML == newCategoryName) {
                var newCategory = category[j];
            }
        }

        let actualCategoryName = actualCategory.children[0].innerHTML;
        specButton.innerHTML = actualCategoryName;

        actualCategory.classList.remove("categories__category--show");
        newCategory.classList.add("categories__category--show");
    });
}
