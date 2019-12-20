const food = () => {
  const container = document.createElement("div");
  const foodPreview = document.createElement("img");
  const foodContainer = document.createElement("div");
  const foodNameContainer = document.createElement("div");
  const foodName = document.createElement("h1");
  const foodDescription = document.createElement("p");

  container.classList.add("food");
  foodPreview.classList.add("food-image");
  foodContainer.classList.add("food-view");
  foodName.classList.add("food-name");
  foodDescription.classList.add("food-description");
  foodNameContainer.classList.add("food-name-container");

  foodPreview.src =
    "https://www.thelocal.de/userdata/images/1542281122_110147217.jpg";
  foodPreview.width = 300;
  foodName.innerText = "Food Name";
  foodDescription.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum enim ut dolor aliquet fermentum. Nam eget maximus diam. Curabitur et consectetur justo. Nunc convallis nibh ac nulla euismod, quis molestie ligula sollicitudin. Donec scelerisque dapibus justo quis auctor. Duis scelerisque aliquam consequat. Phasellus lobortis nulla sit amet mauris tristique rutrum.`;

  foodContainer.appendChild(foodPreview);
  foodNameContainer.appendChild(foodName);
  container.appendChild(foodContainer);
  container.appendChild(foodNameContainer);
  container.appendChild(foodDescription);

  return container;
};
const foodMenu = () => {
  const foodMenuContainer = document.createElement("div");
  foodMenuContainer.classList.add("food-container");

  foodMenuContainer.appendChild(food());
  foodMenuContainer.appendChild(food());
  foodMenuContainer.appendChild(food());

  return foodMenuContainer;
};

export { foodMenu };
