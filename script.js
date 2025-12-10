/* let numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3
let maxNumber = Math.max(...numbers);
console.log(maxNumber); // 3
let moreNumbers = [4, 5, 6];
let combined = [...numbers, ...moreNumbers];
console.log(combined); // [1, 2, 3, 4, 5, 6]


function sum(x, y, z,callback) {
    let result = x + y + z;
    callback(result);
}
sum(1, 2, 3, function(result) {
    console.log("The sum is: " + result);
});
function displayResult(result) {
    console.log("The sum is: " + result);
}
console.log("Starting the sum operation...");
sum(1, 2, 3, displayResult);
console.log("Sum operation completed.");


let number = [1, 2, 3, 4, 5];
number.forEach(function(n,m,t){
    console.log(`this the element ${n} and the index is ${m}`)
})
number.forEach((element,index) => console.log(`this the element ${element} and the index is ${index}`))

let rrr = number.reduce(function(acc,cc){
    return acc*cc
},1)
console.log(rrr)


const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Carol", score: 78 },
  { name: "David", score: 95 },
  { name: "Eve", score: 66 }
];

const students_lower_than_80 = students.filter(n => {return n.score < 80});
console.log(students_lower_than_80);
const upper_names = students.map(n => n.name.toUpperCase());
console.log(upper_names);
const ave = students_lower_than_80.reduce((acc,next) => (acc.score + next.score)/students_lower_than_80.length);
console.log(ave);
const congratulate = function(name){
    console.log(`Congrats,${name}!`)
};
console.log(congratulate('losika'));

const namez = students.forEach(name => congratulate(name.name));
console.log(namez);
const congs = name => console.log(`Congrats,${name}!`);
congs("okot");

const cart = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Phone", price: 500, quantity: 3 },
  { name: "Headphones", price: 100, quantity: 5 },
  { name: "Charger", price: 50, quantity: 10 }
];


const total_price = cart.map((p)=> p.price * p.quantity);
console.log(total_price)
const low_price = cart.filter(n => n.price >= 500)
console.log(low_price)
const prices = low_price.map((p)=> p.price * p.quantity);
const grand_total = prices.reduce((currentelement,nextelement) => currentelement + nextelement)
console.log(grand_total)
const printItem = (item_name,total_price) =>{return `Item:${item_name} , Total: ${total_price}`}
    
console.log(printItem("Laptop",1000))
const items = low_price.forEach(element => printItem(element.name,(element.price*element.quantity)))

console.log(items)

const price_sum = cart.reduce((acc,next) => acc + (next.price * next.quantity),0)
console.log(price_sum)






const student = {
  name: "Losika",
  age: 24,
  grades: [98, 90, 78],
  avgGrade() {
    const sum = this.grades.reduce((acc, next) => acc + next, 0);
    return sum / this.grades.length;
  }
};

console.log(student.name);      // Losika
console.log(student.avgGrade()); // 88.67


class Car {
    constructor(brand, color, year) {
        this.brand = brand
        this.color = brand 
        this.year = year
}
     drive() {
    console.log(`${this.brand} is driving`)
    
 }
}
const car1 = new Car("toyota","red",2030)
const car2 = new Car("nissan","black",2030)
car1.drive()
car2.drive()



class Person{
    constructor(name){
        this.name = name

    }
    greet(){
        console.log(`Hello ${this.name}`)

    }
}
class Student extends Person{
    constructor(name,grades){
        super(name)
        this.grades = grades
    }
    avgGrade(){
        return this.grades.reduce((n,p) => n+p)/ this.grades.length;
    }
}

const Student1 = new Student("losika",[23,45,67,89,78])
console.log(Student1.avgGrade())
Student1.greet()

class Student{
    constructor(name,age){
        this._name = name
        this._age = age
    }
    get name(){
        
        return this._name.toUpperCase()
    }
    get age(){
        return this._age
    }
    set name(newname){
        if(newname.length > 0){
            return this._name = newname}
        else{console.log("the string cant be lower than 0")}
        
    }
     set age(newage){
        
        if(newage > 0){
            return this._age = newage}
        else{console.log("the agecant be lower than 0")}
    }
}
const student1 = new Student("losika",56)
console.log(student1.name)
console.log(student1.age)


class Car{
    constructor(speed){
        this._speed = speed
    }
    get speed(){
        return this._speed
    }
    set speed(newspeed){
        if (newspeed >= 0 && newspeed <= 300){
            return this._speed = newspeed
        }else
        {
            console.log("Your above the speed limit")
        }
           
    }
}
const car = new Car(20000)
const car1 = new Car(2000000)

car.speed = 400;           // Invalid - shows error
 

car.speed = 4000;           // Invalid - shows error



const students = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 80 },
  { name: "Carol", score: 95 }
];

// Destructuring the first student
const [firstStudent] = students;
console.log(firstStudent.name); // Alice

// Destructuring inside a loop
//students.forEach(({ name, score }) => {
  //console.log(`${name} scored ${score}`);
//});

students.forEach(mn => console.log(mn.name) )

const student = {
  name: "Alice",
  grades: { math: 90, english: 85 }
};

const { name, grades: {english } } = student;
//console.log(math);    // 90
console.log(english); // 85

const numbers = [10, 5, 20, 1];
numbers.sort(); 
console.log(numbers);
 // [1, 10, 20, 5] ❌ incorrect for numbers
 numbers.sort((a,b) => a - b); 
console.log(numbers);
numbers.sort((a,b) =>b - a);
console.log(numbers);

const cars = [
  { brand: "Toyota", year: 2020 },
  { brand: "Honda", year: 2019 },
  { brand: "Ford", year: 2021 }
];

// Sort by year ascending
cars.sort((a, b) => a.year - b.year);

console.log(cars);

[
  { brand: "Honda", year: 2019 },
  { brand: "Toyota", year: 2020 },
  { brand: "Ford", year: 2021 }
]


const arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
}

console.log(arr); // array in random order


const students2 = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 96 },
  { name: "Ethan", score: 81 },
  { name: "Fiona", score: 89 }
];

students2.sort((a,b) => b.score - a.score )
console.log(students2)

for (let i = students2.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  // ✅ Correct swap: swap array elements at indices i and j
  [students2[i], students2[j]] = [students2[j], students2[i]];
}
console.log(students2)


const now = new Date();
const d3 = new Date("2025-12-25");
console.log(d3)
console.log(now);
now.getFullYear();   // 2025
now.getMonth();      // 0-11
now.getDate();       // 1-31
now.getHours();      // 0-23
now.getMinutes();  
now.getSeconds();
now.getMilliseconds();
now.getDay(); 
const y = now.getFullYear();
const m = String(now.getMonth() + 1).padStart(2, "0");
const d = String(now.getDate()).padStart(2, "0");

console.log(`${y}-${m}-${d}`);
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());


function todays_date(){
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2,"0") ;
    const day = String(now.getDate()).padStart(2,"0");
    const year = now.getFullYear();
    console.log(`The full date is ${day}/${month}/${year}`)
}

todays_date();
function Add_days(n){
    const now = new Date();
    const day = now.getDate()
    return day + n;

}
console.log(Add_days(10))
function daysOld(birthDate) {
  const birth = new Date(birthDate);
  const today = new Date();
  
  const timeDifference = today - birth;

  return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
}

console.log(daysOld("2001-09-24"));


function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable - can't be accessed directly
  
  return { deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance: function() {
      return balance; // Only way to access balance is through this method
    }
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50)); // 150
console.log(account.withdraw(25)); // 125
console.log(account.balance); // undefined - can't access directly!
console.log(account.getBalance()); // 125 - only access through methods

function creatlock(){
    const password = "secret123";
    function check(key){
        if (key === password){
            console.log("ACCESS GRANTED")
        }else{
            console.log("ACCESS DENIED")
        }
    }
    return check
}
const lock = creatlock(); // Create the lock
lock("secret123"); // ACCESS GRANTED - try different keys each time
lock("wrong"); 

function countdown(n) {
  if (n <= 0) {
    console.log("Go");
    return;
  }
  
  setTimeout(() => {
    console.log(n);
    countdown(n - 1); // Recursive call with decremented value
  }, 1000);
}

countdown(3);
// Output: 5, 4, 3, 2, 1, "Done!" (with 1 second between each)


const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 2000);
});

const myFirstPromise = new Promise((resolve, reject) => {
  // Simulate an async operation (like fetching data)
  setTimeout(() => {
    const success = true; // Change to false to see reject
    
    if (success) {
      resolve("Success! Pizza delivered!"); // Promise fulfilled
    } else {
      reject("Sorry, no pizza today :("); // Promise rejected
    }
  }, 2000); // Wait 2 seconds
});

// Using the promise:
myFirstPromise
  .then(result => console.log(result)) // "Success! Pizza delivered!"
  .catch(error => console.log(error)); // Only runs if rejected

mysecondpromise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Data loaded")
    },2000);
})
.then(data => {
    console.log(data)
})

function walk_dog(){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      const walked = true
      if(walked){
           resolve("am working the dog")
      }
      else{
        reject("u failed to walk the dog")
      }},1000);

})
}
function clean(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
          const cleaned = false
          if(cleaned){resolve("am cleaning the chicken")}else{
            reject("u failed to clean the house ")
          }
          
    },1500)
    
  })

}
function trash(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
           const trashed = false
           if(trashed){resolve("am taking out the trash")}
           else{reject("u failed to takr the trash")}
          
    },2000)
    
  })

}

/*walk_dog().then(value => {console.log(value); return clean()})
          .then(value => {console.log(value); return trash()})
          .then(value => {console.log(value); console.log("we are done cleaning")})
          .catch(error => console.log(error)) 

async function dochores(){
   try{
   const walk = await walk_dog();
     console.log(walk);

     const cleaning = await clean();
     console.log(cleaning);

     const trashing= await trash();
     console.log(trashing);
    }
    catch(error){
      console.log(error)
    }
     
}    

dochores()

function walkTheDog(callback) {
    setTimeout(() => {
        console.log("✅ Dog walked");
        callback("dog leash");
    }, 1000);
}

function takeOutTrash(dogLeash, callback) {
    setTimeout(() => {
        console.log("✅ Trash taken out");
        callback("trash bag");
    }, 1000);
}

function sleep(trashBag, callback) {
    setTimeout(() => {
        console.log("😴 Going to sleep");
        callback("sweet dreams");
    }, 1000);
}

// The callback chain:
walkTheDog((leash) => {
    takeOutTrash(leash, (trashBag) => {
        sleep(trashBag, (dreams) => {
            console.log("All done for the day!");
        });
    });
});



function walkTheDog() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ Dog walked");
            resolve("dog leash"); // Pass data to next step
        }, 1000);
    });
}

function takeOutTrash(dogLeash) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ Trash taken out");
            resolve("trash bag"); // Pass data to next step
        }, 1000);
    });
}

function sleep(trashBag) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("😴 Going to sleep");
            resolve("sweet dreams");
        }, 1000);
    });
}


walkTheDog()
    .then((leash) => takeOutTrash(leash))
    .then((trashBag) => sleep(trashBag))
    .then((dreams) => console.log("All done for the day!"))
    .catch((error) => console.log("Something went wrong:", error));


async function eveningRoutine() {
    try {
        const leash = await walkTheDog();
        const trashBag = await takeOutTrash(leash);
        const dreams = await sleep(trashBag);
        console.log("All done for the day!");
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}
*/
//eveningRoutine();    



function wakeUp() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🌅 Waking up...");
            resolve("morning energy"); // Store this for next step
        }, 1000);
    });
}

function goToSchool(morningEnergy) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🎒 Going to school with", morningEnergy);
            resolve("school bag"); // Store this for next step
        }, 1000);
    });
}

function play(schoolBag) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🎮 Playing after school with", schoolBag);
            resolve("happy mood"); // Store this for next step
        }, 1000);
    });
}

function comeHome(happyMood) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🏠 Coming home with", happyMood);
            resolve("tired but happy"); // Final stored value
        }, 1000);
    });
}

// The complete chain:
wakeUp()
    .then((energy) => goToSchool(energy))
    .then((bag) => play(bag))
    .then((mood) => comeHome(mood))
    .then((finalState) => {
        console.log("🎉 Day complete! Final state:", finalState);
    });