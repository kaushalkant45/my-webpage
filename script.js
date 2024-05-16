
document.getElementById('signup').addEventListener('click', function(event) {
    event.preventDefault(); 

    document.getElementById('signupFormPopup').style.display = 'block';
    document.getElementById('signupFormContent').reset();
});
document.getElementById('closeSignupForm').addEventListener('click', function() {
    document.getElementById('signupFormPopup').style.display = 'none';
});

document.getElementById('signupFormContent').addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('signupSuccessMessage').classList.remove('hidden');
    document.getElementById('signupFormContent').reset();
});




