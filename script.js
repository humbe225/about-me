const number = 12;
console.log(number);
const string = "humberto";
const boolean = 23 < 2;
const object = {
    name: "humberto",
    age: 23,
    likesStudying: true,
};
object.cool = true;
const array = ["humberto", "fernando", "jose ramon"];
const array1 = [1, 2, 3];
const array2 = [true, false];
const array3 = [
    { name: "humberto" },
    { name: "fernando" },
    { name: "jose ramon" },
];
const sayHello = (name) => {
    console.log(`Hi ${name}`);
};
sayHello("humberto");
sayHello("fernando");
sayHello("jose ramon");

const add = (a, b) => {
    return a + b;
};

const sum = add(1, 2);
const sum1 = add(1.5, 100);

const multiply = (a, b) => {
    return a * b;
};
const product = multiply(2, 3);
const age = document.getElementById("age");
const name = document.querySelector("footer span");
age.textContent = 16;
age.style.color = "cornflowerblue";
age.style.backgroundColor = "burlywood";
const header = document.querySelector("header");
console.log(header);

const div = document.createElement("div");
div.textContent = "One Piece";
console.log(div);
div.classList.add("red");
console.log(div.classList);

header.apprendChild(div);

div.addEventListener("click", () => {
    const div = document.createElement("div");
    age.textContent = 17;
    name.textContent = "Humbe";

    header.appendChild(div);
});
