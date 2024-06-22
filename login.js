document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple user authentication (for demo purposes)
    // In a real application, you should use a secure authentication method
    const users = {
        RaI: 'Ari#120474',
        ArI: 'Rai#050802'
    };

    if (users[username] && users[username] === password) {
        localStorage.setItem('currentUser', username);
        window.location.href = 'list1.html';
    } else {
        alert('Invalid username or password');
    }
});
