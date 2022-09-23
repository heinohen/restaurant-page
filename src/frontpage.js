


export default function frontti() {
    var frontContainer = document.createElement('div');
    frontContainer.setAttribute('id', 'maincontent');
    var headerFrontti = document.createElement('h2');
    headerFrontti.textContent = "{FrOnTpAgE placeholder}";
    var frontPage1 = document.createElement('div');
    var frontPage2 = document.createElement('div');

    frontPage1.textContent = "Curabitur a efficitur augue. Duis luctus, libero eget tincidunt elementum, odio ligula ullamcorper turpis, in tempor dui lacus eget ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas arcu eros, vestibulum vitae interdum ac, accumsan vitae sem. Aliquam eu turpis urna. Phasellus venenatis facilisis nibh, a efficitur enim. Sed quam nibh, ullamcorper sit amet tempus a, tincidunt in felis. Vestibulum feugiat commodo ligula, ut molestie felis posuere ut. Donec vulputate felis et consectetur scelerisque. Proin et eros dolor. Maecenas quam tortor, eleifend sed convallis at, gravida ut neque. Mauris pellentesque quam sed quam faucibus commodo."
    frontPage2.textContent = "awefawefawef";

    frontPage1.setAttribute('class', 'textbox');
    frontPage2.setAttribute('class', 'textbox');
    
    frontContainer.appendChild(headerFrontti);
    frontContainer.appendChild(frontPage1);
    frontContainer.appendChild(frontPage2);
    return frontContainer;
}