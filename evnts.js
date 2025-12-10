//eventlistener = list for specific events to create interactive web pages.
//events:click, mouseover, mouseout, keydown, keyup, load, unload, submit, change
//.addEventListener(event, callback)

const btn = document.getElementById("myBox");
const btn2 = document.getElementById("mybtn");
function changeColor(event){
    btn.style.backgroundColor = "blue";
    btn.textContent = "Clicked!";
};

btn2.addEventListener("click", changeColor);
btn2.addEventListener("mouseover", event => {
    btn.style.backgroundColor = "red";
    btn.textContent = "u just hovered me!";
});
btn2.addEventListener("mouseout", event => {
    btn.style.backgroundColor = "yellow";
    btn.textContent = "u just left me!";
});