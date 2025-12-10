//dom navigation = the process of navigating through the structure of a html document using js 

//ways to navigate the dom
//.firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//.children

/*
//-------.firstElementChild-------
const element  = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.color = 'red'; //changes the color of the first child element to red

//-------.lastElementChild-------
const lastChild = element.lastElementChild;
lastChild.style.color = 'blue'; //changes the color of the last child element to blue

//----------.nextElementSibling--------
const secondChild = document.getElementById("apple").nextElementSibling;
secondChild.style.color = 'green'; //changes the color of the second child element to green
const vvv = document.getElementById("fruits").nextElementSibling;
vvv.style.color = 'purple'; //changes the color of the next sibling element of fruits to purple

//---------.previousElementSibling--------
const previousSibling = document.getElementById("banana").previousElementSibling;
previousSibling.style.color = 'orange'; //changes the color of the previous sibling element of banana to orange

//---------.parentElement--------
const parentElement = document.getElementById("apple").parentElement;
parentElement.style.border = '2px solid black'; //adds a border to the parent element of apple
//---------.children--------
const children = element.children;
for(let i = 0; i < children.length; i++){
    children[i].style.fontWeight = 'bold'; //makes the font weight of all child elements bold
}

//ADD AND CHANGE HTML 
//.innerHTML
//.outerHTML
//.textContent

//STEP 1:CREATE THE HTML ELEMENTS
const newH1 = document.createElement("h1");
//STEP 3: ADD ATTRIBUTES / PROPERTIES TO THE ELEMENTS
newH1.textContent = "Hello World!";
newH1.id = "myH1";
newH1.style.color = "blue";
newH1.style.textAlign = "center";
newH1.style.fontFamily = "Arial, sans-serif";
newH1.style.marginTop = "20px";
//STEP 4: ADD THE ELEMENTS TO THE DOM
//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").append(" - Welcome to DOM Manipulation!");
const box1 = document.getElementById("box2");
document.body.insertBefore(newH1, box1);
//STEP 5:REMOVE HTML ELEMENTS
document.getElementById("box1").remove();
//OR
//const boxToRemove = document.getElementById("box1");
//boxToRemove.parentElement.removeChild(boxToRemove);
//document.body.removeChild(newH1);


const myheadind = document.getElementById("heading");
myheadind.style.color = 'red'
myheadind.style.textAlign='center'

const box = document.getElementsByClassName("box");
box[0].style.backgroundColor     = 'blue'
box[1].style.backgroundColor     = 'green'
box[2].style.backgroundColor     = 'yellow'
box[3].style.backgroundColor     = 'purple'
box[4].style.backgroundColor     = 'orange'

for(let i=0; i<box.length; i++){
    box[i].style.color = 'white'
    box[i].style.width = '100px'
    box[i].style.height = '100px'
    box[i].style.display = 'inline-block'
    box[i].style.margin = '10px'
    box[i].style.lineHeight = '100px'
    box[i].style.textAlign = 'center'
    box[i].style.fontSize = '20px'
    box[i].style.fontFamily = 'Arial, sans-serif'
}//html collection dont support forEach loop

const H4 = document.getElementsByTagName("h4");
const list = document.getElementsByTagName("li");
for(let i=0; i<list.length; i++){
   
    list[i].style.backgroundColor = 'lightgray'
}
H4[0].style.color = 'brown'
H4[0].style.textAlign = 'center'



//const roots = document.getElementById("roots");
const roots = document.querySelectorAll("ul");


roots.forEach(element => {
    const first = element.firstElementChild;
    first.style.color = 'red';
    
});




const elements = document.getElementById("roots");
elements.style.color = "red";
const tagz = document.getElementsByTagName("h4");
Array.from(tagz).forEach(element => {
    element.style.color = "blue";
});

const classz = document.getElementsByClassName("fruits");

Array.from(classz).forEach(element => {
    element.style.backgroundColor = "yellow";
});

const queryz = document.querySelectorAll("li");
queryz.forEach(element => {
    element.style.fontWeight = "bold";
});


//const firstChild = elements.firstElementChild;
//firstChild.style.textDecoration = "underline";

const allin = document.querySelectorAll("ul");
allin.forEach(element => {
    const lastChild = element.lastElementChild;
    lastChild.style.textDecoration = "underline";
});


const H1element = document.createElement("h1");
H1element.textContent = "losika";
H1element.id = "myh1"
H1element.style.textAlign = "center"
H1element.style.color = "tomato"
//document.getElementById("box1").prepend(H1element)
const box2 = document.getElementById("box2");
document.body.insertBefore(H1element,box2);
document.body.removeChild(H1element);

const newlist = document.createElement("li");
newlist.textContent= "coconut";
document.body.append(newlist);
const box = document.getElementById("cruciferous")
//document.body.prepend(H1element);




const mybox = document.getElementById("mybox")
function changes(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "yh mn clicked me";
}
mybox.addEventListener("click",changes);

const mybutton = document.getElementById("mybutton")

mybutton.addEventListener('click',event =>{
    event.target.style.backgroundColor = "red";
});
mybutton.addEventListener('mouseout',event =>{
    event.target.style.backgroundColor = "green";

});
mybutton.addEventListener('mouseover',event =>{
    event.target.textContent = "come back here";
});



const mybox = document.getElementById("mybox");

document.addEventListener("keydown",event =>{
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "go on!"
});
document.addEventListener("keyup",event =>{
    mybox.style.backgroundColor = "blue";
    mybox.textContent = "its up!"
});

const box = document.getElementById("mybox");
let moveamout = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", event =>{
     if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                 y -= moveamout;
                 break;
            case "ArrowDown":
                 y += moveamout;
                 break;
            case "ArrowLeft":
                 x -= moveamout;
                 break;
            case "ArrowRight":
                 x += moveamout;
                 break;
        }
        box.style.top = ` ${y}px)`;
        box.style.left = ` ${x}px)`;
}
});


const mybutton = document.getElementById("mybutton");
mybutton.classList.add("enabled");
mybutton.classList.remove("enabled");
*/

//const names = ["losika","joe","maria","sarah","david","linda","james","patricia","robert","jennifer","michael","elizabeth","william","barbara","charles","susan","thomas","jessica","christopher","karen"]
//const jsonstring = JSON.stringify(names)
//console.log(jsonstring)


fetch("pesrson.json")
.then(response => response.json())
.then(value => console.log(value))
.catch(error => console.error);
