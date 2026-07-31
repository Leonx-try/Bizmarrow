console.log(Date());
// output
console.log("uche")
// primitive data type
// variables
let name = "uche"
console.log(name)
x = 40;
// let balance=300
// const balance=300
var y = 0 

// for let to override you do sth like let balance = 200 
// then balance = 20 

// data types
// number
a=10
a=10.4
// string
n="belle"
// boolean
n= true
c=false
// non-primitive
// undefined
let d;
d = undefined;

// array is  list of items
fruits = ["mango", "banana","melon"];
console.log(fruits[2])
// console.log(fruits)
mix= ["str", "true", 56, undefined, []]

// object 
laptop = {
    brand: "Dell",
    model: "Dell 11",
    year: 2025,
    ram: 4,
    ssd: 256,
    color:"red, black"
}
console.log(laptop)
console.log(laptop.ssd)
console.log(laptop.color)
// if the number doesnt do any arithimetice shii it should be a string eg mobile number
// in js number doesnt start with 0
person ={
    name:{
        title:"Mr",
        first_name:"solomon"
    },
    mobile_number:"090876",
    course:['css', 'script']
}
console.log(person)
console.log(person.name.first_name)
console.log(person.course[1])

courses=[
    ["css", "b5", "script"],
    ["python", "cpp"],
    "tailwind"
]
// theres no nedd for cousre[0][1][0] because 0 being the first index is already called or named course
console.log(courses[1][0])

// ARRAys
// ARRAys
// ARRAys learn 

courses ={
    frontend:[
        {
            name : "css", 
            amt : 400,
            duration : "4 weeks",
            ouline : ["selectors", "colors"]
        },
        {
            name : "b5",
            amt : 200,
            duration : "3 weeks",
            outline : []
        }
    ]
}
console.log(courses.frontend[0].name)
// console.log(courses.frontend[0].outline[0])

for (x in courses){
    console.log(x + ":"+ courses[x])
    for (y in courses[x]){
        console.log(courses[x][y])
    }
}

// operators + - / * % **
// comparison operators  ==, ===, >, <, >=, <=
console.log(10===10) // equality - true: for the vlaue and data type
console.log(10==="10") // equality - false: for the vlaue and data type

// logical operators : &&-and, ||-or, ! not

// ternary operator (?)
test = 2 < 0 ? "True" : "False"
console.log(test) 
bal= 100
w =30
b = bal>w ? "yes can withdraw" : "please add money"
console.log(b)

color_mode = "dark"
link =  color_mode == "dark"? "dark.css" : "lite.css"
console.log(test)
color_mode = "lite"

// typeof operator
console.log(typeof [])
// since its not plus javascript checks if both is a number then it calculates them thats we got 1 below
console.log(10 / "10") // 1
console.log(10 / "10we") // NaN

user = {
    name : "Solomon",
    dob: 1960,
}
console.log(" My name is " + user.name + " am "  + (2026 - user.dob) + " years old ")
console.log(` My name is ${user.name} am ${2026-user.dob} years old `)
// back  tick take strings on more than one line
//javascript automayically reads whats in the {} as variable

// function
function heee(){
    //block of code
    console.log("welcome")
}
heee()

function sum(a,b){
    console.log(a+b)
}
sum(2,9)
function sum(a,b){
    console.log(a+b)
}
sum(2,9)
function sum(a = 0,b = 0){
    console.log(a+b)
}
sum()
// this second one using the default functio type prevents lemme say errors and shii so calloing sum gives out 0


// return
function solve (a = 0, op = "+", b = 0){
    r= `${a} ${op} ${b}`
    return eval(r)
}
t = solve(4, "/",50)
console.log(solve(3, "-", 90))
console.log(t)

t = eval("12/12")
console.log(t)
// after using return it evaluates then stores it in t then console.log(t) prints it


// 1. create 4 for each data type
//2.'create an array of 5 product each product name, amt, quantity, store_name, id
//3.return can vot if age is above 18 else cannot vote

// assignment

// number 1
// strings
n = ""
Name = "Emmanuel"
subject = `maths 202`
age = '24'

// number
n = 23
n = 23.4
n = 3
n = 456

// array
names = ["john", "mark"]
food = ["apple", "banana", "beans"]
score = [2,3,4,5,7]
places = ["abuja", "jos"]

// object
names = {
     name: "Leon",
      age: 18
}
car = {
     name: "toyota",
      model: "samuel"
}
names = {
     name: "Leon",
      age: 18
}
names = {
     name: "Leon",
      age: 18
}

// number 2  
product = {
    product_name : "toothpaste",
    amount : "$500",
    quantity : 3,
    store_name : "colgate",
    id : 2415662
}

// number 3 

function vote_age(n){
    let vote = n >= 18 ? "can vote" : "not eligible to vote"
    return vote;
}
let op = vote_age(18)
console.log(op)

 

// methods

// car = {
//     color: "red",
//     brand: "bmw"
// }
// car2 = carx

// Methods

// car = {
//     color: 'red',
//     brand: "BMW",
//     model: "BMW12",
//     qty: 12,

//     is_available: function() {
//         status = this.qty > 0;
//         return status;
//     }
// }

// car2 = { ...car }
// car2.model = "BMW14"
// car2.qty = 0

// car.is_available()

// car2.brand = 'Fiat'
// console.log(car)

// t = car.is_available() ? "Can buy" : "Cannot buy"
// x = car.is_available() ? "Order now" : "Come back next week"

// console.log(t)
// console.log(car.is_available)
// console.log(car2.is_available)
// console.log()


// // string methods, number methods, array methods, object method
// // string

// str = "yellow World"

// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str[0]) // first item
// console.log(str[11]) // 12th item
// console.log(str[str.length - 1]) // string length - 1
// console.log(str.indexOf('low')) // a number : index
// console.log(str.indexOf('x')) // not found : -1
// console.log(str.includes('x')) // bool
// console.log(str.lastIndexOf('o')) // last occurance : index
// console.log(str.charAt(7)) // return a string
// console.log((10).toString()) // convert to string "10"
// console.log((10).toString(16)) // convert to base 8
// console.log(str.concat(' Am new to script')) // concat
// console.log(str.concat(' Am new to script').toUpperCase()) // concat and convert to upper case


// // Number and Mat

// console.log((10.5).toFixed())
// console.log((10.1239908765435678).toFixed()) // rounds to the nearest int or dp
// console.log((10.1239908765435678).toFixed(3)) // rounds to the nearest int or dp
// console.log(Number("10")) // converts to number
// console.log(Math.PI) // 3.14
// console.log(Math.floor(12.9)) // 12 rounds down a number
// console.log(Math.ceil(12.2)) // 13 rounds up a number
// console.log(Math.round(12.2)) // 12 rounds to the nearest int
// console.log(Math.random()) // returns a random number btw 0-1
// console.log((Math.random() * 9999999999).toFixed())
// console.log(n1) // returns a random number btw 0-1


// array methods, Object
// loops : for, while
// create a random password generator
// do later brah 

// for loop 

// for (let i = 0; i < length; i ++){
//     // code here
// }

// while loop 
while (a < 5){
    console.log(a)
    a++
}

array = ['apple', 'red', 'brown']
for( i = 0; i < array.length; i ++){
    console.log (array[i])
}

person = {
    name : "solomon",
    course: " frontend",
    duration : "4 weeks"
}
// x is for name, cousre etc then person.x prints he content
for (x in person ){
    console.log(x)
}
for (x in person ){
    console.log(person.x)
}
for (x in person ){
    console.log(`${x} : ${person[x]}`)
}
for (x in person ){
    console.log(`${x[0].toUpperCase()}${x.slice(1)} : ${person[x]}`)
}
// dont use person.x while looping object use person[x]

// slice [1] returns from index 1 till the end

product = [
    {id:1, amt:300, name:"laptop", qty:12},
    {id:2, amt:120, name:"table", qty:2},
    {id:3, amt:30, name:"ac", qty:7},
    {id:4, amt:200, name:"tv", qty:22},
    {id:5, amt:500, name:"car", qty:10},
]

for(i = 0; i < product.length; i ++){
    console.log(product[i])
}

analytics = {
    total_qty : 0,
    total_product : product.length,
    total_product_amt : 0, 
}
//  below is the syntax for writing forEach
product.forEach (i => {
    console.log(i.name)
    analytics.total_qty += i.qty;
    analytics.total_product_amt += i.amt;
    console.log(`=======================================`)

    console.log(`Name : ${i. name}`)
    console.log(`Qty : ${i. qty}`)
    console.log(`Unit : ${i. amt}`)
    console.log(`payment total : ${i. amt * i. qty}`)
    
    console.log(`=======================================`)
})
console.log(analytics)
// using i print the index and using for each prints each index content 
