// Array to hold top choices
const topChoices = ['blue', 'green', 'red', 'yellow', 'orange'];

// Function to determine the suffix for a given number
function getSuffix(number) {
    if (number === 1) {
        return 'st';
    } else if (number === 2) {
        return 'nd';
    } else if (number === 3) {
        return 'rd';
    } else {
        return 'th';
    }
}

// Iterate over the top choices array and log the choices with appropriate suffixes
for (let i = 0; i < topChoices.length; i++) {
    const choiceNumber = i + 1;
    const choiceSuffix = getSuffix(choiceNumber);
    console.log(`My ${choiceNumber}${choiceSuffix} choice is ${topChoices[i]}.`);
}
