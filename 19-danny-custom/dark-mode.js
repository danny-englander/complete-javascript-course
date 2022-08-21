const toggleBtn = document.getElementById("toggle-dark-mode");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
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
