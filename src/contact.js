

export default function contact() {
    //container
    var contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'maincontent');
    //header
    var headerContact = document.createElement('h2');
    headerContact.textContent = "{CoNtAcT placeholder}";
    contactContainer.appendChild(headerContact);
    //content
    var contentContact = document.createElement('div');
    contentContact.textContent = "MAP TO MORDOR";
    contactContainer.appendChild(contentContact);
    contentContact.setAttribute('class','textbox');




    return contactContainer;
}