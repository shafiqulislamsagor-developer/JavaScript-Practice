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

// Object properties practice

const person = {
  firstName: "shafiqul islam",
  lastName: "sagor",
  age: 18,
  eyeColor: "black",
  family: {
    father: "saroar hossain sumon",
    mother: "solpona akter",
    bother: "mustakim",
    wife: "al muzija rahman habiba",
  },
};

// delete person.eyeColor; // remove eyeColor property
delete person["eyeColor"];

console.log(person.family.bother);

// object Methods practice

const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const fullNames = person.fullName().toUpperCase();

person.total = function () {
  return this.id - 11;
};

console.log(person.total());

// Object Display practice

const object = {
  name: "test",
  age: 30,
  city: "New York",
};

let result = "";

// for (let i in object) {
//   console.log(object[i]);
// }

for (let [key, value] of Object.entries(object)) {
  result += `${key}: ${value} ,`;
}

console.log(Object.values(object));
