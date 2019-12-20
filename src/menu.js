const menu = () => {
  let conatiner = document.createElement("div");
  let home = document.createElement("button");
  let menu = document.createElement("button");
  let contact = document.createElement("button");
  conatiner.classList.add("menu");
  home.classList.add("menu-button1");
  menu.classList.add("menu-button2");
  contact.classList.add("menu-button3");

  home.id = "home";
  menu.id = "menu";
  contact.id = "contact";

  home.innerHTML = "Home";
  menu.innerText = "Menu";
  contact.innerText = "Contact";

  conatiner.appendChild(home);
  conatiner.appendChild(menu);
  conatiner.appendChild(contact);

  return conatiner;
};

export { menu };
