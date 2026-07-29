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