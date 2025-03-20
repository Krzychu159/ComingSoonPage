const input = document.querySelector("input");
const button = document.querySelector("button");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!emailRegex.test(input.value.trim())) {
    alert("Enter a valid email address");
  } else {
    alert("E-mail saved!");
  }
});
