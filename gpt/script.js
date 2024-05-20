let input = document.querySelector("#user-input");
let question = document.querySelectorAll(".w-25");
let btnGpt = document.querySelector(".gptBtn");
let container = document.querySelector(".orta");
let noneText = document.querySelector(".none-text");
let textİng = document.querySelector(".texting");
let usertexting = document.querySelector(".user-texting");


let dolumu = true

// localStorage User verileri çekme 
var Users = JSON.parse(localStorage.getItem("Kullanici"))
const apikey = Users.apiKey

// Hazır mesajlar inputa aktarma
question.forEach(function (question) {
    question.addEventListener("click", function (e) {
        if (e.target.className === "card-body") {
            let questionText = e.target.firstElementChild.textContent
            input.value = questionText
        }
        if (e.target.className === "card-title" || e.target.className === "card-text") {
            let questionText = e.target.parentElement.firstElementChild.textContent
            input.value = questionText
        }
    });
})

// User mesaj ekleme
btnGpt.addEventListener("click", function () {
    if (input.value === "") {
        console.log("Deger Girilmeli")
    }
    else {
        container.remove();
        noneText.remove();
        dolumu = false;
        usertexting.style.display = "block";
        // kullanıcı mesajı ekleme
        let msg = `
            <li class="clearfix">
                <div class="message other-message float-right mx-auto">${input.value} </div>
            </li>
        `;

        textİng.innerHTML += msg;
        gptMessage();
        scrollBottom()
    }
    input.value = "";
})

// Gpt mesaj ekleme
async function gptMessage() {
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apikey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "Sen bir beslenme koçusun ve sadece beslenme, spor, sağlıklı yaşam konularında yardımcı olabilirsin. bu konular dışında hiç bir soruya cevap verme. **** \n kullanmak yerine cümlelerin içinde sadece <br> kullan \n sakın kullanma ****  hiç bir şekilde türkçeye özel kelimeler kullanma örnegin: ğ" },
                { role: "user", content: input.value },
            ],
            max_tokens: 2000
        })
    }
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        const saatDakika = saat();
        cevap = data.choices[0].message.content.replace('\n', '<br>')
        // gpt mesajı ekleme
        let msg = `
                <li class="clearfix">
                    <div class="message-data">
                        <span class="message-data-time text-white">${saatDakika}, Today</span>
                    </div>
                    <div class="message my-message mt-2">
                        ${cevap}
                    </div>                                    
                </li>
                `;

        textİng.innerHTML += msg;
        scrollBottom()

        // console.log(cevap);
        // console.log(data);
    }
    catch{
        const saatDakika = saat();
        let msg = `
        <li class="clearfix">
            <div class="message-data">
                <span class="message-data-time text-white">${saatDakika}, Today</span>
            </div>
            <div class="message my-message mt-2">
                Api keyiniz hatalı yeniden kayıt olun
            </div>                                    
        </li>
        `;

        textİng.innerHTML += msg;
        scrollBottom()
    }
}

// scroll kontrol
function scrollBottom() {
    var messageContainer = document.getElementById("messageContainer");
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// mesajda yazan saat dakika ve AM-PM bilgisi
const saat = () => {
    var suankiZaman = new Date();
    var saat = suankiZaman.getHours();
    var dakika = suankiZaman.getMinutes();
    var ampm = saat >= 12 ? 'PM' : 'AM';
    return saat + ":" + dakika + " " + ampm;
};