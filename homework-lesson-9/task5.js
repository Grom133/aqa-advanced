const users = [
    {name: "Oleg", email: "oleg@gmail.com", age: 25},
    {name: "Olena", email: "olena@gmail.com", age: 30},
    {name: "Keereel", email: "keereel@gmail.com", age: 15}
];

for (const { name, email, age } of users) {
    console.log(name, email, age);
}