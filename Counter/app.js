// Set init count
let count = 0;

// Select value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 1) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
