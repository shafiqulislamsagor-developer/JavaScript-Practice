const text = document.getElementById("demo");
const button = document.getElementById("btn");

const carName = "Hello javascript Cars world!!!";
let car = "BMW",
  year = 2000,
  name = "sagor";

function clickButton() {
  text.innerHTML = car + " " + year + " " + name;
}

button.addEventListener("click", () => {
  //   text.innerHTML = "hello javascript world!";
  clickButton();
});
