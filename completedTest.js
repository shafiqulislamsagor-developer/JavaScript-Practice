// completed practice this code store the current file

// carNa = "car";

// var carNa;

let x = ["x", "y", "z"];

let y = 9;

let z = 10;

try {
  if (x) {
    //   if ((x |= y)) {
    //   if ((x ^= y)) {
    //   if ((x &= y)) {
    // x += y;
    // x -= y;
    // x *= y;
    // x /= y;
    // x %= y;
    // x **= y;
    // x <<= y;
    // x >>= y;
    // x >>>= y;
    // console.log(12.0);
    // console.log(12);
    // console.log(1e-5);
    // console.log(BigInt("1234567890"));
    console.log("thik ase code");
    console.log(x[1]);
  } else {
    console.log("thik nai");
  }
} catch {
  console.log("error");
}

// function test

function run(a, b) {
  return a * b;
}

function toCelsius(fahrenheit) {
  if (!fahrenheit) return "no fahrenheit number";
  const degrees = (5 / 9) * (fahrenheit - 32);
  return degrees;
}

const value = toCelsius;

// console.log("value: " + value(20));

// object practice

const car = {
  name: "BMW",
  model: "X5",
  year: 2020,
  carInfo: function () {
    return `This is a ${this.name} ${this.model} from ${this.year}`;
  },
};

// const newCar = new Object({ name: "xl" });

// console.log(newCar);

console.log(car.carInfo());
