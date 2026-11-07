//your code here
const password = document.getElementById("password");

const hint = document.createElement("small");
password.insertAdjacentElement("afterend", hint);

password.addEventListener("input", function () {
  if (password.value.length < 8) {
    hint.textContent = "Use at least 8 characters";
  } else {
    hint.textContent = "";
  }
});