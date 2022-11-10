const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}

const elements = document.querySelectorAll('[data-js="dark"]');
if (elements.length) {
  import("https://assets.stoumann.dk/js/css-filter.mjs").then((module) => {
    const jsClass = module.default;
    elements.forEach((element) => {
      new jsClass(element, element.dataset, presets);
    });
  });
}
