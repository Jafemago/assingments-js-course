// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

const myCountry = {
    country: "Colombia",
    capital: "Bogota",
    language: "Spanish",
    population: "50 million",
    neighbours: ["Brazil", "Panama", "Venezuela", "Ecuador", "Peru"]
}

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population = "52 million";
myCountry["population"] = "50 million";
