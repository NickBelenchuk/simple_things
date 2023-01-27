const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnClass = e.currentTarget.classList;
    if (btnClass.contains("plus")) {
      count++;
    } else if (btnClass.contains("minus")) {
      count--;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
