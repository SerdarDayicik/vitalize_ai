const UseGpt = document.querySelector("#usegpt-Control");
const Logout = document.querySelector("#logout-Control")
const login = document.querySelector("#login-Control");
const navbar = document.querySelector("#navbar-control");
const mainBtn = document.querySelector("#mainBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const mainHref = document.querySelector("#mainHref");
const aboutHref = document.querySelector("#aboutHref");

let login_kontrol = localStorage.getItem('login_Mi');
console.log(login_kontrol)


if (login_kontrol === "false") {
    login.classList.remove("login-Control");
    aboutBtn.textContent = "Kayit Ol"
    mainBtn.textContent = "Kayit Ol"
    mainHref.href = "./signup/signUp.html";
    aboutHref.href = "./signup/signUp.html";
} else {
    UseGpt.classList.remove("login-Control");
    Logout.classList.remove("login-Control");
    navbar.classList.remove("justify-content-center");
    navbar.classList.add("justify-content-end");
    aboutBtn.removeAttribute("id");
    mainBtn.removeAttribute("id");
    mainHref.removeAttribute("id");
    aboutHref.removeAttribute("id");
}