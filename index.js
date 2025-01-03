const text = document.getElementById("demo");
const button = document.getElementById("btn");

function clickButton() {
  text.innerHTML = "hello javascript world!";
}

button.addEventListener("click", () => {
  //   text.innerHTML = "hello javascript world!";
  clickButton();
});
