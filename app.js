const menuItems=Array.from(document.querySelectorAll('.menu-item'));

let index =0;
 
menuItems.forEach(item=>{
    item.addEventListener('click', function(){

        // on retire la classe active-anime de l'endroit où elle se trouve
        menuItems[index].classList.remove('active-anime');
        index=menuItems.indexOf(this);

        // on ajoute la classe active-anime sur l'élément cliqué
        menuItems[index].classList.add('active-anime');


    })
})