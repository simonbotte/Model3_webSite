var waypoint = new Waypoint({
    element: document.getElementById("range"),
    handler: function(direction) {
        console.log("Scrolled to waypoint!");
    }
});
