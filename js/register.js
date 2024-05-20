const Username = document.querySelector("#registarUsername");
const Password = document.querySelector("#registarPassword");
const AgainPass = document.querySelector("#registarPasswordAgain");
const ApiKey = document.querySelector("#registarApiKey");

function User_Kaydet(e){
    var user = {
        username : Username.value,
        password: Password.value,
        againPass: AgainPass.value,
        apiKey: ApiKey.value
    }
    
    if(Password.value === AgainPass.value){
        localStorage.setItem("Kullanici", JSON.stringify(user));
        window.location.href = '../login/login.html';
    }else{
        console.log("Olmazzzzz")
    }

    e.preventDefault();
}



document.querySelector("#registar_btn").addEventListener("click", User_Kaydet);
