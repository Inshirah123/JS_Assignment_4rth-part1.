// MATH	EXPRESSIONS
document.write(` <h1><strong>Javascript 4rth Assignment</strong></h1> `);


//Question 1. Write a program that takes input from user
document.write(`<h3>Question no 1: Variable.</h3>`);
var Username = prompt("Enter your name");
// Display the result using alert
document.write("Hello:"+ Username,);
// hr line
document.write(`<hr>`);


// Question 2 write the number for its multiplicaton table.
document.write(`<h3>Question 2: Multiplication Table 4.</h3>`);
let num = prompt("Enter a number for its multiplication table");

 if(num===null) {num=5;}
 else if(num === ""){num=5;}

{document.write(`${num} x 1 = ${num * 1}<br>`);
document.write(`${num} x 2 = ${num * 2}<br>`);
document.write(`${num} x 3 = ${num * 3}<br>`);
document.write(`${num} x 4 = ${num * 4}<br>`);
document.write(`${num} x 5 = ${num * 5}<br>`);
document.write(`${num} x 6 = ${num * 6}<br>`);
document.write(`${num} x 7 = ${num * 7}<br>`);
document.write(`${num} x 8 = ${num * 8}<br>`);
document.write(`${num} x 9 = ${num * 9}<br>`);
document.write(`${num} x 10 = ${num * 10}<br>`)}
// hr line
document.write(`<hr>`);


// Question 3 write a program to take "city" name as input.
document.write(`<h3>Question no 3:City of lights.</h3>`);
var city = prompt("Enter your city name");
if (city === "Karachi") {
    document.write("<br>*The city of lights");
} else {
    document.write("<br>*Welcome!");
}
// hr line
document.write(`<hr>`);


// Question 4 write a program to take "gender' as input.
document.write(`<h3>Question no 4: Gender-based Greeting.</h3>`);
let gender = prompt("Enter your gender");
if (gender === "female") {
    document.write("<br>*Good Morning Ma'am");
} else {
    document.write("<br>*Good Morning Sir");
}
// hr line
document.write(`<hr>`);


// Question 5 write a program to take input color of traffic signal.
document.write(`<h3>Question no 5: Color of Traffic Signal.</h3>`);
 var color = prompt("signal color");
 if (color=== "red"){document.write("<br> *vehicles must stop");}
 else if (color === "yellow") {
    document.write("<br> *vehicles should get ready to move ");
}
else if (color === "green") {
    document.write("<br> *vehicles can move now");
}
// hr line
document.write(`<hr>`);


// Question 6 write a program to take input of max and current age.
document.write(`<h3>Question no 6:Max and current age.</h3>`);
var a= 10;
var b = 15;
if(a<=b) document.write("*You are eligible");
else{
    document.write("*You are welcome");
}
// hr line
document.write(`<hr>`);


// Question 7 write a program to take input of fuels in car.
document.write(`<h3>Question no 7:Fuels in car.</h3>`);
var fuel =prompt("Input fuels in car");
if (fuel<=0.25) {
    document.write("*Please refill the fiel in car");
}
else {
    document.write("*Please don't refill the fiel in car");
    
}
// hr line
document.write(`<hr>`);


// Question 8 Run the code and check whether alert message is deployed or not.
document.write(`<h3>Question no 8:</h3>`);

var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}
if (true) {
 alert("True");
}
if("car" < "cat"){
 alert("car is smaller than car");
}
document.write("*It is prove that alert can't diploy the message on page.")
// hr line
document.write(`<hr>`);


//Question 9
document.write(`<h3>Question no 9:Marksheet.</h3>`);
let x=prompt("Marks obtained in ENGLISH");
let y=prompt("Marks obtained in SCIENCE");
let z=prompt("Marks obtained in MATHEMATICS");
let w= parseFloat(x) + parseFloat(y) + parseFloat(z)
document.write("obtained marks : ",w , "<br>")
let o=100
let p=300
let percentage= (w*o) / p;
document.write("obtained marks : ", p  , "<br>",percentage)
if (percentage <= 80) {
    document.write("<br>Grade :A-one" , "<br>Remarks : Excellent")
}
else if (percentage <= 70) {
    document.write("<br>Grade :A " , "<br>Remarks : Good");
}

else if (percentage <= 60) {
    document.write("<br>Grade :B" , "<br>Remarks : you need to improve");

}
else if (percentage >= 60) {
    document.write("<br>Grade :Fail" , "<br>Remarks : sorry");
}
 // hr line
  document.write(`<hr>`);
