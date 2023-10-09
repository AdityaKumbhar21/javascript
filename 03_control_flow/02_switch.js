// To check multiple conditions we can also use switch statement

const weekDay = 1


// Switch statements matches the key with the values specified in the cases
// key -> weekDay
// value -> 1 to 7
// if the key matches the value then it executes the code under that case else check for another case 
// if no case matches then default statement is executed

        // If break statement is not provided it executes entire case without checking value except default case
switch (weekDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Week Day");
        break;
}