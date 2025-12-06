import { aboutme } from "./data.js";

console.log(aboutme)

let datacontainer = document.getElementById("datacontainer")
let data = document.getElementById("data")

let name = document.createElement("h3")
name.innerHTML = aboutme.name

let ages = document.createElement("h3")
ages.innerHTML = aboutme.age

let studyplace = document.createElement("h3")
studyplace.innerHTML = aboutme.studyplace

let hobby = document.createElement("h3")
hobby.innerHTML = aboutme.hobby

let overallgrade = document.createElement("h3")
overallgrade.innerHTML = aboutme.overallgrade

let selfintoduce = document.createElement("h3")
selfintoduce.innerHTML = aboutme.selfintroduce

data.appendChild(name)
data.appendChild(ages)
data.appendChild(studyplace)
data.appendChild(hobby)
data.appendChild(overallgrade)
data.appendChild(selfintoduce)
datacontainer.appendChild(data)


// let name = document.createElement("h3")
// let ages = document.createElement("h3")
// let studyplace = document.createElement("h3")
// let hobby = document.createElement("h3")
// let overallgrade = document.createElement("h3")
// let selfintoduce = document.createElement("h3")

// data.appendChild(name)
// data.appendChild(ages)
// data.appendChild(studyplace)
// data.appendChild(hobby)
// data.appendChild(name)
// data.appendChild(name)
// datacontainer.appendChild(data)

