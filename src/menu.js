import fish from "./images/foodIcons/fish.png";
import pizza from "./images/foodIcons/pizza.png";
import drumstick from "./images/foodIcons/drumstick.png";
import taco from "./images/foodIcons/taco.png";




function menuhommat() {
    var menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'maincontent');
    var headerMenu = document.createElement('h2');
    headerMenu.textContent = "{MeNu placeholder}";
    menuContainer.appendChild(headerMenu);

    const gridMenu = document.createElement('grid');
    gridMenu.setAttribute('id', 'gridMenu');


    gridMenu.appendChild(
        createMenuItem(
            "dRuMsTiCk",
            "Delicious drumstick. Made 90% of chicken."
        )
    )
    gridMenu.appendChild(
        createMenuItem(
            "fIsH",
            "Fish."
        )
    )
    gridMenu.appendChild(
        createMenuItem(
            "pIzZa",
            "of your choice."
        )
    )
    gridMenu.appendChild(
        createMenuItem(
            "tAcO",
            "Delicious drumstick. Made 90% of chicken"
        )
    )
   
    menuContainer.appendChild(gridMenu);
    return menuContainer;

}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.setAttribute('class','menu-item');
    const menuImg = document.createElement('img');
    const nimi = name.toToLowercase;
    switch(nimi) {
        case 'drumstick':
            menuImg.src = drumstick();
            break;
        case 'taco':
            menuImg.src = taco();
            break;
        case "fish":
            menuImg.src = fish();
            break;
        case "pizza":
            menuImg.src = pizza();
            break;
        default:
            
    }
    const menuText = document.createElement('p');
    menuText.textContent = description;
    menuItem.appendChild(menuImg);
    menuItem.appendChild(menuText);
        
    return menuItem;
  }


export default menuhommat;