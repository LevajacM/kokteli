import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  const id = localStorage.getItem("drink");

  if (!id) {
    window.location.replace("index.html");
  }
  const data = await fetchDrinks(`${baseURL}${id}`);
  displayDrink(data);
};

window.addEventListener("DOMContentLoaded", presentDrink);
