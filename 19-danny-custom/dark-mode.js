const toggleBtn = document.getElementById("toggle-dark-mode");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  document.body.classList.add("has-dark-mode");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("has-dark-mode");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  // Set state of darkMode on page load.
  enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
