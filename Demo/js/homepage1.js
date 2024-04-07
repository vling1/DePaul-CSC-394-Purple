"use strict";

window.addEventListener('load', function () {
    // Add recipe
    this.document.getElementById("new-recipe").addEventListener("click", () => {
        var card = this.document.getElementById("new-recipe-card");
        if (card.style.display == "none") {
            card.style.display = "flex"; 
            card.style.visibility = "visible"; 
        }    
        else {
            card.style.display = "none";
            card.style.visibility = "hidden";
        }
    })
})