const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "delete") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else if (item.id == "%") {
      let number = parseFloat(display.innerText);
      display.innerText = number / 100;
    } else {
      display.innerText += item.id;
    }
  });
});
