const menuToggle = document.querySelector('#menu_toggle');
const mobileNavContainer = document.querySelector('#mobile_nav');


menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu_icon_active');
    mobileNavContainer.classList.toggle('mobile_nav_active');
}

