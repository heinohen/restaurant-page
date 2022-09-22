


export default function frontti() {
    var frontContainer = document.createElement('div');
    frontContainer.setAttribute('id', 'maincontent');
    var headerFrontti = document.createElement('h2');
    headerFrontti.textContent = "{FrOnTpAgE placeholder}";
    frontContainer.appendChild(headerFrontti);
    return frontContainer;
}