const car1 = { brand:"Toyota", model: "Camry", year: 2018};

const car2 = { brand: "Jeep", model: "Wrangler", owner: "Oleg" };

const car3 = { ...car1, ...car2 };

console.log(car3);