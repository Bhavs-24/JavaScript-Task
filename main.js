const myHeading = document.querySelector("h3");
myHeading.textContent = "Hello World!";

let myVariable = document.querySelector("h1");  
alert("hello!");

function submit(){
let name = document.getElementById('name');
if(name.value=="chocolate"){
    alert('Hurray Icecream');
}else{
    alert('oh-oh');
}

}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

//   document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });


const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;
  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}


let cheese = "Cheers";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}


let shoppingDone = false;
let childsAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance)

for (let step = 0; step < 5; step++) {
    console.log("Walking east one step");
  }
// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");
// function setUserName() {
//     const myName = prompt("Please enter your name.");
//     if (!myName) {
//       setUserName();
//     } else {
//       localStorage.setItem("name", myName);
//       myHeading.textContent = `Mozilla is cool, ${myName}`;
//     }
//   }