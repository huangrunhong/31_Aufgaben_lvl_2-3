// ==================================
//         Loops-Level-2_1
// ==================================
console.log("%c======Loops-Level-2_1======", "color:yellowgreen");

const imageArray = () => {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      returnArray.push("image_00" + i + ".jpg");
    } else if (i >= 0 && i < 100) {
      returnArray.push("image_0" + i + ".jpg");
    } else {
      returnArray.push("image_" + i + ".jpg");
    }
  }
  console.log(returnArray);
};
imageArray();

// ==================================
//         Loops-Level-2_2
// ==================================
console.log("%c======Loops-Level-2_2======", "color:yellowgreen");

const numInput = document.body.querySelector("#numInput");
const resultOutput = document.body.querySelector("#resultOutput");

const loopMe = () => {
  for (let i = 1; i <= Number(numInput.value); i++) {
    resultOutput.textContent = "L" + "o".repeat(i) + "p";
  }
};

// ==================================
//         Loops-Level-3_2
// ==================================

console.log("%c======Loops-Level-3_2======", "color:yellowgreen");
const lvl2 = document.body.querySelector("#lvl2");

let numArr = [5, 22, 15, 100, 55];

for (let i = 0; i < 5; i++) {
  for (let j = 2; j <= 100; j++) {
    if (numArr[i] % j === 0 && numArr[i] !== j) {
      lvl2.innerHTML +=
        numArr[i] +
        " is devidable by " +
        j +
        ". The result ist: " +
        numArr[i] / j +
        "<br>";
    }
  }
}

// ==================================
//         Loops-Level-3_3
// ==================================

console.log("%c======Loops-Level-3_3======", "color:yellowgreen");
const numInput2 = document.body.querySelector("#numInput2");
const resultOutput2 = document.body.querySelector("#resultOutput2");
const loopMe2 = () => {
  for (let i = 1; i <= Number(numInput2.value); i++) {
    if (i % 2 === 0) {
      resultOutput2.textContent = "L" + "o".repeat(i) + "p";
    }

    if (i > 2 && i % 2 === 1) {
      resultOutput2.textContent = "L" + "oO".repeat(i / 2) + "op";
    }
  }
};
