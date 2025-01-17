console.log('Javascript through external file...');
// {let x=5;
//   let
//     x=8;
// console.log(x);
// }
// console.log(x); not possible
// {
//     var z = 12.25;
//     var z=20;
//     console.log(z);
// }
// console.log(z);

//for(let i=0;i<5;i++)
// {
//   console.log(i);
// }

// let i=0;
// while(i<5)
// {
//   console.log(i);
//   i++;
// }
// let i=0;
// do{
//   console.log(i);
//   i++;
// }while(i<7);

// var age=15;
// if(age>=18)
// {
//   console.log("Able to vote!!!");
// }
// else{
//   console.log("Unable to vote!!!");
// }

// let day=1;
// switch(day)
// {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day !!!");
// }

//Object creation
// let rectangle ={
//   length:5,
//   breadth:3,
//   draw: function(){
//     console.log("Drawing rectangle...");
//   }
// }





//Object creation through factory function
//function createRectangle()
// {
//   return createRectangle={
//   length:4,
//   breadth:2,

//   draw(){
//     console.log("Creating rectangle...");
//   }
// };
// }

// let obj1 = createRectangle();
// console.log(obj1.length);
// console.log(obj1.breadth);
// obj1.draw();

// function createRectangle(len,bre){
//   return rectangle={
//   length:len,
//   breadth:bre,

//   draw(){
//     console.log("Creating rectangle...");
//   }
// };
// }

// let obj1 = createRectangle(7,6);
// let obj2 = createRectangle(10,45);
// console.log(obj1.length);
// console.log(obj1.breadth);
// obj1.draw();


//Object creation through constructor function
// function Rectangle(len,bre)
// {
//   this.length =len,
//   this.breadth =bre,
//   this.draw=function(){
//     console.log("Drawing...");
//   }
// }

// let obj = new Rectangle(6,3);


//Primitives
// let a=10;
// function inc(a)
// {
//   a++;
// }
// console.log(a);

//References
// let a={value:10};
// function inc(a)
// {
//   a.value++;
// }
// inc(a);
// console.log(a.value);

//Iterating through loops
//For-in loop
// let rectangle={
//   length:3,
//   breadth:1
// };

// for(let key in rectangle)
// {
//   //keys are reflected through variables
//   //values are reflected through rectangle[key]
//   console.log(key,rectangle[key]);
// }


//for-of
// for(let key of Object.entries(rectangle))
// {
//   console.log(key);
// }

//For finding any value or prop present in object or not
// let rectangle={
//   length:1,
//   breadth:2
// };

// if('breadth' in rectangle)
// {
//   console.log("Present");
// }
// else
// {
//   console.log("Absent");
// }


//Object Cloning
//1.Iteration
// let src={value:10};
// let dest={};
// for(let key in src)
// {
//   dest[key] = src[key];
// }
// console.log(dest);

//2.Assign
// let src={a:10,b:15,c:3};

// let dest=Object.assign({},src);

//3.Spread
// let src={a:10,b:20};
// let dest={...src};



//Array
// let numbers = [2,3,5,8];
// console.log(numbers);

// numbers.push(15);
// console.log(numbers);

// numbers.unshift(0);
// console.log(numbers);

// numbers.splice(2,0,'a','b','c','d');
// console.log(numbers);

//Removing elements
// let numbers = [0,1,5,6,8,3];
// numbers.pop(); //Remove from end
// numbers.shift(); //Remove from start
// numbers.splice(2,2);  //Remove in middle(index,no of elements to delete)

// console.log(numbers);

//Emptying an array
// let numbers = [0,1,5,6,8,3];
// // numbers.length=0;
//      //OR
// numbers.splice(0,numbers.length);  //Making empty from 0th index to end
// console.log(numbers);

//Combining using spread
// let num1 = [1,2,3,4];
// let num2 = [5,6,7];

// let combined = [...num1,'a','b',...num2,'Omkar'];
// console.log(combined);

//Iterating through array
//let arr = [1,2,3,4,5];
// for(let value of arr)
// {
//     console.log(value);
// }


//forEach loop
// arr.forEach(function(number)
// {
//     console.log(number);
// });

// //Arrow function
// arr.forEach(number => console.log(number));

//Joining arrays
// let numbers = [1,2,3,4,5];
// let joined = numbers.join('-');
// console.log(joined);

// let str = "This is my first message";
// let parts = str.split(' ');
// console.log(parts);

//Filtering arrays
// let numbers = [1,2,-5,-6,0,4];
// let filtered = numbers.filter(function(value){
//     return value >= 0;
// });
// console.log(filtered);

// let filtered = numbers.filter(value => value <= 0);
// console.log(filtered);

//Mapping Arrays
// let numbers = [7,8,9,10];
// let s = numbers.map(function(value){
//     return 'student_no ' + value;
// });
// console.log(s);

//Function Basics
// function run(){
//     console.log('runnning');

// }
// run();

// //Named function assignment
// let stand = function walk(){
//     console.log('walking');
// }
// stand();

// //Annonymous function assignment
// let stand2 = function(){
//     console.log("walking");
// }
// let jump = stand2;
// jump();

//Function taking parameters
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,2)); //12
// console.log(sum(1,4,9,10)); //5
// console.log(sum()); //NaN
// console.log(sum(3)); //NaN

//Special object - argument
// function sum(a,b){
//     let total = 0;
//     for(let value of arguments)
//         total = total + value;
//     return total;
// }

// console.log(sum(10,15,15,15));
// console.log(sum(4));
// console.log(sum(1,2,3,4,5,6,7,8,9,10));   //Reamining arguments stored into object named 'arguments'.

//Rest operator
// function rest(a,b,...args){
//     console.log(args);
// }
// rest(1,2,3,4,5,6);

//Default parameters
// function sum(a,b,c=9,d=4){
//     return a+b+c+d;
// }
// console.log(sum(1,2));
// console.log(sum(2,3,4));

//---------------Browser Events-----------
//1.addEventListener
// function eventFunction(){
//     console.log('I have clicked on document.');
// }
// document.addEventListener('click',function(){
//     console.log("Clicked on document.");
// });

//another way
// function eventFunction(){
//     console.log ('Clicked on document.');
// }
// document.addEventListener('click',eventFunction);

//2.removeEventListener
// function print(){
//     console.log('Hii');
// }
// document.addEventListener('click',print);
// document.removeEventListener('click',print);   //both print objects are same so no event occurs as adds and removes it.

// document.addEventListener('click',function(){
//     console.log('Hii');
// });

// document.removeEventListener('click',function(){
//     console.log('Hello');
// });                           //here both print are different objects so add method works on differ print and remove works on iiffern print


//3.dispatchEvent()
// The dispatchEvent() method of the EventTarget sends an Event to the object, 
// (synchronously) invoking the affected event listeners in the appropriate order. 
// The normal event processing rules (including the capturing and optional bubbling phase) 
// also apply to events dispatched manually with dispatchEvent().
//syntax: dispatchEvent(event);

//-----------------preventDefault():------------------
let prevent = document.querySelectorAll('a');
let third = prevent[2];

third.addEventListener('click',function(event){
    event.preventDefault();
    console.log("Applied successfuly...!!!");
});