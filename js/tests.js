
function nodeSelect(node){
    console.log(node);
}

const companyNode = document.getElementById('dropDown-company');

// companyNode.addEventListener('click', function(e){

//     for (let i = 0; i < e.path.length; i++) {
//         const nodeId = e.path[i];
//         if(nodeId.id === 'dropDown-company'){
//             nodeSelect(nodeId);
//             console.log(`se encontro el nodo ${nodeId.id}`);
//         }
//     }
//     // console.log(e.path);
// });

// window.addEventListener('click', function(e){
//     console.log(e.path);
//     for(let i = 0; i < e.path.length; i++){
//         const nodeId = e.path[i];
//         if(nodeId.id === 'dropDown-company'){
//             // nodeSelect(nodeId);
//             console.log(`se encontro el nodo ${nodeId.id}`);
//         }
//     }
// }   , true);