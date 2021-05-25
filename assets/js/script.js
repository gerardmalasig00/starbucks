let hamburger = document.getElementById("hamburger");
let navMenuMobile = document.querySelector(".nav-menu-mobile");
let navLinks = document.querySelectorAll(".nav-menu-mobile .nav-links")

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open')
    navMenuMobile.classList.toggle('show')

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkIn .5s ease forwards ${(index / 9) + .3}s`
        }
    })
});