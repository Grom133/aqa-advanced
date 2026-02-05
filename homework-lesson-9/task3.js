const car1 = { };
car1.brand = "Toyota";
car1.model = "Camry";
car1.year = 2018;

const car2 = { };
car2.brand = "Jeep";
car2.model = "Wrangler";
car2.owner = "Oleg";

const car3 = { ...car1, ...car2 };

console.log(car3);