"use strict";
const fname = "Hari Haran";
let fg = 10;
const num = 200000;
const status = true;
const notvalue = null;
const novalue = "";
//    0,1,2,3,4,     5,   6,   7
const arr = [1, 2, 3, 4, "hgi", false, null, "", 1, 2, 3, 4];
console.log(
  fname,
  "     ",
  num,
  "    ",
  status,
  "        ",
  notvalue,
  "          ",
  novalue,
  "  ",
  arr
);

// const obj = {
//   fname1: "rajalakshmi",
//   age: "rajalakshmi",
//   status: true,
//   noactivity: null,
// };

console.log("ahahaia");

var a = 1;
a++;
a += 2;
a = a + 2;

// console.log(`hai hekek
//        jjdjfdfd
//        dfjdfdjfdjfdfdfj ${a}
//        sjsfjsfsjfsf ksfskfmskfn`);

if (!(a <= 20)) {
  console.log("It is true");
} else {
  console.log("It is false");
}

var grade = 49.9;

if (grade >= 90 && grade <= 100) {
  console.log("Gold medalist", grade);
} else if (grade >= 80 && grade <= 89) {
  console.log("Silver Medalist");
} else if (grade >= 70 && grade <= 79) {
  console.log("Bronze Medalist");
} else if (grade >= 60 && grade <= 69) {
  console.log("copper Medalist");
} else if (grade >= 50 && grade <= 59) {
  console.log("Metal Medalist");
} else {
  console.log("RA");
}

// var input = prompt("enter the value between 1-3");

// switch (input) {
//   case "1":
//     console.log("Monday");
//     break;
//   case "2":
//     console.log("Tuesday");
//     break;
//   case "3":
//     console.log("wednesday");
//     break;
//   default:
//     console.log("please chose between 1-3");
//     break;
// }

const obj = {
  fname1: "rajalakshmi",
  age: "rajalakshmi",
  status: true,
  noactivity: null,
};

for (let j in obj) {
  console.log(j, " : ", obj[j]);
}

var numd = [2, 2, 3, 4, 5, 56, 67, 7, 7, 78, 8, 8, 8, "g", false];

console.log(numd);

var a = 2;

console.log(a);

// for loop - 1) declaration; 2. condition; 3. inrc/decr operator

for (let i = 0; i < numd.length; i++) {
  console.log("Array Value", i, numd[i]);
}

// for of loop - 1) initilazitation  2) of keyword 3) array varibale name

for (let k of numd) {
  console.log("for of :", k);
}

// foreach - 1)varibale name 2). notation 3)forEach

numd.forEach((value, indx) => {
  console.log("For Each loop", indx, " : ", value);
});

// while loopp  - entry level check

let ai = 0;
while (ai >= 10) {
  console.log("while loop", ai);
  ai++;
}

// do while - exit level check

let ar = 10;

do {
  console.log("do while", ar);
  ar++;
} while (ar < 5);

for (let l = 0; l < 10; l++) {
  if (l === 9) {
    continue;
  }
  console.log(l);
}

var ageq = 15;

if (ageq >= 18) {
  console.log("true");
} else {
  console.log("flase");
}

//  terniary operator  1. condition followed by ? 2. true statementlogic follwed by : 3. false statement logic

var output = ageq >= 18 ? "true" : "false";
console.log(output);

// function decalaration

// var input = prompt("enter value")

// function addition(a,b){
//   return a+b;
// }

// console.log(addition(input,6));

// function expression

let subtraction = function (x, y) {
  console.log(5 / 1);
};
subtraction();

// arrow function

let division = (d, g) => {
  return d % g;
};

console.log(division(9, 3));

let parent = document.getElementById("parent");

//innerHTML,innerText,textContent

console.log((parent.textContent = "welcome to CGT"));

parent.style.fontSize = "64px";

let children = document.getElementsByClassName("children");

for (let k of children) {
  console.log((k.innerHTML = "one and onlyf"));
}

let only = document.querySelectorAll(".children");
console.log(only);

let reveal = (event) => {
  event.preventDefault();
  let showImage = document.getElementById("showImage");
  if (showImage.style.display === "block") {
    showImage.style.display = "none";
  } else {
    showImage.style.display = "block";
  }
};

let revel = (event) => {
  event.preventDefault();
  let showImage = document.getElementById("showImage");
  showImage.style.display = "block";
};
let hide = (event) => {
  event.preventDefault();
  let showImage = document.getElementById("showImage");
  showImage.style.display = "none";
};

let nameLength = () => {
  let username = document.getElementById("username").value;
  let error = document.querySelector(".error1");

  if (username.length < 5) {
    error.innerHTML = "username should above 5 length";
    error.style.color = "red";
  } else {
    error.innerHTML = " correct username length";
    error.style.color = "green";
  }
  return username;
};

document.querySelector("#clickme").addEventListener("click", show);

let details = ["keerrthana", "hari", "Patrick", "Tamizh"];

function show() {
  // let list = document.getElementById("list");
  // let li = "";

  // details.forEach((data) => {
  //   li += `<li>${data}</li>`;
  // });
  // list.appendChild(li);
  window.location.href = "Amazon.html";
}

// var friend = prompt("enter the value")

console.log("2" * 4);

// var numr = 10.83838393939393939;

// console.log(numr.toPrecision(1));

var str = "hai hello welcome # # ";
var str1 = "CGT";

console.log(str.split("$"));

var aged;

if (!aged) {
  console.log("true");
} else {
  console.log("false");
}

console.log(24 - (21 - 3));

// let private = "10";
// console.log(private);

let gang = new Array("2", 7, 5, 3, 2, 2, 4, 54);

console.log(
  gang.push("3", 4),
  gang.unshift("True", "hai", "54"),
  gang.pop(),
  gang.shift(),
  gang.indexOf(54),
  gang.includes(29),
  gang.slice(2, 6),
  gang.splice(1, 1),
  gang.reverse(),
  gang.join("-"),
  gang
);

let loginDetails = [
  //array of object  for in loop
  {
    fname: "Keerthana",
    age: 24,
  },
  {
    fname: "Keerthana1",
    age: 25,
  },
  {
    fname: "Keerthan2",
    age: 26,
  },
  {
    fname: "Keerthana3",
    age: 27,
  },
  {
    fname: "Keerthana4",
    age: 28,
  },
];

loginDetails.forEach((value) => {
  for (let k in value) {
    console.log(value[k]);
  }
});

let studentdetai = {
  fnames: "Keerthana",
  bornYears: 1994,
  status: true,
  ageCaluclate: function (city, pincode) {
    let datas = new Date();
    console.log(datas);

    let currentYr = datas.getFullYear();

    return `Hi my name is ${this.fnames} and I was ${
      currentYr - this.bornYears
    } old and I was born on ${city} and it s pincode is ${pincode}`;
  },
};

let studentDetails1 = {
  fnames: "hariharan",
  bornYears: 2003,
  status: false,
};

let outs = JSON.stringify(studentDetails1); //JS object to JSON
let reverses = JSON.parse(outs); // JSON to JS object

console.log(reverses);

function adfs() {
  let df = 10;

  console.log(df);
  if (df) {
    var gh = 340;
    hhd = 10;
    console.log(gh);
  }
  console.log(gh);
  var hhd;
}
adfs();

let chess = (x = null, y = null) => {
  console.log(x + y);
};
chess();

//shallow copy

let arrg = [7474, 47484, 89, 90, 0, 7];

let arrdf = arrg;

console.log(arrdf);

//deep copy

let ghyj = new Array(...arrg);

console.log(ghyj);

let gj, jg;

[gj, jg] = [1003, 1005];

console.log(gj, jg);

[gj, jg] = [jg, gj];

console.log(gj, jg);

let ape = {
  fname: "hai",
  status: false,
};

localStorage.setItem("ape", JSON.stringify(ape));

let hijak = localStorage.getItem("ape");
localStorage.setItem("num", 10);
// localStorage.removeItem("ape")
localStorage.clear();

console.log();

function doubleElements(x) {
  return x > 2;
}

let DoubleResult = [1, 2, 3, 4, 5, 6].filter(doubleElements);
console.log(DoubleResult);

let numbers = [12, 34, 56, 67, 10];

//Here using an arrow function
let sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(sum);

function outputs(sum) {
  console.log("Callback function", sum);
}

function fright(num1, num2, callBack) {
  let sum = num1 + num2;
  callBack(sum);
  localStorage.setItem("sum", sum);
}

fright(5, 10, outputs);

let sums = localStorage.getItem("sum");
console.log(sums);

function sumsd() {
  let count = 0;
  console.log(count);

  return function () {
    count++;
    console.log(count);
  };
}

let count = sumsd();
count();
count();

function increm() {
  let count = 0;
  count++;
  return count;
}

console.log(increm());
console.log(increm());
console.log(increm());
console.log(increm());
console.log(increm());
console.log(increm());

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  [500, "orange"],
  [500, "watermelon"],
]);

for (let k of fruits) {
  for (let v of k) {
    console.log(v);
  }
}

const letters = new Set(["a", "b", "c", 2, 5, "a", 1, 5, 8, 2, 6, 4, 32, 1, 6]);

console.log(letters);

let baseUrl = "https://66cfee65181d059277dcaeac.mockapi.io";

let validate = async (event) => {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let message = document.querySelector(".message");
  let loading = document.getElementById("loading");
  let btn = document.getElementById("btn");

  if (username.trim() !== "" && password.trim() !== "") {
    let details = {
      firstname: username,
      password: password,
    };

    message.innerHTML = "Login Success";
    btn.style.display = "none";
    loading.style.display = "block";

    await fetch(`${baseUrl}/studentDetails`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          btn.style.display = "block";
          loading.style.display = "none";
          message.innerHTML = "";
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    message.innerHTML = "Login Failed";
  }
};

class Car {
  constructor(model, brand) {
    this.model = model;
    this.brand = brand;
  }

  show(fname) {
    return `Hai my name is ${fname} and I own a ${this.model} which is ${this.brand} brand`
  }
}

class Model extends Car{
  constructor(model,brand,year){
    super(model,brand);
    this.year= year;
  }

  present(){
    var datasd = new Date();
    var crtYr = datasd.getFullYear();
    return ` ${this.show("Patrick")} which is built on ${this.year} and it was ${crtYr -this.year} years old`
  }
}

const mod = new Model("Mustang","Ford",1972);

console.log(mod.present());



fetch(`${baseUrl}/studentDetails`)
  .then((response) => response.json())
  .then((data) => {
    let li = "";
    data.forEach((value) => {
      li += `<div>
         FirstName: ${value.firstname} Password : ${value.password}
          <button onclick="deleteStudent(${value.id})">Delete</button>
        </div>`;
    });
    document.getElementById("reading").innerHTML = li;
  })
  .catch((error) => {
    console.log(error);
  });

function deleteStudent(id) {
  fetch(`${baseUrl}/studentDetails/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log(`Student with ID ${id} deleted.`);
        // Optionally, re-fetch the data or remove the item from the DOM
      } else {
        console.error(`Failed to delete student with ID ${id}`);
      }
    })
    .catch((error) => console.error("Error deleting student:", error));
}

fetch(`${baseUrl}/studentDetails/1`).then((response) => {
  console.log(response);
});
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => {
//   console.log(error);
// });

let counrs = 0;

// setInterval(()=>{
//   counrs++;
//   document.getElementById("count").innerHTML=counrs;
//   if(counrs===10){
//     alert("stop")

//   }
// },1000)

let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love Javascript !!");
  }, 3000);
});
myPromise.then((value) => {
  document.getElementById("count").innerHTML = value;
});
