import home1 from "./images/home.png";
import contact1 from "./images/contact.png";
import menu1 from "./images/menu.png";

export default function navbaro() {
    
    //declare variables for images
    const homeIcon = new Image();
    homeIcon.src = home1;
    const contactIcon = new Image();
    contactIcon.src = contact1;
    const menuIcon = new Image();
    menuIcon.src = menu1;

    //create block
    const navBarBlock = document.createElement('div');
    navBarBlock.setAttribute('id', 'navbar');

    //create placeholder text
    const headerNavBar = document.createElement('h1');
    headerNavBar.textContent = "{NAVBAR PLACEHOLDER}";
    navBarBlock.appendChild(headerNavBar)

    //create list from navigation items
    const listNavBar = document.createElement('ul');
    for (var i = 0; i < 3; i++) {
        var li = document.createElement('li');
        li.textContent = "list item";
        listNavBar.appendChild(li);       
    }

    navBarBlock.appendChild(listNavBar);
    
    console.log("hä?");
    return navBarBlock;
    
}




