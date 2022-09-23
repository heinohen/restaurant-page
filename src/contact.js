

export default function contact() {
    var contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'maincontent');
    var headerContact = document.createElement('h2');
    headerContact.textContent = "{CoNtAcT placeholder}";
    contactContainer.appendChild(headerContact);
    return contactContainer;
}