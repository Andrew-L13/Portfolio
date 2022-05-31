function calculateAge(years) {
    return `Daqui a ${years} anos, ${this.name} terá ${this.age + years} anos de idade`;
}

const people1 = {
    name: 'Maria',
    age: 30,
};

const people2 = {
    name: 'Creuza',
    age: 56,
};

const animal = {
    name: 'Berman',
    age: 12,
    breed: 'Pug',
};

console.log(calculateAge.apply(animal, [4]));