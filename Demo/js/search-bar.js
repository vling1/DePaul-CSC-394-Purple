"use strict";

window.addEventListener('load', function () {
    // Search function
    var cardList = this.document.querySelectorAll(".card");
    this.document.getElementById("search-bar").addEventListener("input", () => {
        var searchString = this.document.getElementById("search-bar").value;

        searchString = searchString.toLowerCase();
        // Checking ever card
        cardList.forEach(card => {
            var cardTitle = card.querySelector("li").innerHTML;
            cardTitle = cardTitle.toLowerCase();
            // Comparing card titles to the search string
            if (cardTitle.includes(searchString) && cardTitle!="New Recipe")
                card.style.display = "flex";
            else
                card.style.display = "none";
        });
    });
})