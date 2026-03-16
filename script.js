let itemAdd = document.getElementById("add");
let btnAdd = document.getElementById("btn-add");
let btnRem = document.getElementById("btn-rem");
let show = document.getElementById("array");
let myMsg = document.getElementById("message");
var display = document.getElementById("display");


display.style.height = "400px";
display.style.width = "350px";
display.style.color = "white";
display.style.background = "slategrey";
display.style.padding = "20px";
display.style.fontSize = "30px";
display.style.textAlign = "center";
display.style.marginTop = "15px";


var fruits = [];
btnAdd.addEventListener('click',()=>{
    fruits.push(itemAdd.value);
    itemAdd.value = "";
    myMsg.innerHTML = "Item has been added successfully"
    myMsg.style.color = "green";
    myMsg.style.fontSize = "20px";
})

btnRem.addEventListener('click',()=>{
    fruits.pop(itemAdd.value);
    itemAdd.value = "";
    myMsg.innerHTML = "Item has been removed successfully"
    myMsg.style.color = "red";
    myMsg.style.fontSize = "20px";
});

text = "";
show.addEventListener('click',()=>{
    for (let i = 0; i < fruits.length; i++){
        text+= fruits[i]  + "<br>";
    }
    display.innerHTML = text;
});



