import axios from "axios"


// Enviando uma requisição tipo POST para obter o token de acesso 
axios({
    method: "post",
    url: "https://servidor-exercicios-js-eficaz.vercel.app/token",
    data: {username: "Antonio"},
    headers: {"Content-Type": "application/json", "Accept": "application/json"}
  })

.then((response) => {
    console.log(response.data.accessToken);
}, (error) => {
    console.log(error)
});

