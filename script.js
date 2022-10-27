const screen2 = document.querySelector(".screen2");
const screen1 = document.querySelector(".screen1");
const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    screen2.innerText += e.target.value;
  }
  if (e.target.classList.contains("operator")) {
    screen2.innerText += e.target.value;
    screen1.innterText = screen2.innterText;
    screen2.innterText = " ";
  }

  //   if (e.target.classList.contains("plus")) {
  //     screen.innerText += e.target.value;
  //   }
  //   if (e.target.classList.contains("minus")) {
  //     screen.innerText += e.target.value;
  //   }
  //   if (e.target.classList.contains("divide")) {
  //     screen.innerText += e.target.value;
  //   }
  //   if (e.target.classList.contains("multi")) {
  //     screen.innerText += e.target.value;
  //   }
});
