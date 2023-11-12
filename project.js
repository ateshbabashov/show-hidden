let box1 = document.getElementsByClassName("box-1")[0];
let box2 = document.getElementsByClassName("box-2")[0];
let button1 = document.getElementsByClassName("button-1")[0];
let button2 = document.getElementsByClassName("button-2")[0];
let button3 = document.getElementsByClassName("button-3")[0];



button1.addEventListener("click", ()=>{
    box1.classList.add("show");
    box1.classList.remove("hidden");

    box2.classList.add("show");
    box2.classList.remove("hidden");
});

button2.addEventListener("click", ()=>{
    box1.classList.add("hidden");
    box1.classList.remove("show");

    box2.classList.add("hidden");
    box2.classList.remove("show");
});

button3.addEventListener("click", ()=>{
    box1.classList.toggle("hiddenall");
    box2.classList.toggle("hiddenall");
});

window.addEventListener("load", ()=>{
     box1.classList.add("hidden");
     box2.classList.add("hidden");
});

