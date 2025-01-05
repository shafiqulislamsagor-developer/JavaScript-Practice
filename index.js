const text = document.getElementById("demo");
const button = document.getElementById("btn");

const carName = "Hello javascript Cars world!!!";
let car = "BMW",
  year = 2000,
  name = "sagor";

const object = {
  name: "test",
  age: 30,
  city: "New York",
};

function clickButton() {
  // text.innerHTML = JSON.stringify(object);
  // text.innerHTML = Object.values(object);
  // text.innerHTML = Object.keys(object);
  text.innerHTML = JSON.stringify(object);
}

button.addEventListener("click", () => {
  //   text.innerHTML = "hello javascript world!";
  clickButton();
});
