"use strict";

var star1, star2, star3, star4, star5;

window.addEventListener('load', function () {
    // Finding star buttons
    star1 = this.document.getElementById("1star");
    star2 = this.document.getElementById("2star");
    star3 = this.document.getElementById("3star");
    star4 = this.document.getElementById("4star");
    star5 = this.document.getElementById("5star");
    // Changing star values
    star1.addEventListener("click", () => {
        star1.className = "btn btn-warning";
        star2.className = "btn btn-secondary";
        star3.className = "btn btn-secondary";
        star4.className = "btn btn-secondary";
        star5.className = "btn btn-secondary";
    });
    star2.addEventListener("click", () => {
        star1.className = "btn btn-warning";
        star2.className = "btn btn-warning";
        star3.className = "btn btn-secondary";
        star4.className = "btn btn-secondary";
        star5.className = "btn btn-secondary";
    });
    star3.addEventListener("click", () => {
        star1.className = "btn btn-warning";
        star2.className = "btn btn-warning";
        star3.className = "btn btn-warning";
        star4.className = "btn btn-secondary";
        star5.className = "btn btn-secondary";
    });
    star4.addEventListener("click", () => {
        star1.className = "btn btn-warning";
        star2.className = "btn btn-warning";
        star3.className = "btn btn-warning";
        star4.className = "btn btn-warning";
        star5.className = "btn btn-secondary";
    });
    star5.addEventListener("click", () => {
        star1.className = "btn btn-warning";
        star2.className = "btn btn-warning";
        star3.className = "btn btn-warning";
        star4.className = "btn btn-warning";
        star5.className = "btn btn-warning";
    });
})