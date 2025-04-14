// Registration Function
function registerUser() {
    const firstname = document.getElementById("register-firstname").value.trim();
    const lastname = document.getElementById("register-lastname").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value;

    if (!firstname || !lastname || !email || !password) {
        alert("All fields are required.");
        return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must have at least 8 characters, an uppercase letter, and a special character.");
        return;
    }

    try {
        const user = { firstname, lastname, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful! You can now log in.");
        login();
    } catch (error) {
        alert("Failed to save user. Please try again.");
    }
}

// Login Function
function loginUser() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser) {
            alert("No user found. Please register first.");
            return;
        }

        if (storedUser.email === email && storedUser.password === password) {
            alert(`Welcome back, ${storedUser.firstname} ${storedUser.lastname}!`);
        } else {
            alert("Incorrect email or password.");
        }
    } catch (error) {
        alert("Failed to retrieve user data. Please try again.");
    }
}

// Navbar Toggle
function myMenuFunction() {
    const menu = document.getElementById("navMenu");
    menu.className = menu.className === "nav-menu" ? "nav-menu responsive" : "nav-menu";
}

// Switch Forms
function login() {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
    registerForm.style.right = "-520px";
    loginForm.style.left = "4px";
}

function register() {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
    registerForm.style.right = "5px";
    loginForm.style.left = "-510px";
}
