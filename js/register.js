$(document).ready(function () {
  $("#registerButton").click(function () {
    // Simulate a successful registration (replace this with actual registration logic)
    var registrationSuccess = true;

    if (registrationSuccess) {
      // If registration is successful, show the success pop-up
      showSuccessPopup();
    } else {
      // If registration fails, you can handle it here
      console.log("Registration failed");
    }
  });

  function showSuccessPopup() {
    var modal = $(
      '<div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="successModalLabel" aria-hidden="true">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="successModalLabel">Successfully registered!!!</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        "</button>" +
        "</div>" +
        '<div class="modal-body">' +
        "You can now log in using the button below." +
        "</div>" +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-success" data-dismiss="modal" onclick="redirectToLogin()">Login</button>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
    );

    $("body").append(modal);
    modal.modal("show");

    modal.on("hidden.bs.modal", function () {
      modal.remove();
    });
  }

  function redirectToLogin() {
    window.location.href = "login.html";
  }
});

// Add the AJAX registration logic
function register() {
  $.ajax({
    type: "POST",
    url: "php/register.php",
    data: $("#registerForm").serialize(),
    success: function (response) {
      console.log("AJAX Success:", response);
      if (response.success) {
        showSuccessPopup();
      } else {
        console.log("Registration failed");
      }
    },
    error: function (error) {
      console.error("AJAX Error:", error);
    },
  });
}
