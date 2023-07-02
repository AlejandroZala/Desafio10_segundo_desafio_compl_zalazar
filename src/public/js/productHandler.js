const addToCartButtons = document.getElementsByClassName("product");
Array.from(addToCartButtons).forEach((button) => {
  button.addEventListener("click", async (event) => {
    const productId = event.target.id;
    console.log(productId);
  });
});