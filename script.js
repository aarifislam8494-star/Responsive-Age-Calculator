
function showLogin() {
    document.getElementById('register-page').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
}

function showRegister() {
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('register-page').classList.remove('hidden');
}


function register() {
    let user = document.getElementById('reg-user').value;
    let pass = document.getElementById('reg-pass').value;

    if (user === "" || pass === "") {
        alert("Fill in all the boxes!");
        return;
    }


    localStorage.setItem("storedUser", user);
    localStorage.setItem("storedPass", pass);

    alert("Registration successful! Login now.");
    showLogin();
}


function login() {
    let userInp = document.getElementById('login-user').value;
    let passInp = document.getElementById('login-pass').value;

    // save kora Data niye asa
    let savedUser = localStorage.getItem("storedUser");
    let savedPass = localStorage.getItem("storedPass");

    if (userInp === savedUser && passInp === savedPass) {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-site').classList.remove('hidden');
    } else {
        alert("Username or password does not match!");
    }
}


function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function calculateAge() {
    let birth = new Date(document.getElementById('birthdate').value);
    let today = new Date();
    
    if (isNaN(birth)) {
        alert("Give the date!");
        return;
    }

    let diff = today - birth;
    let age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById('result').innerText = "Your age: " + age + "year ";
}

function logout() {
    location.reload();
}