// https://httpdump.io/

let endpoint = "https://httpdump.io/oour3";
const form = document.querySelector("form");
form.addEventListener("submit", sendData);
let payload = {
  name: form.elements.value,
};
fetch(endpoint, {
  method: "POST",
  body: JSON.stringify(payload),
  mode: "no-cors",
}).then(function (res) {
  console.log(res);
});

const createButton = document.getElementsByClassName("w3-btn", "w3-brown");
const submitButton = document.getElementById("submit-button");

createButton[0].addEventListener("click", createInput);
let count = 0;

function createInput() {
  count++;
  const inputContainer = document.createElement("div");
  inputContainer.setAttribute("class", "input-container");
  const ciaSugulsInput = document.getElementsByClassName("input-place")[0];
  console.log(ciaSugulsInput);
  const myInput = document.createElement("input"); //šitą appendinsiu
  const xButton = document.createElement("span"); //šitą appendinsiu
  xButton.innerHTML = "&times;";
  xButton.classList.add(
    "w3-button",
    "w3-xlarge",
    "w3-circle",
    "w3-teal",
    "close"
  );
  xButton.setAttribute("name", "task");
  myInput.setAttribute("type", "text");
  myInput.classList.add("w3-input", "w3-border", "w3-sand");
  myInput.setAttribute("name", "inputas" + count);
  myInput.setAttribute("placeholder", "Task#" + ` ` + count);
  inputContainer.append(myInput, xButton);
  ciaSugulsInput.appendChild(inputContainer);

  xButton.addEventListener("click", function () { //trina myInput & xButton
    this.parentElement.remove();
  });
}

function sendData(e) {
  e.preventDefault();
  console.log(form.elements);
  for (const i in e.target.elements) {
    console.log(i);
    if (i == "inputas" + count) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
