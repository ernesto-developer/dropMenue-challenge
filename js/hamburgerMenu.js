const hamburgerMenu = document.querySelector('.hamburgerMenu');
const navBar = document.querySelector('.navBar');
const body = document.getElementsByTagName('body')[0];
let menuOpen = false;



hamburgerMenu.addEventListener('click', function(){

    if(!menuOpen){
        navBar.classList.add('showMenuCell');
        hamburgerMenu.setAttribute('src', 'images/icon-close-menu.svg');
        body.classList.add('modeDark');
        menuOpen = true;
    }else{
        navBar.classList.remove('showMenuCell');
        hamburgerMenu.setAttribute('src', 'images/icon-menu.svg');
        body.classList.remove('modeDark');
        menuOpen = false;
    }

});