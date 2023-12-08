// login.js

$(document).ready(function () {
  $("#loginButton").click(function () {
    // Simulate a successful login
    // You should replace this with your actual login logic
    var loginSuccess = true;

    if (loginSuccess) {
      // If login is successful, redirect to the profile page
      window.location.href = "profile.html";
    } else {
      // If login fails, you can handle it here
      console.log("Login failed");
    }
  });
});
