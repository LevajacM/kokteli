import { removeLoading } from "./toggleLoading.js";
import get from "./getElement.js";
const displayDrink = (data) => {
  removeLoading();
  const drink = data.drinks[0];
  const { strDrink: name, strInstructions: desc, strDrinkThumb: photo } = drink;
  const ingList = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const img = get(".drink-img");
  const dName = get(".drink-name");
  const description = get(".drink-desc");
  const ing = get(".drink-ingredients");

  img.src = photo;
  dName.textContent = name;
  document.title = name;
  description.textContent = desc;
  ing.innerHTML = ingList
    .map((ing) => {
      if (ing) {
        return `
     <li><i class="fa-regular fa-square-check"></i>${ing}</li>
    `;
      }
    })
    .join("");
};

export default displayDrink;
