


export default function footteri() {
    // create container
    var containerFooter = document.createElement('div');
    containerFooter.setAttribute('id', 'footer');
    
    //create p tag
    var pFooter = document.createElement('p');
    pFooter.textContent = "(c) heinohen 2022"
    containerFooter.appendChild(pFooter);

    return containerFooter;
}