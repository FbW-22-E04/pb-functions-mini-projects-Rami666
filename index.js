// The Fortune Teller
const tellFortune = (child, partner, loc, job) => `You will be a ${job} in ${loc}, and married to ${partner} with ${child} kids.`;

console.log(tellFortune("Rami", "Lisa", "Berlin", "Driver"));
console.log(tellFortune("John", "Sahar", "Berlin", "Developer"));
console.log(tellFortune("Will", "Nill", "NY", "Fashin"));

// The Puppy Age Calculator
const calculateDogAge = (age, type) => type === "human" ? age * 7 : age / 7;

console.log(calculateDogAge(7, "human"));
console.log(calculateDogAge(35, "dog"));
console.log(calculateDogAge(11, "cat"));



// The Lifetime Supply Calculator
const calculateSupply = (age, amount) => {
    let result = age * amount;
    return result;
}

console.log(calculateSupply(95, 20));
console.log(calculateSupply(50, 40));
console.log(calculateSupply(11, 90));

// The Geometrizer
const calcCircumfrence = (rad) => {
    let result = 2 * Math.PI * rad;
    console.log(`The area is ${result}`);
}

calcCircumfrence(4.5)

// The Temperature Converter
function celsiusToFahrenheit(cels) 
{
  let temp = cels;
  let celToFahr = temp * 9 / 5 + 32;
  let message = temp+'\xB0C is ' + celToFahr + ' \xB0F.';
    console.log(message);
}

function fahrenheitToCelsius(fahre) 
{
  let temp = fahre;
  let fahToCel = (temp - 32) * 5 / 9;
  let message = temp+'\xB0F is ' + fahToCel + '\xB0C.';
    console.log(message);
} 
celsiusToFahrenheit(60);
fahrenheitToCelsius(45);