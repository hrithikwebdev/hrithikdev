const mobile_nav = document.querySelector('.mobile-navbar-btn');
const top_navbar = document.querySelector('.top-navbar');

const openNavbar = () => {
    top_navbar.classList.toggle("active");
}

mobile_nav.addEventListener('click', () => openNavbar())