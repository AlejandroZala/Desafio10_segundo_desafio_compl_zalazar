const addToCartButtons = document.getElementsByClassName("product");
Array.from(addToCartButtons).forEach((button) => {
  button.addEventListener("click", async (event) => {
    const pid = event.target.id;
    console.log(pid);
  });
});