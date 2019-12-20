import {foodMenu } from './food'
import {contact} from './contact'
import {home} from './home'
import {menu} from './menu'
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