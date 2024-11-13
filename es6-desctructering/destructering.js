// ES6 Object Destructering

// Varför - en mer clean kod som är best practice som är att föredra i kommande kod ni skriver
// När - när du vill plocka ut keys från objekt och lägga i en variabel som du vill använda. Istället för punktnotaion

const movie = {
    title: "Matrix",
    length: 200,
    rating: 9
}

// Punktnotations-sättet
// const movietitle = movie.title;
// const movieLength = movie.length;
// const movieRating = movie.rating;

// console.group(movietitle, movieLength, movieRating);

// ES6 Desctructering-sättet - plocka ut keys till vänster om =. Man behöver inte plocka ut alla, man välja!
const { title, length, rating } = movie;
//const { title } = movie; // Plocka ut delmängd
//console.log(title, length, rating);

const person = {
    firstname: "Sandra",
    age: 29,
    adress: {
        street: "Tallvägen 23",
        city: "Malmköping"
    }
}
// The old way
// const myAge = person.age;
// const myStreet = person.adress.street;
// const myCity = person.adress.city;

// Alt 1 för nästling
// const { name, age, adress } = person;
// const { street, city } = adress;

// Alt 2 för nästling
const { firstname, age, adress: {street, city}} = person

//console.log(name, age, street, city);


// Det finns array destructering
const colors = ["red", "purple", "yellow"]

const [color1, color3, color2] = colors;

//console.log(color1, color2, color3);




