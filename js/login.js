const loginBtn = document.querySelector("#loginbtn");
const loginUsername = document.querySelector("#loginUsername");
const loginPassword = document.querySelector("#loginPass");


// localStorage User verileri çekme 
var Users = JSON.parse(localStorage.getItem("Kullanici"))

const username = Users.username
const password = Users.password


loginBtn.addEventListener("click", function(e) {
    if(username === loginUsername.value && password === loginPassword.value){
        localStorage.setItem('login_Mi', "true");
        window.location.href = '../index.html';
    }
    else{
        console.log("hata")
    }


    e.preventDefault();
})