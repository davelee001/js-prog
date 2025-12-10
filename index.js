/*console.log(`hello`);
window.alert(`this is an alter`);
// this is a comment 
document.getElementById("myH1").textContent=`hello`;
document.getElementById("myP").textContent=`bad man`; 
let age = 25;
let year = 2024;
console.log(age, year);
age = 26;
console.log(age);
console.log(`my is age ${age} in year ${year}`);
console.log(typeof age);
console.log(typeof year);
let fisrtName = `losika`;
let isFemale = false;
let middleName;
console.log(typeof fisrtName);
console.log(typeof isFemale);
console.log(typeof middleName); 
console.log(`my name is ${fisrtName}`); 
VIARABLES    
let fullname = "losika nicholas";
let age = 24;
let student = true;
document.getElementById(`myH1`).textContent = `My name is:${fullname}` ;
document.getElementById(`P1`).textContent = age;
document.getElementById('P2').textContent = student;
arthimtic
let stundents = 30;
stundents = stundents * 100
console.log(stundents)
//how to accepy user input
x

let name;
document.getElementById('mysubmit').onclick = function(){
    name = document.getElementById('name').value ;
    //document.getElementById('H3').textContent = name
    console.log(name)
}

let username;
username = window.prompt("whts your user name?");
console.log(username);
//calcilator
let raduis;
const PI = 3.24;
let cum;
document.getElementById('mysubmit').onclick = function(){
    raduis = document.getElementById('MYTEXT').value;
    raduis = Number(raduis);
    cum = 2*PI*raduis;
    document.getElementById('myH3').textContent = cum;

}
//counter programm
let count = 0;
const increaseBtn = document.getElementById('increasebtn');
const decreaseBtn = document.getElementById('decreasebtn');
const resetBtn = document.getElementById('resetbtn');
increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
//random
//let numb = Math.floor((Math.random()*6) + 1)
//console.log(numb);
const mybtn = document.getElementById("mybtn");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const min = 1;
const max = 6;
let randomNum;
let randomNum2;
let randomNum3;
mybtn.onclick=function(){
    randomNum = Math.floor(Math.random() * max) + 1;
    randomNum2 = Math.floor(Math.random() * max) + 1;
    randomNum3 = Math.floor(Math.random() * max) + 1;
    mylabel1.textContent = randomNum;
    mylabel2.textContent = randomNum2;
    mylabel3.textContent = randomNum3;
}
// if statements
let age = 25;
//if(age >= 18){
   // console.log("you are old ")
//}else{"you are young"}
let isstuden = false;
//if (isstuden){
    console.log("here a student")

//}else{
    console.log("u are not a student ")
//}
//if(age >=18){
   // console.log('you are old enough');

//}
//else if(age < 0){
    //  console.log("your age cant be zero")
//}
const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const results = document.getElementById("results");
mysubmit.onclick = function(){
    age = mytext.value;
    age = Number(age)
    if(age >= 100){
        results.textContent = "you too old mn "
    }
    else if(age == 0){
        results.textContent = "you cant be zero yrs"
    }
    else if(age >= 18){
        results.textContent = "you are old enough to enter this site"
    }
    else if(age < 0){
        results.textContent = "your age cant be a negative"
    }else{
        results.textContent = "you must be 18+ to be in this site "
    }
}
///CHECK BOX PROPERTIES
const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subResult.textContent = "you are subscribed "
    }else{
        subResult.textContent = "you are not subscribed "
    }
    if (visabtn.checked){
        paymentResult.textContent = "you are paying with Visa"
    }
    else if (mastercard.checked){
        paymentResult.textContent = "you are paying with mastercard"
    }
    else if (paypalbtn.checked){
        paymentResult.textContent = "you are paying with paypal"
    }else{
        paymentResult.textContent = "you must select a property"

    }

}
// ternary
let age = 34;
//let message = age >= 18 ? "your old enough":"you are young";
//console.log(message)
let isstudent = true;
//let message  = isstudent?"you are a student":"you are not a student";
//console.log(message)
let purchaseamount = 2000;
let discount = purchaseamount > 100? 10:0;
console.log(`you get a discount ${purchaseamount - purchaseamount*(discount/100)}`);

//switch
let day = 1;
switch(day){
case 1:
    console.log("sunday");
    break

case 2:
    console.log("monday");

case 3:
    console.log("tuesday");

case 4:
    console.log("wednesday");

case 5:
    console.log("thursday");

case 6:
    console.log("firday");
case 7:
    console.log("sato");
default:
    console.log("thens its not a day")
}
//strings
let name = "losika   ";
name = name.trim()//to remove white spaces
let username = name.startsWith("l")//it will return true if the string starts with l
let names = name.includes("o")
//padstart and padend

console.log(name.charAt(3))
console.log(name.indexof("o"))
console.log(name.length)

// string silicing 

//we use string.silice(start,end)

let fullname = "losika nicholas";
let firstName = fullname.slice(0,6);
let lastName = fullname.slice(7);
let username = firstName.repeat(3);
console.log(username);
console.log(firstName);
console.log(lastName);
let surname = "losika"
let result = surname.startsWith(" ");
console.log(result)
if (result){
    console.log("you name cant start with space");
}else{
    console.log("well done")
}

let phonenumber = "223-456-223-677"
phonenumber = phonenumber.replaceAll("-","")
console.log(phonenumber)
//padstart and padend
let email = "losikanicholas@gmail.com";
let username1 = email.slice(0,email.indexOf("@"));
let domain = email.slice(email.indexOf("@")+ 1,);
console.log(username1);
console.log(domain);
//method chaining 
// no method chaining
let username = window.prompt("Enter your username:");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extras = username.slice(1);
extras = extras.toLowerCase();
//username = letter + extras;
//console.log(username)

//methode chaining

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)

// logical operators are and = &&,or = ||,Not = !
let temp = 200;// all the conditions should be true 
if(temp > 0 && temp <= 30){
    console.log("the weather is good")

}else{
    console.log("the weather is bad ")
}

let temp2 = 340;//one of the conditions should be true

if(temp2 > 0 || temp2 <= 30){
    console.log("the weather is good")

}else{
    console.log("the weather is bad ")
}

// = assignment operator
// == equality operator
// === strict equality operator(compare if values & datatypes are equal)
//!= inequality operator
//!== strict inequality operator

const PI = 34.89;// this brings true coz it doesnt consider the datatypes
if (PI == "34.89"){
    console.log("its true the are equal")
}else{
    console.log("that is not true")
}


const PI2 = 34.89;// this brings false coz it considers the datatypes
if (PI2 == "34.89"){
    console.log("its true the are equal")
}else{
    console.log("that is not true")
}
//also these work in the same way != and !==

// while 
let i = 2;
let text = "";
while (i < 10) {
  text += "The number is " + i;
  console.log(text)
  i++;
}
// for 
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i];
}

// NUMBER GUESSING GAME 
const minNum = 1;
const maxNum = 100;
const answer =Math.floor( Math.random()*(maxNum - minNum + 1) + minNum);
let attemps = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess a number between${minNum} - ${maxNum}`)
    guess = Number(guess)
    if(isNaN(guess)){
        window.alert("enter a number pliz");

    }
    else if (guess < minNum || guess > maxNum){
        window.alert("enter a number in the range mentioned");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("too low, try again");

        }
        
        else if (guess > answer){
            window.alert("too high, try again");
        }
        else{
            window.alert(`correct ! the answer was ${answer}.it took you ${attemps} attempzz`);
            running = false;
        }
    }
    
}
//functions

function add(x,y){
    return x + y;

}
function sub(x,y){
    return x + y;
    
}
function mult(x,y){
    return x + y;
    
}
function divide(x,y){
    return x + y;
    
}
function iseven(number){
    if(number% 2 === 0){
        return true;
    }else{
        return false
    }

    
}
function isemail(email){
    if(email.includes("@")){
        return true;
    }else{
        return false
    }

    
}
console.log(iseven(8));
console.log(isemail("losika@gmail.com"));
// variable scope = where a variable is recongized and accessible(local and global)

let x = 2;// global variable
let y = 5;
function function1(){
    let x =3;//local varaible
    console.log(x);
}
function function2(){
    let y =3;// local variable 
    console.log(y);
}
function2();
function1();
console.log(y);
console.log(x);
const textbox = document.getElementById("textbox");
const tofahrenheit= document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let temp;

function convert(p) {
    if(tofahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "F";

    }
    else if(tocelsius.checked){
         temp = Number(textbox.value);
        temp = (temp -32 )* (5/9);
        result.textContent = temp.toFixed(1) + "C";

    }else{
        result.textContent = "Select a unit";
    }
    
}
//ARRAYS
//array = a varaible like structure that can hold more than 1 value 
let fruits = ["apple","oranges","banana"];
fruits[0] = "coco";// add an element at index 0
fruits.push("kuku");//to put an element at the end
fruits.pop();// remove an element at the last
fruits.shift()// to remove an element from the begining
fruits.unshift("mango");
console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

//spread = ... alows an iterable such as an array or string to be expanded into seperate elements(unpacks the elements)
let numbers = [1,2,3,4,5,6]
let maxium = Math.max(...numbers)
let minium = Math.min(...numbers)
console.log(maxium)
console.log(minium)
let username = "losika nicholas";
let letters = [...username];
console.log(letters)
// we can also use spread to join items

//REST = (...rest) allows a function work with a varaible number of arguments by bundling them in an array
//spread = expands an array into seperate elements
//rest = bundles seperte elements into array
function openfrige(...foods){
    console.log(foods);
}
const food1 = "pizza";
const food2 = "ham";
const food3 = "turkey";
const food4 = "hen";
const food5 = "goat";
openfrige(food1,food2,food3,food4,food5);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result;
}
function average(...numbers){
    let result = 0;
    for(let number of numbers){
        result +=number;
    }
    return result/numbers.length;
}
const total = sum(1,23,4);
console.log(total)
const ave = average(1,23,4);
console.log(ave)

//RANDOW PASSWORD GENERATOR
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+={}[]:',.";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return "(Password length must be more than zero)";
    }

    if (allowedChars.length === 0) {
        return "(At least one character type needs to be selected)";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// Example usage:
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
console.log(`Generated password: ${password}`);


//callbacks = a function that is passed as an argument to another
// used to handle asynchronous operations:
// 1.reading a file 
//2.network requests
//3.interacting with databases

// it works like this "hy, when ur done call this next"
hello(leave);


function hello(callback){ 
    console.log("hello");
    callback();
    
}
function leave(){ 
    console.log("leave");
    
}
function wait(){ 
    console.log("wait");
    
}
function goodbye(){
    console.log("goodbye!");
}

sum(displayConsole,1,3);
function sum(callback,x,y){
    let result = x + y;
    callback(result);

}
function displayConsole(result){
    console.log(result);
}
function displayConsole(result){
    document.getElementById("myH1").textContent = result;
}
 
   // FOREACH() = METHOD USED TO ITERATE OVER THE ELEMENTS OF AN ARRAY AND APPLY A SPECIFIED FUNCTION (CALLBACK) FOR EACH ELEMENT
   //ARRAY.FOREACH(CALLBACK)
let numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(display)
numbers.forEach(double)
numbers.forEach(triple)
numbers.forEach(square)
function double(element,index,array){
    array[index] = element *2;
}
function triple(element,index,array){
    array[index] = element *3;
}
function square(element,index,array){
    array[index] = Math.pow(element ,2);
}
function display(element){
    console.log(element);
}   
   
let fruits = ["banana","apple","apes"];
fruits.forEach(uppercase);
fruits.forEach(capital);

function uppercase(element,index,array){
    array[index] = element.toUpperCase();
}

function capital(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
// map - accepts a callback and applies that function to each element of an array, then return a new array
const students = ["okot","losika","nick"]
const studentupper = students.map(uppercase);
console.log(studentupper)
function uppercase(element){
    return element.toUpperCase();
}
const dates = ["2024-09-09","2025-09-09","2026-09-09"];
const newdates = dates.map(formate);
console.log(newdates)
function formate(element){
    const parts = element.split("-");
    return parts;
}
    
//filter - creates a new array by filtering out elements
const age = [12,34,56,78,90]
const adults= age.filter(isAdult);
console.log(adults)
function isAdult(element){
    return element >= 18;
}
   
   // reduce - reduce the element of an array to a single value

   const price = [4,5,6,8,9,10];
   const total = price.reduce(sum)
   console.log(total)
   function sum(prev,next){
    return prev + next;

   }
   const grades = [75,67,89,90,45];
   const maxium = grades.reduce(getMax)
   console.log(maxium)
   function getMax(prev,next){
     return Math.max(prev,next)
   }
      
     // function declaration = define a resuable block code that perform a specific

     const hello = function(){
        console.log("hello");

     }
     hello();

     // function expressions = away to define functions as values or variables
     // callbacks in asynchronous operations
     //higher-order function
     // closures
     // event listeners
      
     setTimeout(function(){
        console.log("hello");
     },3000);

     const numbers = [1,2,3,4,5,6];
     const squares= numbers.map(function(element){
        return Math.pow(element,2);
     });
     const evenNum = numbers.filter(function(element){
        return element%2 === 0;
     });
     console.log(squares);
     console.log(evenNum);
     
//arror function = a concise way to write function expressions good for simple functions that you use only once (parameters) => some code 
let hello = (name,age) => {console.log(`hello world, ${name}`)
console.log(`your ${age} old`)};
hello("losika",56);
const numbers = [1,2,3,4,5,6];

const square = numbers.map((element) => Math.pow(element,2));
const Evennumber = numbers.filter((element) => element%2 === 0);
console.log(square)
console.log(Evennumber)

//object = a collections of related properties and/or methods can represent real world objects(pipo,products,places)
// object = {
//key:value
//, function}

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.id);
console.log(person.fullName());

//this = reference to the object where this is used (the object depends on the immediate context)
//person.name = this name
const person2 = {
  name: "John",
  age: 30,
  city: "New York",
  sayhello : function (){console.log(`your name ${this.name}`)}
};
person2.sayhello();
//this represents the person2 object and it doesnt work with arrow functions 
//constructors = special method for defining the properties and methods of objects 

function Person3(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person3("John", "Doe", 50, "blue");
const myMother = new Person3("Sally", "Rally", 48, "green");
const mySister = new Person3("Anna", "Rally", 18, "green");

const mySelf = new Person3("Johnny", "Rally", 22, "green");
console.log(myFather.firstName)


//Classes

//(ES6 feature) provides a more structured and clear way to work with objects compared to traditional constructor functions ex. static keywords,encapsulation,inheritance
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayproduct(){
        console.log(`products:${this.name}`);
        console.log(`products:${this.price}`);
    }
    calculattotal(saleprice){
        return this.price + (this.price * saleprice)
    }
    }

    const product1 = new Product("shirt",199.3);
    product1.displayproduct();
   console.log(product1.calculattotal(44)); 


//static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class(class owns anything static,not objects)
class mathh{
    static PI = 23.66;
}
// here you dont need to create an object to access the PI u just use the class name
console.log(mathh.PI);

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
const myCar = new Car("Ford");
console.log(Car.hello(myCar));

// inheretence
class Animal{
     alive = true;
     eat(){
        console.log("we are eating");
     }
     sleep(){
        console.log("we are sleeping")

     }
}
class Rabbit extends Animal{
    name = "rabbit";
}
class Fish extends Animal{
    name = "fish";
}
const rabbit = new Rabbit();
const fish = new Fish();
rabbit.eat();

//super = keyword is used in classes to call the constructor or access the properties and methods of a parents(superclass)
// this = this object
//super = the parent

class Animal{
     alive = true;
     constructor(name,age){
        this.name = name;
        this.age = age;
    }

     eat(){
        console.log("we are eating");
     }
     sleep(){
        console.log("we are sleeping")

     }
}
class Rabbit extends Animal{
    constructor(name,age,flyspeed){
        super(name,age);
        
        this.flyspeed = flyspeed;
    }
}
class Fish extends Animal{
     constructor(name,age){
        super(name,age);
        
    }
}

const rabbit = new Rabbit("okot",12,344);
const fish = new Fish("otot",12,);
rabbit.eat();
console.log(rabbit.age)
console.log(fish.name)
console.log(rabbit.name)
console.log(fish.age)
//setter = special method that makes a property writable
//getter = special method that makes a property readable

//validate and modify a value when reading/writting a propery
class Rec{
    constructor(width,height){
        this.width = width;
        this.height = height;

    }
    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth
        }else{
            console.error("width must be positive")
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight
        }else{
            console.error("height must be positive")
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }

    get area(){
        return this._height * this._width;
    }
}

const recta = new Rec(10000,455)
console.log(recta.width);
console.log(recta.height);
console.log(recta.area);

//DESTRUCTING = this helps us to extract values from arrays and objects then assign them to varaible in a convient way 
//[] = to perform array destructing
//{} - to perform object destructing
let a = 1;
let b = 2;
[a,b] = [b,a] // swaping

const colors = ["red","green","black"];
[colors[0],colors[2]] = [colors[2],colors[0]]

const[first,second,third,...extras] = colors;
console.log(first);
console.log(second);
console.log(third);
console.log(extras);



const person2 = {
  fname: "John",
  age: 30,
  city: "New York"
};

const person = {
  fname: "Joe",
  age: 20,
  city: "York"
};

function displayperson({fname,age,city}){
   console.log(fname)
   console.log(age)
   console.log(city)

}

displayperson(person1);

const{fname,age,city} = person;
console.log(fname)
console.log(age)
console.log(city)

// NESTED OBJECT = objects within objects,allows for more complex data structures,child object is enclosed by the parent object
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  },
  hobbies: ["reading", "traveling", "swimming"]
};
console.log(person.address.city);
console.log(person.hobbies[1]);
for (const property in person.address){
    console.log(person.address[property]);
};
class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street,city,state){
        this.street = street;
        this.city = city;
        this.state = state;
    }
}

const person1 = new Person("losika",25,"123 main st","kampala","uganda");
console.log(person1.address.city);
const person2 = new Person("okot",30,"456 side st","nairobi","kenya");
console.log(person2.address.city);
const person3 = new Person("nick",28,"789 high st","dodoma","tanzania");
console.log(person3.address.city);
console.log(person3.address.street);


//array of objects 
const fruits = [{name:"apple",color:"red",calories:89},
    {name:"orange",color:"orange",calories:45},
    {name:"banana",color:"yellow",calories:105},
    {name:"coconut",color:"white",calories:189}];
console.log(fruits[1].color);
fruits.push({name:"coco",color:"white",calories:189});
const fruitcolors = fruits.map(fruit => fruit.color);
const highcal = fruits.filter(fruit => fruit.calories > 23);
console.log(fruitcolors);
console.log(highcal)

// sort() = method sorts element
const people = [{name:"apple",color:"red",calories:89},
    {name:"orange",color:"orange",calories:45},
    {name:"banana",color:"yellow",calories:105},
    {name:"coconut",color:"white",calories:189}];

people.sort((a,b) => a.color - b.color)
console.log(people);    

// date objects = objects that contain values that represent dates and times,These date objects can be changed and formated
//date(yr,month,day,hr,min,sec,ms)
const today = new Date();
const birthday = new Date("2001-09-24");
console.log(today);
console.log(birthday);
const yr = today.getFullYear();
const month = today.getMonth();
console.log(yr)
console.log(month)

//closures = a function define inside of another function,inner function has access to the varaible and the scope of the outer function,Allow for private variable and state maintence 
//used frequently in js frameworks:rectjs,vue,angular

function outer(){
    let message = "hello";
    function inner(){
        console.log(message);
    }
    inner();
}

outer();
 
function outer() {
  let count = 0; // a variable in outer function

  function inner() {
    count++;               // inner accesses outer variable
    console.log(count);
  }

  return inner;  // return the inner function
}

const counter = outer();  // outer() is called once
counter();  // 1
counter();  // 2
counter();  // 3
 

function createGame(){
       let score = 0;
       function increase(points){
        score += points;
        console.log(`+${points}`)
       };
       function decrease(points){
        score -= points;
        console.log(`-${points}`)
       };
       function getscore(){
        return score;
       };
       return {increase,decrease,getscore};

};
const game = createGame();
game.decrease(100);
game.increase(344);
console.log(game.getscore());



//setTimeout() = function in js that allows you to schedule the execution of a function after an amount of time(milliseconds)
//Times are approximate (varies based on the workload of js runtime env.)
//setTimeout(callback,delay);

setTimeout(() => {
  console.log("Hello after 2 seconds!");
}, 2000);

console.log("Start");

setTimeout(() => console.log("Timeout done"), 2000);

console.log("End");



let count = 0;
function repeat() {
  count++;
  console.log(count);
  if (count < 5) {
    setTimeout(repeat, 1000);
  }
}

repeat();
 const id = setTimeout(function(){window.alert("hello")},3000);
// clearTimeout(id);


let timeout;
function startTimer(){
    setTimeout(() => window.alert("HELLO"),3000);
    console.log("STARTER");
}

function ClearTimer(){
    clearTimeout(timeout);
    console.log("CLEAR");
}
    
// DIGITAL CLOCK PROGRAM

function updateClock(){
     const now = new Date();
     let hours = now.getHours();
     const meridiem = hours >= 12 ? "PM" :"AM";
     hours = hours % 12 || 12;
     const min = now.getMinutes().toString().padStart(2,0);
     const sec = now.getSeconds().toString().padStart(2,0);
     const timeString = `${hours}:${min}:${sec} ${meridiem}`;
     document.getElementById("clock").textContent = timeString;
};

updateClock();
setInterval(updateClock,1000);


//STOP WATCH

const display = document.getElementById("display");
let timer = null;
let startTimer = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if (!isRunning) {
        startTimer = Date.now() - elapsedTime;
        timer = setInterval(Update,10);
        isRunning = true;
    }
};

function stop(){
     if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTimer ;
        isRunning = false;
    }
};


function reset(){
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    startTimer =0;
    display.textContent = "00:00:00";
};
function Update(){
    const currentTime = Date.now()
    elapsedTime = currentTime - startTimer;
    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)) % 60;
    let seconds = Math.floor(elapsedTime/(1000)) % 60;
    let milliseconds = Math.floor(elapsedTime%(1000/10));

    hours = String(hours).padStart(2,"0")
    minutes = String(minutes).padStart(2,"0")
    seconds = String(seconds).padStart(2,"0")
    milliseconds = String(milliseconds).padStart(2,"0")
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
};


//Es6 module = an external file that contains reusable code that can be imported into other js files . write reusable code for many different app
//can contain variable,classes,functions... and more introduced as part of ECMAScript 2015 update

//synchronous = excutes line by line consecutively in sequential manner 
//code that waits for an operations to complete

//asynchronous = executes independently of the main program flow
//code that allows other operations to continue before completing
//allows multiple operations to perform concurrently without waiting doesnt block the execution flow and allows the program to continue
//(I/O operations,network requests, fetching data)
//handle with:callbacks,promises,Async/Await

//error handling  = an object that is created to represent a problem that occurs .Occur often with user input or establishing a connection
try{
    console.log(x)
}
catch(error){
    console.error(error)

}
finally{
    console.log("u hv reached the end")
}


function getUserAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("Age must be a number");
  }
  if (age < 0) {
    throw new RangeError("Age cannot be negative");
  }
  return `User age is ${age}`;
}

try {
  console.log(getUserAge(-5));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
} finally {
  console.log("Process finished.");
}

*/ 
// calculator
const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;

}
function calculateResult(){

    try{
display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
    
        
}



function clearDisplay(){
         display.value = "";
}
//DOM = document object model, a programming interface for web documents, represents the structure of a document as a tree of objects, allows js to interact with HTML and CSS
//element selectors = methods used to select and manipulate HTML elements in the DOM
//getElementById() = selects an element by its ID
//getElementsByClassName() = selects elements by their class name
//getElementsByTagName() = selects elements by their tag name
//querySelector() = selects the first element that matches a CSS selector
//querySelectorAll() = selects all elements that match a CSS selector

//getElementById()
myheading = document.getElementById("myheading");
myheading.style.color = "red";
myheading.style.backgroundColor = "black";
myheading.style.padding = "10px";
//getElementsByClassName()
myfruits = document.getElementsByClassName("fruits");
myfruits[0].style.color = "orange";
myfruits[1].style.color = "green";
myfruits[2].style.color = "pink";

//getElementsByTagName()
const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.color = "blue";
h4Elements[1].style.color = "purple";
h4Elements[2].style.color = "brown";


//const liElements = document.getElementsByTagName("li");
for(let i = 0; i < liElements.length; i++){
    liElements[i].style.backgroundColor = "green";
}

//querySelector()
const liElements = document.querySelectorAll("li");
liElements[0].style.backgroundColor = "yellow";
liElements[1].style.backgroundColor = "pink";
liElements[2].style.backgroundColor = "cyan";