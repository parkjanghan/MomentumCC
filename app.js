const loginForm = document.querySelector("#login-form form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function logInButtonClick(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    localStorage.setItem("username", username);
    greeting.textContent = `Welcome! ${username} `;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function logInWithoutInput(){
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = localStorage.getItem("username");
    greeting.textContent = `Welcome Back! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (localStorage.getItem("username")){
    logInWithoutInput();
} else loginForm.addEventListener("submit",logInButtonClick);

