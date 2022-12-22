let mobileMenuBtn = document.querySelector(".menu-btn"),
    mobileOpenBtn = document.getElementById("open-btn"),
    mobileCloseBtn = document.getElementById("close-btn"),
    nav = document.querySelector("nav"),
    body = document.querySelector("body"),
    main = document.querySelector("main"),
    footer = document.querySelector("footer"),
    mobileMenuPage = document.querySelector(".mobile-menu");



mobileMenuBtn.addEventListener("click", function(){
    mobileOpenBtn.classList.toggle("hide");
    mobileCloseBtn.classList.toggle("show");
    nav.classList.toggle("header");
    body.classList.toggle("body-mobile");
    main.classList.toggle("hide");
    footer.classList.toggle("hide");
    mobileMenuPage.classList.toggle("show");
});