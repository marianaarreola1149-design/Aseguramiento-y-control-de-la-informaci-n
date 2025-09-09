const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn');
const messageDiv = document.getElementById('message');

function emailIsValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    return minLength && password.length >= 8;
}

function showMessage(text, type ='info') {
    messageDiv.textContent = text;
    messageDiv.className = type;
}

usernameInput.addEventListener('input', () => {
    const email = usernameInput.value.trim();
    if (!emailIsValid(email)) {
        messageDiv.textContent = 'Invalid email format.';
        btn.disabled = true;
    } else {
        messageDiv.textContent = 'Email format looks good.';
        btn.disabled = false;
    }
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    if (password.length < 8) {
        showMessage('Password must be at least 8 characters long.', 'Try again');
        btn.disabled = true;
    } else if (!/[A-Z]/.test(password)) {
        showMessage('Password must contain at least one uppercase letter.', 'error');
        btn.disabled = true;
    } else{
        showMessage('Password is valid.', 'success');
        btn.disabled = false;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!emailIsValid(username)) {
        showMessage('Invalid email format.', 'error');
        return;
    }

    if (!validatePassword(password)) {
        showMessage('Password must be at least 8 characters long.', 'error');
        return;
    }

    // 👇 También usamos saveUser antes de redirigir
    saveUser(username, password);

    showMessage('Login successful', 'success');
    window.location.href = "html/dashboard.html";
});
