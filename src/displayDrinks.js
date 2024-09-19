import get from "./getElement.js";
import { removeLoading } from "./toggleLoading.js";
const container = get(".section-center");
const title = get(".title");

const displayDrinks = ({ drinks }) => {
  if (drinks) {
    const displayData = drinks
      .map(({ idDrink: id, strDrinkThumb: pic, strDrink: name }) => {
        return `
    <a href="drink.html">
           <article class="cocktail" data-id=${id}>
             <img src=${pic} alt=${name} />
             <h3>${name}</h3>
           </article>
         </a>
   `;
      })
      .join("");
    removeLoading();
    title.textContent = "";
    container.innerHTML = displayData;
    return container;
  }
  if (!drinks) {
    removeLoading();
    title.textContent = `Sorry, no drinks matched your search`;

    container.innerHTML = null;
  }
};

export default displayDrinks;
