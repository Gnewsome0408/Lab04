// Good morning is 5 to 10
// Good afternoon is 10 to 14
// Good evening is 14 to 20
// and the rest Good Night

// var time = prompt ("what is the time?");
// if (time >5 && time <=10) {
//     alert ("Good Morning");
// }
// else if (time >10 && time <=14){
//     alert("Good afternoon");
// }
// else if (time >14 && time <=20){
//     alert("Good Evening");
// }
// else {
//     alert("Good Night");
// }

var today = new Date();
var hourNow =today.getHours ();
var greeting; 


if (hourNow >18) {
    greeting ="Good Evening!";
}
else if (hourNow >12) {
    greeting ="Good Afternoon!";
}
else if (hourNow >0) {
    greeting ="Good Morning!";
}
else {
    greeting = "Welcome!";
}

document.write ('<h3>' + greeting + '</h3>');

var name = prompt ("what is your name? ");

alert ("How are you " + name);

document.getElementById("heading").innerHTML = name;
