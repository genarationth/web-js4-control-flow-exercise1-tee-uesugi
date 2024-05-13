function dayNumber(numOfDays) {
    if (numOfDays === 0) {
        return "Sunday";
    }
    else if (numOfDays === 1) {
        return "Monday";
    }
    else if (numOfDays === 2) {
        return "Tuesday";
    }
    else if (numOfDays === 3) {
        return "Wednesday";
    }
    else if (numOfDays === 4) {
        return "Thursday";
    }
    else if (numOfDays === 5) {
        return "Friday";
    } 
    else if (numOfDays === 6) {
        return "Saturday";
    }
        return "Invalid day number"

};

console.log(dayNumber(5));
