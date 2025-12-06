import { portfolio } from "./data.js";

console.log(portfolio)
let datacontainer = document.getElementById("datacontainer")
let data = document.getElementById("data")

let name = document.createElement("h3")
name.innerHTML = portfolio.name

let img = document.createElement("img")
img.src = portfolio.img

let des = document.createElement("h3")
des.innerHTML = portfolio.description

let role = document.createElement("h3")
role.innerHTML = portfolio.role


data.appendChild(name)
data.appendChild(img)
data.appendChild(des)
data.appendChild(role)
datacontainer.appendChild(data)
