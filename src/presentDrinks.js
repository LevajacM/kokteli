import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);
  // console.log(data);

  // display drinks
  const container = await displayDrinks(data);
  if (container) {
    setDrink(container);
  }
};

export default showDrinks;
