const findTheOldest = function(people) {
    const person = people.reduce((oldest, person) => {
        const d = new Date();
        const yearOfDeath = ("yearOfDeath" in person) ? person.yearOfDeath : d.getFullYear();
        const age = yearOfDeath - person.yearOfBirth;
        if (age > oldest.age) {
            oldest = {...person, age};
        }
        return oldest
    }, {age: 0});
    delete person.age;
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
