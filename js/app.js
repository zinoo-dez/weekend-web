let bars = document.querySelector("#bars")
let navLinks = document.querySelector(".nav-links")

bars.addEventListener("click", () => {
    navLinks.classList.toggle("toggle")
    bars.classList.toggle("fa-times")
})
