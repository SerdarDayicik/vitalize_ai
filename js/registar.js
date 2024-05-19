const Username = document.querySelector("#registarUsername");
const Password = document.querySelector("#registarPassword");
const AgainPass = document.querySelector("#registarPasswordAgain");
const ApiKey = document.querySelector("#registarApiKey");

function User_Kaydet(){
    var user = {
        username : Username.value,
        password: Password.value,
        againPass: AgainPass.value,
        apiKey: ApiKey.value
    }
    
    if(Password.value === AgainPass.value){
        localStorage.setItem("Kullanici", JSON.stringify(user));
        console.log("qwewqe")
    }else{
        console.log("Olmazzzzz")
    }

}



document.querySelector("#registar_btn").addEventListener("click", User_Kaydet);
