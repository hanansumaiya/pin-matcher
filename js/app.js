function getPin() {
  const pin = Math.round(Math.random() * 10000);
  pinLength = pin + "";
  if (pinLength.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  const displayPin = document.getElementById("display-pin");
  displayPin.value = pin;
}
// ===============================================================
document.getElementById("key-pad").addEventListener("click", function (event) {
  const numbers = event.target.innerText;
  const typedNumber = document.getElementById("typed-numbers");
  if (isNaN(numbers)) {
    if (numbers == "C") {
      typedNumber.value = "";
    }
  } else {
    const prevNumber = typedNumber.value;
    const newNumber = prevNumber + numbers;
    typedNumber.value = newNumber;
  }
});
// =================================================================
function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedPin = document.getElementById("typed-numbers").value;
  const successMessage = document.getElementById("success");
  const failError = document.getElementById("fail");
  if (pin == typedPin) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    successMessage.style.display = "none";
    failError.style.display = "block";
  }
}
