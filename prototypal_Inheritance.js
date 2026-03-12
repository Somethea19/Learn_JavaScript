const animal = {
    eat : true,
};
const dog = {
    bark : true,
};
dog.__proto__= animal ;
console.log(dog.eat);
console.log(dog.bark);