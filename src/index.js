
const menu = ()=>{
    let conatiner = document.createElement('div');
    let home = document.createElement('button');
    let menu = document.createElement('button');
    let contact = document.createElement('button');
    conatiner.classList.add('menu');
    home.classList.add('menu-button1');
    menu.classList.add('menu-button2');
    contact.classList.add('menu-button3');
    
    home.id = 'home';
    menu.id = 'menu';
    contact.id = 'contact';

    home.innerHTML = 'Home';
    menu.innerText = 'Menu';
    contact.innerText = 'Contact';

    
    conatiner.appendChild(home);
    conatiner.appendChild(menu);
    conatiner.appendChild(contact);

    return conatiner;

}
const home = ()=>{
    let lorem = document.createElement('p');
    lorem.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et congue velit. Aenean nec viverra elit. Donec vitae mi pulvinar, lacinia nulla sed, eleifend felis. In sagittis tortor non dui venenatis eleifend. Cras placerat, libero nec dignissim euismod, est mi convallis erat, non congue justo leo eget dui. Proin congue quam vitae tristique fringilla. Donec sit amet cursus sapien. Curabitur ut dictum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut vitae quam dui. Integer ac mi tincidunt elit lobortis varius. Ut varius iaculis mi sit amet posuere. Proin sit amet sem lacus. Integer posuere, magna vel convallis laoreet, nunc velit volutpat enim, ut lacinia nunc libero vitae velit. Etiam aliquet libero sit amet purus luctus egestas.

    Fusce venenatis nisi vitae erat mollis, a facilisis orci vulputate. Nam lectus felis, ornare consectetur nisi et, convallis bibendum leo. Vestibulum et posuere enim. Phasellus facilisis eros arcu, vitae suscipit magna semper nec. Donec ornare placerat mattis. Proin eget ultricies risus. Nam libero mi, venenatis commodo vehicula euismod, tristique ac odio. Maecenas felis lorem, tempor fringilla feugiat eu, faucibus et nunc. Vestibulum dignissim sem quis lectus rutrum bibendum. Praesent turpis ex, feugiat vitae aliquam hendrerit, viverra at tellus. Quisque lacinia dictum quam nec pretium.
    
    Vestibulum quis orci et velit viverra malesuada in at justo. Integer pharetra tempor mauris in mattis. Vivamus ornare magna quis turpis varius hendrerit. Vestibulum dui magna, gravida eget iaculis ultricies, congue sed mi. Praesent dictum euismod metus, ac feugiat mauris. Aliquam pharetra est ipsum, in semper magna porttitor nec. Nulla ac magna vel lorem aliquam suscipit. Donec quis dolor eu ante sollicitudin fermentum. Fusce varius vulputate justo, non ornare ligula scelerisque nec.`
    return lorem;
}
const food = ()=>{
    const container = document.createElement('div');
    const foodPreview = document.createElement('img');
    const foodContainer = document.createElement('div');
    const foodNameContainer = document.createElement('div');
    const foodName = document.createElement('h1');
    const foodDescription = document.createElement('p');
    

    container.classList.add('food');
    foodPreview.classList.add('food-image');
    foodContainer.classList.add('food-view');
    foodName.classList.add('food-name');
    foodDescription.classList.add('food-description');
    foodNameContainer.classList.add('food-name-container');

    foodPreview.src = 'https://www.thelocal.de/userdata/images/1542281122_110147217.jpg';
    foodPreview.width = 300;
    foodName.innerText = 'Food Name';
    foodDescription.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum enim ut dolor aliquet fermentum. Nam eget maximus diam. Curabitur et consectetur justo. Nunc convallis nibh ac nulla euismod, quis molestie ligula sollicitudin. Donec scelerisque dapibus justo quis auctor. Duis scelerisque aliquam consequat. Phasellus lobortis nulla sit amet mauris tristique rutrum.`
    
    foodContainer.appendChild(foodPreview);
    foodNameContainer.appendChild(foodName);
    container.appendChild(foodContainer);
    container.appendChild(foodNameContainer);
    container.appendChild(foodDescription);

    return container;
    
}
const foodMenu = () => {
    const foodMenuContainer = document.createElement('div');
    foodMenuContainer.classList.add('food-container');

    foodMenuContainer.appendChild(food());
    foodMenuContainer.appendChild(food());
    foodMenuContainer.appendChild(food());

    return foodMenuContainer;
}

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

const pagesContainer = (page)=>{
    let redBox = document.createElement('div');
    let logo = document.createElement('div');

    logo.classList.add('logo');

    redBox.classList.add('container');
    redBox.appendChild(logo);
    redBox.appendChild(page);
    return redBox;
}

const removePage = (container)=>{
    container.removeChild(container.lastChild);
}
const changePage = (container, page)=>{
    page.classList.add('fade-in');
    container.appendChild(page);
}

const main = () => {
    
    
    document.body.appendChild(menu());

    const container = pagesContainer(home());
    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const contacButton = document.querySelector('#contact');

    document.body.appendChild(container);
    homeButton.addEventListener('click', ()=>{
        removePage(container);
        changePage(container, home());
    });
    menuButton.addEventListener('click', ()=>{
        removePage(container);
        changePage(container, foodMenu());
    });
    contacButton.addEventListener('click', ()=>{
        removePage(container);
        changePage(container, contact());
    });
    
    

}


main();
