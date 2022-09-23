import gitCat from "./images/git.png";


export default function footteri() {
    // create container
    const containerFooter = document.createElement('div');
    containerFooter.setAttribute('id', 'footer');
    
    //create p tag
    const pFooter = document.createElement('p');
    pFooter.textContent = "(c) heinohen 2022"
    containerFooter.appendChild(pFooter);

    //create p for legal and support
    const legalFooter = document.createElement('div');
    legalFooter.setAttribute('id', 'legalfooter');
    const legalA = document.createElement('a');
    legalA.setAttribute('id', 'legalfooter');
    legalA.href = "https://unsplash.com/@stephaniemccabe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    legalA.textContent = "Background photo by Stephanie McCabe @ unsplash.com"

  

    //create a tag
    const aFooter = document.createElement('a');
    aFooter.href = "https://github.com/heinohen"
    const footerImg = document.createElement('img');
    footerImg.src = gitCat;
    aFooter.appendChild(footerImg);

    containerFooter.appendChild(aFooter);
    containerFooter.appendChild(legalA);
    return containerFooter;
}