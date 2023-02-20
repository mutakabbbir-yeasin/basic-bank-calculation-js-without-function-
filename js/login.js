// step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step-2: get the email address inside the email input field
  // always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // step-3: get password
  // step-3.a: set id on the html element
  // step-3.b: get the element
  // step-3.c: get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // Danger: Do not verify email & password on the client side
  // Step-4: verify email and password
  if (email === "abcd@gmail.com" && password === "123456789") {
    window.location.href = "bank.html";
  } else {
    console.log("invalid user");
  }
});
