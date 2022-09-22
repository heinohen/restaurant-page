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
    

    //create header text
    const headerNavBar = document.createElement('h1');
    headerNavBar.textContent = "{NAVBAR PLACEHOLDER}";
    navBarBlock.appendChild(headerNavBar)

    //create list from navigation items
    const ulContainer = document.createElement('div');
    ulContainer.setAttribute('id', 'ul-container');
    navBarBlock.appendChild(ulContainer);

    const listNavBar = document.createElement('ul');
        
    
    //frontpage
    const frontLI = document.createElement('li');
    const frontPageImg = document.createElement('img');
    const frontpageP = document.createElement('p');
    frontpageP.textContent = "Frontpage"
    frontPageImg.setAttribute('class','icon');
    frontPageImg.src = home1;
    frontLI.appendChild(frontPageImg);
    frontLI.appendChild(frontpageP);
    
        //menu
    const menuLI = document.createElement('li');
    menuLI.setAttribute('id','menulle');
    const menuImg = document.createElement('img');
    const menuP = document.createElement('p');
    menuP.textContent = "menu!";
    menuImg.src = menu1;
    menuImg.setAttribute('class','icon');
    menuLI.appendChild(menuImg);
    menuLI.appendChild(menuP);
      

        //contacts
    const contactLI = document.createElement('li');
    const contactImg = document.createElement('img');
    const contactP = document.createElement('p');
    contactP.textContent = "contact us"
    contactImg.src = contact1;
    contactImg.setAttribute('class','icon');
    contactLI.appendChild(contactImg);
    contactLI.appendChild(contactP);
   

    //appends to list
    listNavBar.appendChild(frontLI);
    listNavBar.appendChild(menuLI);
    listNavBar.appendChild(contactLI);

    //finally append to block
    ulContainer.appendChild(listNavBar);
    
    console.log("hä?");
    return navBarBlock;
    
}




