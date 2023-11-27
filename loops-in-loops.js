// LECTURE: Looping Backwards and Loops in Loops
// 1. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this.

const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweeden", "Russia"]];

for (let i = 0; i <= listOfNeighbours.length - 1; i++) {
    for (let y = 0; y <= listOfNeighbours[i].length - 1; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}
