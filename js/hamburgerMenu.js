const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBar = document.querySelector('.navBar');
const body = document.getElementsByTagName('body')[0];
let menuOpen = false;



hamburgerMenu.addEventListener('click', function(){

    if(!menuOpen){
        navBar.classList.add('showMenuCell');
        hamburgerMenu.setAttribute('src', 'images/icon-close-menu.svg');
        hamburgerMenu.classList.add("stablePosition");
        body.classList.add('modeDark');
        menuOpen = true;
    }else{
        navBar.classList.remove('showMenuCell');
        hamburgerMenu.setAttribute('src', 'images/icon-menu.svg');
        hamburgerMenu.classList.remove("stablePosition");
        body.classList.remove('modeDark');
        menuOpen = false;
    }

});