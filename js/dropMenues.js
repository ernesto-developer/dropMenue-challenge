const menuFeatures = document.getElementById('menu-features');
const menuCompany = document.getElementById('menu-company');
const arrowFeatures = document.querySelector('.navBar__element--arrowFeatures');
const arrowCompany = document.querySelector('.navBar__element--arrowCompany');

const registerMenu = document.querySelector('.registerYLoginBar');
const navbar = document.querySelector('.navBar');
const nav = document.getElementsByTagName('nav') [0]; ;

 window.addEventListener('click', function(e){
        for(let i = 0; i < e.path.length; i++){
            const nodeId = e.path[i];
            if(nodeId.id === 'dropDown-company'){
                menuCompany.classList.add('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-up.svg');
                menuFeatures.classList.remove('showMenu');
                arrowFeatures.setAttribute('src', 'images/icon-arrow-down.svg');
                break;
            }else
            if(nodeId.id === 'dropDown-features'){
                menuFeatures.classList.add('showMenu');
                arrowFeatures.setAttribute('src', 'images/icon-arrow-up.svg');
                menuCompany.classList.remove('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-down.svg');
                break;
            }else
            if(nodeId.id !== 'dropDown-company' || nodeId.id !== 'dropDown-features'){
                menuFeatures.classList.remove('showMenu');
                menuCompany.classList.remove('showMenu');
                arrowCompany.setAttribute('src', 'images/icon-arrow-down.svg');
                arrowFeatures.setAttribute('src', 'images/icon-arrow-down.svg');
            }
        }
    }   , true);


window.addEventListener('resize', function(){
    if(window.innerWidth < 732){
       navbar.appendChild(registerMenu);
    }else{
        nav.appendChild(registerMenu);
    }
    
})

if(window.innerWidth < 732){
    navbar.appendChild(registerMenu);
}else{
    nav.appendChild(registerMenu);
}