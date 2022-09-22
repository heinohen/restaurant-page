import "./style.css";
import navbaro from "./navbar.js";
import frontti from "./frontpage.js";
import footteri from "./footer";
import menuhommat from "./menu.js";

var front = frontti();
var menu = menuhommat();

function generatePage(){

    document.body.appendChild(navbaro());
    document.body.appendChild(front);
    document.body.appendChild(footteri());
    
}

generatePage();




