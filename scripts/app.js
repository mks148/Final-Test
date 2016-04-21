
function usedice(){
var gamedice1 = document.getElementById("mydice1");//creating variables for my dice1

var gamedice2 = document.getElementById("mydice2");// here for mydice2

var newdice1=Math.floor(Math.random()*6)+1; //using math random to generate randomly

var newdice2=Math.floor(Math.random()*6)+1;//using math random to generate randomly

var mytext = document.getElementById("text");//variable for mytext to show total

var diceTotal = newdice1 + newdice2; //adding both numbers

document.images["mydice1"].src=eval("face"+newdice1+".src") //dislaying images using variables in script under index file

document.images["mydice2"].src=eval("face"+newdice2+".src")

mydice1.innerHTML =newdice1;

mydice2.innerHTML =newdice2;

mytext.innerHTML= "You Score "+diceTotal+".";//showing the total count
};

