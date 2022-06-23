const menuFeatures = document.getElementById('menu-features');
const menuCompany = document.getElementById('menu-company');
const arrowFeatures = document.querySelector('.navBar__element--arrowFeatures');
const arrowCompany = document.querySelector('.navBar__element--arrowCompany');

const registerMenu = document.querySelector('.registerYLoginBar');
const navbar = document.querySelector('.navBar');
const nav = document.getElementsByTagName('nav') [0]; ;
const imgLogo = document.querySelector(".navBar--logo");

const imgAside = document.querySelector(".imgAside--img");


/* The above code is adding an event listener to the window. The event listener is listening for a
click event. When the click event is triggered, the function is executed. The function is looping
through the event path and checking the id of each element in the event path. If the id is equal to
the id of the dropdown menu, the menu is shown and the arrow is changed to an up arrow. If the id is
not equal to the id of the dropdown menu, the menu is hidden and the arrow is changed to a down
arrow. */
 window.addEventListener('click', function(e){
      labelDePrueba:  for(let i = 0; i < e.path.length; i++){
            const nodeId = e.path[i];
            console.log(menuCompany.classList.contains("showMenu"));
            if(nodeId.id === 'dropDown-company' && !menuCompany.classList.contains("showMenu")){
                
                menuCompany.classList.add('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-up.svg');
                menuFeatures.classList.remove('showMenu');
                arrowFeatures.setAttribute('src', 'images/icon-arrow-down.svg');
                //console.log("lo contiene");
                break labelDePrueba;
                
                
            }
            else 
            if(nodeId.id === 'dropDown-company' && menuCompany.classList.contains("showMenu")){
                menuCompany.classList.remove('showMenu');
                
            
            
                break labelDePrueba;
            }
            else
            if(nodeId.id === 'dropDown-features'){
                menuFeatures.classList.add('showMenu');
                arrowFeatures.setAttribute('src', 'images/icon-arrow-up.svg');
                menuCompany.classList.remove('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-down.svg');
                break;
            }else
            if(nodeId.id !== 'dropDown-company' || nodeId.id !== 'dropDown-features'){
                menuFeatures.classList.remove('showMenu');
                //menuCompany.classList.remove('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-down.svg');
                arrowFeatures.setAttribute('src', 'images/icon-arrow-down.svg');
               // console.log("entre al defeault");
            }
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

