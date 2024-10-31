// Prompting for user details
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let userage = prompt("Enter your age:");
let favoriteNum = prompt("Enter your favorite number:");
let favoriteColor = prompt("Enter your favorite color:");

// Creating a user profile object
let userProfile = {
    fullName: firstName + " " + lastName,
    age: userage,
    favoriteNumber: favoriteNum,
    favoriteColor: favoriteColor
};

// Logging the entire object to the console
console.log("User Profile Object:", userProfile);