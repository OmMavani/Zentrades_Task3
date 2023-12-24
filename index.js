document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);
});

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(username)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must contain an uppercase letter, a number, and only @ special character.');
        return;
    }

    if (password === 'SmartServTest@123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    return passwordRegex.test(password);
}

