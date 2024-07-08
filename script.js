var RandomNumber1 = Math.random()*6;
RandomNumber1 = Math.floor(RandomNumber1) + 1;
var value1;
if (RandomNumber1==1) {
    document.querySelector(".img1").setAttribute('src','./images/dice1.png');
    value1 = 1;
}
else if (RandomNumber1==2) {
    document.querySelector(".img1").setAttribute('src','./images/dice2.png');
    value1 =2;
}
else if (RandomNumber1==3) {
    document.querySelector(".img1").setAttribute('src','./images/dice3.png');
    value1=3;
}
else if (RandomNumber1==4) {
    document.querySelector(".img1").setAttribute('src','./images/dice4.png');
    value1=4;
}
else if (RandomNumber1==5) {
    document.querySelector(".img1").setAttribute('src','./images/dice5.png');
    value1=5;
}
else{
    document.querySelector(".img1").setAttribute('src','./images/dice6.png');
    value1=6;
}

var RandomNumber2 = Math.random()*6;
RandomNumber2 = Math.floor(RandomNumber2) + 1;
var value2
if (RandomNumber2==1) {
    document.querySelector(".img2").setAttribute('src','./images/dice1.png');
    value2 = 1;
}
else if (RandomNumber2==2) {
    document.querySelector(".img2").setAttribute('src','./images/dice2.png');
    value2 =2;
}
else if (RandomNumber2==3) {
    document.querySelector(".img2").setAttribute('src','./images/dice3.png');
    value2=3;
}
else if (RandomNumber2==4) {
    document.querySelector(".img2").setAttribute('src','./images/dice4.png');
    value2=4;
}
else if (RandomNumber2==5) {
    document.querySelector(".img2").setAttribute('src','./images/dice5.png');
    value2=5;
}
else{
    document.querySelector(".img2").setAttribute('src','./images/dice6.png');
    value2=6;
}

if(value1 > value2){
    document.querySelector('h1').innerHTML="Player 1 Won!";
}
else if(value1 < value2){
    document.querySelector('h1').innerHTML="Player 2 Won!";
}
else{
    document.querySelector('h1').innerHTML="Game Tied!";
}


