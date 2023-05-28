// jay swaminarayan

// =================================== Core ===================================

// console.log("Hello world");

// alert("This is alert message");

// console.warn("THis is warning message");

// console.error("This is error message");

// document.write("This is write in page..........");

// ==================================== Variables ===============================
// var num1 = 21;
// var num2 = 3;
// console.log(num1+num2);
// document.write(num1+num2)

// ======================================= Data Type ==============================

// ============= Primitive =============
// [1].Undefined:
// var und;
// document.write(und);

// [2].Null:
// var n = null;
// document.write(n);

// [3].Number:
// var n = 12;
// document.write(n);

// [4].Null:
// var n = null;
// document.write(n);

// [5].String:
// var n = "Hello";
// document.write(n);

// [6].Boolean:
// var n = true;
// document.write(n);

// ========= Reference datatype ==========
// [7].Array:
// var arr = [1,2,3,4,5,6];
// document.write(arr);

// [8].Objecgts:
// var n = {name:"Pradip",roll_no:20};
// document.write(n.name);

// ================================================= Conditional operator ===========================================
// var num1=121;
// num1==121 ? document.write(true) : document.write(false)

// ================================================ Function ========================================================
// function avg(a,b){
//     c = a+b/2;
//     return c
// }
// d = avg(2,3);
// document.write(d);

// =================================== If-Else ==============================
// function avg(a,b){
//     if(a>b){
//         document.write("a>b")
//     }
//     else if(a==b){
//         document.write("a==b")
//     }
//     else if(a<b){
//         document.write("a<b")
//     }
// }

// b = avg(2,1)

// ============================================== for loop =====================================
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr)

// for(var i=0; i<arr.length; i++){
//     document.write(arr[i]);
// }

// ============================================== forEach loop =====================================
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr)

// arr.forEach(function(e){
//     document.write(e);
// })

// ========================================= While loop =============================
// let arr = [1,2,3,4,5,6,7,8,9]
// let i = 0
// while(i<arr.length){
//     document.write(arr[i]);
//     i++;
// }

// ========================================= do...while... loop ==========================
// let arr = [1,2,3,4,5,6,7,8,9]
// let i = 0
// do{
//     document.write(arr[i]);
//     i++;
// }while(i<arr.length)

// =========================================== continue,break ==================================
// var arr = [1,2,3,4,5,6,7,8,9]

// let i=0
// while(i<arr.length){
//         document.write(arr[i]);

//         if(arr[i]==6){
//             break;
//         }
//         i++;
//     }

// var arr = [1,2,3,4,5,6,7,8,9]

// for(var i=0; i<arr.length; i++){
//     if (i==2){
//         continue
//     }
//     document.write(arr[i]);

// }

// ===================================== Date and Time =======================
// let mydatetime = new Date();

// document.write(mydatetime.getTime());
// document.write(mydatetime.getTimezoneOffset(),"-");
// document.write(mydatetime.getFullYear(),"-");
// document.write(mydatetime.getDay(),"-");
// document.write(mydatetime.getMinutes(),"-");
// document.write(mydatetime.getMilliseconds(),"-");

// =============================== DOM Manipulation ==============================
// ========== Type below script in console ===========
// document.getElementById("ClickMe")
// document.getElementById("ClickMe").style.border = '2px solid blue'

// ================================= Query Selecting =================================
// q = document.querySelector("#ClickMe")
// q = document.querySelector(".Clickclass")

// ============================== Event Handelar ========================
// function Clicked(){
//     alert("I am button....")
// }

// =============================== Document Load =======================================
// window.onload=function(){
//     alert("Window is loaded.......")
// }

// ================================ addEventListener ======================================
// var x = document.getElementById("ClickMe");
// x.addEventListener("click",myFunctions);

// function myFunctions(){
//     alert ("Clicked....");
// }

// var x = document.getElementById("ClickMe");
// x.addEventListener("mouseover",myFunctions);

// function myFunctions(){
//     alert ("Clicked....");
// }

// var x = document.getElementById("ClickMe");
// x.addEventListener("mouseout",myFunctions);

// function myFunctions(){
//     alert ("Clicked....");
// }

// ====================================== Arrow Function(Usefull) ===========================
// sum = (a,b) => {return a+b}
// sum = (a,b) => a+b

// s = sum(1,5)
// document.write(s)

// ============================================= Settimeout and setinterval ==============================
// Timerepeat = () => {
//     alert("I am set time out function....")
// }
// crl = setTimeout(Timerepeat,2000);

// ===============================================
// clr = setInterval(() => {
//     alert("I am fire every 6000 mlsecound")
// }, 6000);

// clearInterval(clr)

// ======================================================= JSON(Usefull) ==========================================

// ============ JSON to STR =========
// obj = {
//     name:"Pradip",
//     surname:"Kachhadiya",
//     Roll_no:369
// }
// str = JSON.stringify(obj);
// document.write(typeof str);
// document.write(typeof obj);
// document.write(str);

// =========== STR to JSON ===========
// parsed = JSON.parse(str)
// document.write(parsed.name);

// ======================================= Template Literals ================================
// const a =1212
// document.write(`This my literals ${a}`)

// ============================================= prompt method =========================
// prompt("Enater Your Name: ")

// ===================
// var a = []
// while(a!="," || a!=""){
//     b = prompt("Enater Your Name: ")
//     if (b!=null && b!="," && b!=""){
//         a.push(b)
//     }
//     if (a!="" && a!=","){
//         break
//     }
// }
// document.write(a.slice(-1));

// ================================ Rest Parameters ================================
// function myFunctions(a,...b){
//     document.write(b);
// }
// myFunctions(1,3,4,5)

// ======================================= Anonymous function ==========================
// var myfunc = function(){
//     document.write("This is anonymous function");
// }
// myfunc()


// ============================================= IIFE Function ==============================
// (function myFunctions(a,...b){
//     document.write(b)
// })(1,3,4,5);

// ================================================= Factory Function ==============================
// function mobile(model_no){
//     return{
//         model:model_no,
//         price:price=()=>3000
//     }

// }
// var nokia = mobile(2001)
// document.write(nokia.model,nokia.price())

// ============================================== Constructor this keyword ===============================
// function mobile(model){
//         this.model=model,
//         this.price=price=()=>3000
// }
// var nokia = new mobile('nokia');
// document.write(nokia.model,nokia.price())

// ================================================ ES-6 Class =============================================
// [1]Class Declairetion================================
// class Mobile{
//     constructor(){
//         this.a = 10
//         this.show = function myFunc(){return "I am function"}
//     };
//     display(){
//         return "I am protype member"
//     }
// }
// var obj = new Mobile()
// document.write(obj.a,obj.show(),obj.display())

// [2]Class Expresion===========================================
// var Mobile = class{
//     constructor(){
//         this.a = 10
//         this.show = function myFunc(){return "I am function"}
//     };
// }
// var obj = new Mobile()
// document.write(obj.a,obj.show())

// ==================================================== Class Inheritance(Usefull) =============================
// class Father{
//             showFmony(){
//                 return "This is father money"
//             }
// }
// class son extends Father{
//     showsmony(){
//         return "This is son money"
//     }
// }
// var obj = new son()
// document.write(obj.showsmony(),obj.showFmony())

// ===================================================== Super Method ===================================
// class Father{
//     constructor(money){
//         this.a = money
//     }
//     showFmoney(){
//                 return this.a + " is father money"
//     }
// }
// class son extends Father{
//             constructor(money){
//                 super(money);
//             }
//             showsmoney(){
//                 return this.a + " is son money"
//             }
// }

// var obj = new son(2000)
// document.write(obj.showsmoney(),obj.showFmoney())

// =========================================== static method =========================================
// // This method's function call only of their class name not a make object
// class Father{
//     static show(){
//                 return "This is static method"
//     }
// }
// document.write(Father.show())


// ========================================= Random Method =======================================
// document.write(Math.random()*100+1)

// ========================================= Window Methods =======================================
// var mywindow = window.open("https://www.google.com","_blank")

// window.scrollBy({top:20,behavior:"smooth"});
// window.scrollTo({top:0,behavior:"smooth"})

// ============================================= Exception Handling ==================================
// function homearea(w,h){
//     if(isNaN(w) || isNaN(h)){
//         document.write("<br>Parameter not a number.")

//     }
//     else{
//         document.write(w*h)
//     }
// }
// try{
//     homearea(10,"ds")
// }
// catch(e){
//     document.write(e)
// }
// document.write("<br>Have a nice day")

// ============================================ Callback Function =========================================
// [1]Synchronous function ===============================
// function myFunc(value){
//     document.write(value);
// }
// function myFunc1(callback){
//     var a = 10;
//     callback(a)
// }

// myFunc1(myFunc)
// document.write("<br>End................")

// [2]Asynchronous function ===============================
// setTimeout(() => {
//     document.write("I am call......")
// }, 3000);
// document.write("End...............................")

// ================================================== Map Method(Usefull) =======================================
// var arr = [1,2,3,4,5,6,7,8,9]
// var mymap = arr.map((value,index,array) => {
//     document.write(value,"<br>");
//     // document.write(index,"<br>");
//     // document.write(array,"<br>");
// }
//     )

// =================================================== Array Destructuring ====================================
// let arr = [1,2,3]
// let [arr1,arr2,arr3] = arr
// document.write(arr1)
// document.write(arr2)
// document.write(arr3)

// ======================================== Module Import and Export =====================================
// [1]export default========Define only one time===============
// import Student from "./E&I.js"

// let obj = new Student()
// console.log(obj.name())

// [2]export=============================================
// import {Sir} from "./E&I.js"
// Sir()


// ====================================== Spread Operator =======================
// var a = [10,20,30]
// var b = [...a]
// a[0] = 40
// console.log(a)
// console.log(b)