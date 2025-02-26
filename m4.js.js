// JavaScript - Module 4

// Object for for...in loop demonstration
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

// Using for...in to iterate over the object
let forInLoopOutput = "Object properties:\n";
for (let key in car) {
    forInLoopOutput += `${key}: ${car[key]}\n`;
}

// Using standard for loop to iterate over an array
const numbers = [10, 20, 30, 40, 50];
let forLoopOutput = "Array elements:\n";
for (let i = 0; i < numbers.length; i++) {
    forLoopOutput += `Index ${i}: ${numbers[i]}\n`;
}

// Function to manipulate an object and abstract properties
function modifyObject(obj) {
    obj.year += 1; // Increment year
    obj.model = obj.model.toUpperCase(); // Change model to uppercase
    return obj;
}

// Original object before modification
let objectOutput = "Original Object:\n";
objectOutput += JSON.stringify(car, null, 2) + "\n";

// Modify object and show updated properties
const newCar = modifyObject(car);
objectOutput += "Updated Object:\n";
objectOutput += JSON.stringify(newCar, null, 2);
