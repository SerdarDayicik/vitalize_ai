const logout = document.querySelector("#logout");

// logout tuşu eventleri
logout.addEventListener("click", function () {
    // const UseGpt = document.querySelector("#usegpt-Control");
    // const Logout = document.querySelector("#logout-Control")
    // const login = document.querySelector("#login-Control");
    // const navbar = document.querySelector("#navbar-control");
    // if (login_kontrol === false) {
    //     login.classList.remove("login-Control");

    // } else {
    //     UseGpt.classList.remove("login-Control");
    //     Logout.classList.remove("login-Control");
    //     navbar.classList.remove("justify-content-center"); //style kayması için
    //     navbar.classList.add("justify-content-end"); // style kayması için
    // }
    localStorage.setItem('login_Mi', "false");
})
