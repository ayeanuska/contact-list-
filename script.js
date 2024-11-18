const slider = document.getElementById("slider");

slider.addEventListener("change", (e) => {
  const { value } = e.target;

  if (value < 100) {
    slider.value = 0;
  }
});
