import gitCat from "./images/git.png";


export default function footteri() {
    // create container
    const containerFooter = document.createElement('div');
    containerFooter.setAttribute('id', 'footer');
    
    //create p tag
    const pFooter = document.createElement('p');
    pFooter.textContent = "(c) heinohen 2022"
    containerFooter.appendChild(pFooter);

    //create a tag
    const aFooter = document.createElement('a');
    aFooter.href = "https://github.com/heinohen"
    const footerImg = document.createElement('img');
    footerImg.src = gitCat;
    aFooter.appendChild(footerImg);

    containerFooter.appendChild(aFooter);
    return containerFooter;
}