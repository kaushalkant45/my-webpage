// JavaScript to handle signup form popup
document.getElementById('signup').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    
    // Display the signup form popup
    document.getElementById('signupFormPopup').style.display = 'block';
    
    // Reset the form fields
    document.getElementById('signupFormContent').reset();
});

// Close the signup form popup when the close button is clicked
document.getElementById('closeSignupForm').addEventListener('click', function() {
    document.getElementById('signupFormPopup').style.display = 'none';
});

// JavaScript to handle form submission
document.getElementById('signupFormContent').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Display the success message
    document.getElementById('signupSuccessMessage').classList.remove('hidden');
    
    // Reset the form fields
    document.getElementById('signupFormContent').reset();
});




