
// Constructor function for AGE objects

function age_Function() {
  var AGE, person_age;
  AGE = document.getElementById("AGE").value;
  person_age = (AGE < 18) ? "You are not old enough":"You are old enough";
  document.getElementById("OLD").innerHTML = person_age + " to vote!";
}

// Constructor function for Vehicle objects
function Vehicle(Make, Model, Year, Color) {
this.Vehicle_Make = Make;
this.Vehicle_Model = Model;
this.Vehicle_Year = Year;
this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "Black and White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML = 
  "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
  " manufactured in " + Erik.Vehicle_Year;
}

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
function Change() {
// Display age
document.getElementById("New_and_This").innerHTML =
"My father is " + myFather.age + "."; 
}

function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();
  function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
  }
}