const contact = () => {
    const navigation = document.createElement('i');
    const phone = document.createElement('i');
    const location = document.createElement('div');
    const contact = document.createElement('div');
    const container = document.createElement('div');
    const locationTitle = document.createElement('h1');
    const contactTitle = document.createElement('h1');
    const direction = document.createElement('p');
    const directionSecondParagraph = document.createElement('p');
    const contactInfo = document.createElement('p');
    const contactInfoSecondParagraph = document.createElement('p');
    

    location.classList.add('location');
    contact.classList.add('contact');
    container.classList.add('contact-container');

    navigation.classList.add('material-icons');
    navigation.innerHTML = 'navigation';

    phone.classList.add('material-icons');
    phone.innerHTML = 'phone';

    direction.append(`396 Single Street, Needham City, MA 02192`);
    directionSecondParagraph.append('Opening Hours: 12:00 PM - 11:00 PM');
    contactInfo.append(`email: theburgerplace@email.com`);
    contactInfoSecondParagraph.append('tel: 123-456-7890');
    
    locationTitle.appendChild(navigation);
    locationTitle.append('Location');
    contactTitle.appendChild(phone);
    contactTitle.append('Contact');

    location.appendChild(locationTitle);
    location.appendChild(direction);
    location.appendChild(directionSecondParagraph);

    contact.appendChild(contactTitle);
    contact.appendChild(contactInfo);
    contact.appendChild(contactInfoSecondParagraph);

    container.appendChild(location);
    container.appendChild(contact);

    return container;
}

export{contact}