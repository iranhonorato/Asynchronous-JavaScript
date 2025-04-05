import axios from "axios"


// Enviando uma requisição tipo POST para obter o token de acesso 
axios({
    method: "post",
    url: "https://servidor-exercicios-js-eficaz.vercel.app/token",
    data: {username: "Antonio"},
    headers: {"Content-Type": "application/json", "Accept": "application/json"}
  })

.then((response) => {
    const token = response.data.accessToken;

    // Enviando uma requisição tipo GET para obter os exercícios
    axios({
        method: 'get',
        url: 'https://servidor-exercicios-js-eficaz.vercel.app/exercicio',
        headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
    })

    .then((response) => {
        console.log(response.data)
    }, (error) => {
        console.log(error)
    })
    }, (error) => {
    console.log(error)
    });

