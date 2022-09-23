import "./style.css";
import navbaro from "./navbar.js";
import frontti from "./frontpage.js";
import footteri from "./footer";
import menuhommat from "./menu.js";
import contact from "./contact.js";

const element = document.createElement('div');
element.setAttribute('id','content');

document.body.appendChild(element);
function generatePage(){
    element.appendChild(navbaro());
    element.appendChild(frontti());
    element.appendChild(footteri());
    
}

generatePage();

document.getElementById('frontbutton').addEventListener("click", () =>
    element.childNodes[1].replaceWith(frontti()));

document.getElementById('menubutton').addEventListener("click",() =>
    element.childNodes[1].replaceWith(menuhommat()));

document.getElementById('contactbutton').addEventListener("click", () => 
    element.childNodes[1].replaceWith(contact()));





