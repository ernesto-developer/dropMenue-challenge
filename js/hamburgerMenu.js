const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBar = document.querySelector('.navBar');
const screenSahdow = document.querySelector(".screenShadow");
let menuOpen = false;



hamburgerMenu.addEventListener('click', function(){

    if(!menuOpen){
        navBar.classList.add('showMenuCell');
        hamburgerMenu.setAttribute('src', 'images/icon-close-menu.svg');
        hamburgerMenu.classList.add("stablePosition");
        screenSahdow.classList.add('modeDark');
        menuOpen = true;
    }else{
        navBar.classList.remove('showMenuCell');
        hamburgerMenu.setAttribute('src', 'images/icon-menu.svg');
        hamburgerMenu.classList.remove("stablePosition");
        screenSahdow.classList.remove('modeDark');
        menuOpen = false;
    }

});