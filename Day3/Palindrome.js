// Function to reverse a string
function reverseString(str) {
    // Convert string into characters
    let characters = str.split("");
    let reversedString = "";

    // Loop through characters in reverse direction
    for (let i = characters.length - 1; i >= 0; i--) {
        reversedString += characters[i];
    }

    // Print the reversed string
    console.log("Reversed String:", reversedString);

    return reversedString;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    let reversedString = reverseString(str);

    // Check if original and reversed strings are the same
    return str === reversedString;
}

// Test cases
let testStrings = ["madam", "racecar", "hello", "level", "JavaScript"];

for (let str of testStrings) {
    console.log("Original String:", str);
    console.log("Palindrome:", isPalindrome(str));
    console.log("-------------------");
}