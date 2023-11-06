console.log("%c======Loops-Level-3_3======", "color:yellowgreen");

const numInput = document.body.querySelector("#numInput");
const resultOutput = document.body.querySelector("#resultOutput");

const loopMe = () => {
  for (let i = 1; i <= Number(numInput.value); i++) {
    if (i % 2 === 0) {
      resultOutput.textContent = "L" + "O".repeat(i) + "p";
    }

    if (i > 2 && i % 2 === 1) {
      resultOutput.textContent = "L" + "oO".repeat(i / 2) + "op";
    }
  }
};
