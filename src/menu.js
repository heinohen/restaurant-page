

function menuhommat() {
    var menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'maincontent');
    var headerMenu = document.createElement('h2');
    headerMenu.textContent = "{MeNu placeholder}";
    menuContainer.appendChild(headerMenu);
   
   return menuContainer;

}

export default menuhommat;