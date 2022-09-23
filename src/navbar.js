import home1 from "./images/home.png";
import contact1 from "./images/contact.png";
import menu1 from "./images/menu.png";

    function navbaro() {
    
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
    const btnFront = document.createElement('button');
    btnFront.setAttribute('class', 'btn');
    btnFront.setAttribute('id','frontbutton');
    btnFront.appendChild(frontPageImg);
    btnFront.appendChild(frontpageP);
    frontLI.appendChild(btnFront);
    
        //menu
    const menuLI = document.createElement('li');
    menuLI.setAttribute('id','menulle');
    const menuImg = document.createElement('img');
    const menuP = document.createElement('p');
    menuP.textContent = "menu!";
    menuImg.src = menu1;
    menuImg.setAttribute('class','icon');
    const btnMenu = document.createElement('button');
    btnMenu.setAttribute('class', 'btn');
    btnMenu.setAttribute('id', 'menubutton');
    btnMenu.appendChild(menuImg);
    btnMenu.appendChild(menuP);
    menuLI.appendChild(btnMenu);
      

        //contacts
    const contactLI = document.createElement('li');
    const contactImg = document.createElement('img');
    const contactP = document.createElement('p');
    contactP.textContent = "contact us"
    contactImg.src = contact1;
    contactImg.setAttribute('class','icon');
    
    const btnContact = document.createElement('button');
    btnContact.setAttribute('class', 'btn');
    btnContact.setAttribute('id','contactbutton');
    btnContact.appendChild(contactImg);
    btnContact.appendChild(contactP);
    contactLI.appendChild(btnContact);

    //appends to list
    listNavBar.appendChild(frontLI);
    listNavBar.appendChild(menuLI);
    listNavBar.appendChild(contactLI);

    //finally append to block
    ulContainer.appendChild(listNavBar);
    
    console.log("hä?");
    return navBarBlock;
    
}

export default navbaro;
