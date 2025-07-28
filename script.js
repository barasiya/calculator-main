const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("theme-toggle");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.id;

    if (val === "clear") {
      display.innerText = "0";
    } else if (val === "backspace") {
      display.innerText = display.innerText.slice(0, -1) || "0";
    } else if (val === "equal") {
      try {
        display.innerText = eval(display.innerText
          .replace(/÷/g, "/")
          .replace(/×/g, "*"));
      } catch {
        display.innerText = "Error";
      }
    } else {
      if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = val;
      } else {
        display.innerText += val;
      }
    }
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.innerText = document.body.classList.contains("light") ? "☀️" : "🌙";
});
