const navbarToggler = document.querySelector(".navbar-toggler");
const collapseNavbar = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function(){
    collapseNavbar.classList.toggle("show");
});