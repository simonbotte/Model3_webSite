let section = document.getElementsByClassName("section");
let nbSection = section.length;
for (var i = 0; i < nbSection; i++) {
    new Waypoint({
        element: section.item(i),
        handler: function() {
            let title = this.element.querySelector(".section__title");
            title.classList.add("section__title--visible");
        },
        offset: "25%"
    });
}
