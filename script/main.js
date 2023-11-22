
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// It is divisible
const n = (n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0 ) && (n4 % 5 == 0 );
console.log(n); // result is true

//Comparing n1 > n4

const x = (n1 > n4);
console.log(x); // result is true

//Subtract the first number from the second number.

const y= (((n2 - n1) * n3) % n4);

console.log(y); // result is 0


// Math 2 

function calculateFuelNeeded(speed, totalDistance) {
    let fuelEfficiency;
    if (speed === 55) {
        fuelEfficiency = 30;
    } else if (speed === 60) {
        fuelEfficiency = 28;
    } else if (speed === 75) {
        fuelEfficiency = 23;
    } else {
        console.log("Invalid speed.");
        return null;
    }

    const gallonsNeeded = totalDistance / fuelEfficiency;
    return gallonsNeeded;
}

function calculateTripTime(speed, totalDistance) {
    const time = totalDistance / speed;
    return time;
}

function main() {
    const totalDistance = 1500;
    const budget = 175;
    const costPerGallon = 3;

    const speeds = [55, 60, 75];

    for (const speed of speeds) {
        const gallonsNeeded = calculateFuelNeeded(speed, totalDistance);
        const tripTime = calculateTripTime(speed, totalDistance);
        const totalCost = gallonsNeeded * costPerGallon;

        console.log(`At ${speed} mph:`);
        console.log(`Gallons needed: ${gallonsNeeded.toFixed(2)}`);
        console.log(`Total cost: $${totalCost.toFixed(2)}`);
        console.log(`Trip time: ${tripTime.toFixed(2)} hours\n`);

        if (totalCost <= budget) {
            console.log("Budget is enough for this speed.\n");
        } else {
            console.log("Budget is not enough for this speed.\n");
        }
    }
}

main();


// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isLess25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

