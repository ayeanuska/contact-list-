const slider = document.getElementById("slider");

slider.addEventListener("change", (e) => {
  const { value } = e.target;

  if (value < 100) {
    slider.value = 0;
  } else {
    displayAppScreen();
  }
});

const displayScreen = (screenName) => {
  const screens = document.getElementsByClassName("screen");

  for (screen of screens) {
    screen.style.display = "none";

    const mainScreen = document.getElementById(screenName);
    mainScreen.style.display = "block";
  }
};

const displayAppScreen = () => {
  displayScreen("appScreen");
};
