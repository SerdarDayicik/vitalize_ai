const logout = document.querySelector("#logout");

// logout tuşu eventleri
logout.addEventListener("click", function () {
    localStorage.setItem('login_Mi', "false");
})
