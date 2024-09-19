const setDrink = (container) => {
  container.addEventListener("click", (e) => {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("drink", id);
    // const URL = `${baseURL}${id}`;
    // displaySingleDrink(URL);
  });
};

export default setDrink;
