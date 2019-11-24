
var i = 0;
var j = 0;
var txt = "Hi my name is Ben Ryne";
// var txt2 = "I am a Software Engineer and music + coffee enthusiast looking to make a difference solving
//     problems through software solutions.";
var speed = 50;
var txt2 = "I am a Software Engineer and music + coffee enthusiast looking to make a difference solving problems through software solutions.";

function printName() {
  if (i < txt.length) {
    document.getElementById("item").innerHTML += txt.charAt(i);
    i++;
    setTimeout(printName, speed);
  }
    // printInfo();
}

function printInfo() {
  if (j < txt2.length) {
    document.getElementById("item2").innerHTML += txt2.charAt(j);
    i++;
    setTimeout(printInfo, speed);
    }
}
