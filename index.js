//1
function a(m) {
    alert (`${m}`);
}
a("Привет!")

//2
function cube(b) {
    return b**3;
}
console.log(cube(3))

//3
function avg2(a, b) {
    a = a || 0;
    b = b || 0;
    return (a + b) / 2;
}
console.log(avg2(1, 2))
console.log(avg2(10, 5))

//4
function sum3(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}
console.log(sum3(1,2,3))
console.log(sum3(5,10,100500))
console.log(sum3(5,10))

//5
function intRandom(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.round(Math.random ()*(max - min) + min)
}      
console.log(intRandom(2, 15))
console.log(intRandom(-1, -1))
console.log(intRandom(0, 1))
console.log(intRandom(10))

//6
function greetAll (name){
    let str ="" 
    for (let i = 1; i < arguments.length; i++) {
        str += `, ${arguments[i]}`;
    }
    return alert("Hello, " + name + str);
}
greetAll("Superman")
greetAll("Superman", "SpiderMan")
greetAll("Superman", "SpiderMan", "Captain Obvious")

//7
function sum () {
    let k = 0
    for (let i = 0; i < arguments.length; i++) {
        k+= arguments[i]
    }
    return k 
}
console.log(sum(1))
console.log(sum(2))
console.log(sum(10, 20, 40, 100))

//8
function aSample() {
    a("Привет!") 
}
function cubeSample() {
    cube(5); 
    alert(`${cube(5)}`)
}
function avg2Sample() {
    avg2(1, 2); 
    alert(`${avg2(1, 2)}`);
    avg2(10, 5); 
    alert(`${avg2(10, 5)}`);
}
function sum3Sample() {
    sum3(1,2,3);
    alert(`${sum3(1, 2, 3)}`);
    sum3(5,10,100500);
    alert(`${sum3(5, 10, 100500)}`);
    sum3(5,10);
    alert(`${sum3(5, 10)}`)
}
function intRandomSample() {
    intRandom(2, 15);
    alert(`${intRandom(2, 15)}`);
    intRandom(-1, -1);
    alert(`${intRandom(-1, -1)}`);
    intRandom(0, 1);
    alert(`${intRandom(0, 1)}`);
    intRandom(10);
    alert(`${intRandom(10)}`)
}
function greetAllSample() {
    greetAll("Superman");
    greetAll("Superman", "SpiderMan");
    greetAll("Superman", "SpiderMan", "Captain Obvious") 
}
function sumSample() {
    sum(1);
    alert(`${sum(1)}`);
    sum(2);
    alert(`${sum(2)}`);
    sum(10, 20, 40, 100);
    alert(`${sum(10, 20, 40, 100)}`)
}
var sample = prompt("Введите название задания")
switch (sample.toLowerCase()){
    case "a": aSample()
            break;
    case "cube": cubeSample()
            break;
    case "avg2": avg2Sample()
            break;
    case "sum3": sum3Sample()
            break;
    case "intrandom": intRandomSample()
            break;
    case "greetall": greetAllSample()
            break;
    case "sum": sumSample()
            break;
    default: alert("Вы ввели несуществующее задание")
}

//9
let massFunction = {
    a: aSample,
    cube: cubeSample,
    avg2: avg2Sample,
    sum3: sum3Sample,
    intrandom: intRandomSample,
    greetall: greetAllSample,
    sum: sumSample
}
let key = prompt("Введите название задания")
if (key in massFunction) {
    massFunction[key]()
} else {
    alert("Вы ввели несуществующее задание")
}





 


