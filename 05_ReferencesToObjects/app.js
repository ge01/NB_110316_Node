// What is the difference between == and ===
// Whenever you want to just compare values ==
console.log(19 == '19'); //true
// Whenever you want to compare values and types ===
console.log(19 === '19'); //false


// In node everything is a reference
/*
var Bucky = {
  favFood: "bacon",
  favMovie: "Chappie"
};

var Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood);
*/
