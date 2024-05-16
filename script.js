
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

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .nav-links').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


function fetchUserData() {
    const username = document.getElementById('usernameInput').value;
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        const userData = document.getElementById('userData');
        userData.innerHTML = ''; // Clear previous data
        const userFields = [
          { label: 'Name:', value: data.name },
          { label: 'Company:', value: data.company },
          { label: 'Blog:', value: data.blog },
          { label: 'Location:', value: data.location },
          { label: 'Email:', value: data.email },
          { label: 'Hireable:', value: data.hireable },
          { label: 'Bio:', value: data.bio },
          { label: 'Twitter:', value: data.twitter_username },
          { label: 'Public Repos:', value: data.public_repos },
          { label: 'Public Gists:', value: data.public_gists },
          { label: 'Followers:', value: data.followers },
          { label: 'Following:', value: data.following },
          { label: 'Created At:', value: data.created_at },
          { label: 'Updated At:', value: data.updated_at }
        ];
        userData.innerHTML = `<ul class="dotted-list">
          ${userFields
            .map(item => (item.value !== null && item.value !== undefined ? `<li><strong>${item.label}</strong> ${item.value}</li>` : ''))
            .join('')}
        </ul>`;
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  





