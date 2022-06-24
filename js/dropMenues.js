const menuFeatures = document.getElementById('menu-features');
const menuCompany = document.getElementById('menu-company');
const arrowFeatures = document.querySelector('.navBar__element--arrowFeatures');
const arrowCompany = document.querySelector('.navBar__element--arrowCompany');

const registerMenu = document.querySelector('.registerYLoginBar');
const navbar = document.querySelector('.navBar');
const nav = document.getElementsByTagName('nav') [0]; ;
const imgLogo = document.querySelector(".navBar--logo");

const imgAside = document.querySelector(".imgAside--img");


/* The above code is adding an event listener to the window object. The event listener is listening for
a click event. When the click event is fired, the function is executed. The function is checking the
id of the element that was clicked. If the id is equal to dropDown-company, then the menuCompany
class is added to the element. If the id is equal to dropDown-features, then the menuFeatures class
is added to the element. If the id is not equal to dropDown-company or dropDown-features, then the
menuCompany and menuFeatures classes are removed from */
 window.addEventListener('click', function(e){

        const nodeId = e.path[2];

             if(nodeId.id === 'dropDown-company' && !menuCompany.classList.contains("showMenu")){
                menuCompany.classList.add('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-up.svg');
                menuFeatures.classList.remove('showMenu');
                arrowFeatures.setAttribute('src', 'images/icon-arrow-down.svg');
            }
            else 
            if(nodeId.id === 'dropDown-company' && menuCompany.classList.contains("showMenu")){
                menuCompany.classList.remove('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-down.svg');
                
            }
            else
            if(nodeId.id === 'dropDown-features' && !menuFeatures.classList.contains("showMenu")){
                menuFeatures.classList.add('showMenu');
                arrowFeatures.setAttribute('src', 'images/icon-arrow-up.svg');
                menuCompany.classList.remove('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-down.svg');
                
            }else 
            if(nodeId.id === 'dropDown-features' && menuFeatures.classList.contains("showMenu")){
                menuFeatures.classList.remove("showMenu");
                arrowFeatures.setAttribute('src', 'images/icon-arrow-down.svg');
               
            }
            else
            if(nodeId.id !== 'dropDown-company' || nodeId.id !== 'dropDown-features')
            {
                menuFeatures.classList.remove('showMenu');
                menuCompany.classList.remove('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-down.svg');
                arrowFeatures.setAttribute('src', 'images/icon-arrow-down.svg');
            }
    }   , true);


/* Checking the width of the window and if it is less than 900px it will append the registerMenu to the

navbar and change the image to the mobile version. If it is greater than 900px it will append the
registerMenu to the nav and change the image to the desktop version. */
window.addEventListener('resize', function(){
    if(window.innerWidth < 900){
       navbar.appendChild(registerMenu);
       imgAside.setAttribute("src", "images/image-hero-mobile.png");
    }else{
        nav.appendChild(registerMenu);
        imgAside.setAttribute("src", "images/image-hero-desktop.png");
    }
})

/* Checking the width of the window and if it is less than 900px it will append the registerMenu to the
navbar and change the image to the mobile version. If it is greater than 900px it will append the
registerMenu to the nav and change the image to the desktop version. */
if(window.innerWidth < 900){
    navbar.appendChild(registerMenu);
    imgAside.setAttribute("src", "images/image-hero-mobile.png");
}else{
    nav.appendChild(registerMenu);
    imgAside.setAttribute("src", "images/image-hero-desktop.png");
}

