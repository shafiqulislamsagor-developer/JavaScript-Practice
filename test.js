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
