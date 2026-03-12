// How to accept user input 

// There are two way :

// 1. Easy Way = window promt 
// 2. PROFESSIONAL WAY = HTML textbox

// let username;

// username = window.prompt("What is your name")

// console.log(username)
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}