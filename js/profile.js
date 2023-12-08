function updateProfile() {
  // Implement your profile update logic using jQuery AJAX
  // Example: make an AJAX request to profile.php
  $.ajax({
    type: "POST",
    url: "php/profile.php",
    data: $("#updateForm").serialize(),
    success: function (response) {
      // Handle the response from the server
      console.log(response);
    },
    error: function (error) {
      // Handle the error
      console.error(error);
    },
  });
}
