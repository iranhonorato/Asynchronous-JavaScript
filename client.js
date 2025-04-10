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





    // Resolvendo os problemas 
    .then((response) => {




        // Soma valores
        const soma = (a,b) => {
            return a + b 
        }
        const resultadoSoma = soma(response.data.soma.entrada.a, response.data.soma.entrada.b)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/soma",
            data: {"resposta": resultadoSoma},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto 













        // tamanho string
        const tamanhoString = string => {
            return string.length
        }
        const resultadoTamanhoString = tamanhoString(response.data['tamanho-string'].entrada.string)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/tamanho-string",
            data: {"resposta": resultadoTamanhoString},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto











        // Nome do usuário 
        const nameUser = string => {
            const index = string.indexOf("@")
            return string.slice(0,index)
        }
        const resultadoNameUser = nameUser(response.data['nome-do-usuario'].entrada.email)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/nome-do-usuario",
            data: {"resposta": resultadoNameUser},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto 









        // Jaca wars 
        const jacaWars = (vel, ang) => {
            const space = (vel)*Math.sin(ang*Math.PI/90)/9.8
            const delta = 0.00000001
            if (space === 100) {
                return 0
            } else if (space < 100) {
                return -1
            } else {
                return 1
            }
        }
        const resultadoJacaWars = jacaWars(response.data['jaca-wars'].entrada.v, response.data['jaca-wars'].entrada.theta)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/jaca-wars",
            data: {"resposta": resultadoJacaWars},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto 














        // Ano bissexto 
        const bissexto = ano => {
            const anoString = String(ano)
            if (anoString.slice(-2) === "00") {
                return ano % 400 === 0 ? true : false
            } else { 
                return ano % 4 === 0 ? true : false 
            }
        }
        const resultadoBissexto = bissexto(response.data['ano-bissexto'].entrada.ano)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/ano-bissexto",
            data: {"resposta": resultadoBissexto},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto 
        











        // Volume da pizza 
        const volumePizza = (raio, h) => {
            return Math.round((Math.PI)*h*(raio**2))
        }
        const resultadoVolumePizza = volumePizza(response.data["volume-da-pizza"].entrada.z, response.data["volume-da-pizza"].entrada.a)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/volume-da-pizza",
            data: {"resposta": resultadoVolumePizza},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto 
        











        // mru 
        const mru = (s, vel, t) => {
            return s + vel*t
        }
        const resultadoMru = mru(response.data.mru.entrada.s0, response.data.mru.entrada.v, response.data.mru.entrada.t) 
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/mru",
            data: {"resposta": resultadoMru},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto 

        











        // Inverte string 
        const inverteString = string => {
            let novaString = ""
            let i = string.length
            for (let i = string.length; i !== 0; i--) {
                novaString += string[i-1]
            }
            return novaString
        }
        const resutladoInverteString = inverteString(response.data['inverte-string'].entrada.string)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/inverte-string",
            data: {"resposta": resutladoInverteString},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto 











        // Soma valores 
        const somaValores = obj => {
            let resultado = 0
            for (const valor of Object.values(obj)) {
                resultado += valor 
            }
            return resultado 
        }
        const resultadoSomaValores = somaValores(response.data['soma-valores'].entrada.objeto)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/soma-valores",
            data: {"resposta": resultadoSomaValores},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto 
        
        









        
        // n-ésimo primo 
        const verificaPrimo = num => {
            if (num > 0 && num !== 1) {
                for (let i = 2; i !== num; i++) {
                    if (num % i === 0) {
                        return false
                    }
                }
            } else {
                return false
            }
            return true
        }
        const primo = num => {
            let array = []
            let i = 0 
            while (array.length !== num) {
                if (verificaPrimo(i)) {
                    array.push(i)
                }
                i++
            }
            return array[array.length - 1]
        }
        const resultadoPrimo = primo(response.data["n-esimo-primo"].entrada.n)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/n-esimo-primo",
            data: {"resposta": resultadoPrimo},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        // Correto
    





        const maiorPrefixo = array => {
            let maiorPrefixo = ""
            for (let i = 0; i < array.length; i++) {
        
                // Roda um elemento na frente do primeiro for 
                for (let j = i + 1; j < array.length; j++) {
        
                    // Encontrar o prefixo comum entre este par de strings
                    let prefixoAtual = ""
                    const palavra = array[i];
                    const proxPalavra = array[j];
        
                    // Compara caracteres em ambas as strings
                    for (let k = 0; palavra[k] === proxPalavra[k] && k < palavra.length && k < proxPalavra.length; k++) {
                        prefixoAtual += palavra[k];
                    }
                    // Atualizar o maior prefixo se este for maior
                    if (prefixoAtual.length > maiorPrefixo.length) {
                        maiorPrefixo = prefixoAtual;
                    }
                }
            }
            return maiorPrefixo;
        }
        const resultadoMaiorPrefixo = maiorPrefixo(response.data['maior-prefixo-comum'].entrada.strings)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/maior-prefixo-comum",
            data: {"resposta": resultadoMaiorPrefixo},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
        })
        // Correto









 
        const second = array => {
            // Ordenando o array original 
            array.sort((a, b) => a - b)
        
            const segundoMenor = array[1]
            const segundoMaior = array[array.length - 2]
        
            return segundoMenor + segundoMaior
        }
        const resultadoSecond = second(response.data['soma-segundo-maior-e-menor-numeros'].entrada.numeros)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/soma-segundo-maior-e-menor-numeros",
            data: {"resposta": resultadoSecond},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
        })
        // Correto 


        

        const palindromo = array => {
            const newArray = []
        
            // Organizando 
            for (const elem of array) {
                newArray.push(elem.toLowerCase().split("").reverse().join(""))
            }
        
            const arrayPalindromo = []
            for (const elem of array) {
                if (newArray.includes(elem)) {
                    arrayPalindromo.push(elem)
                }
            }
            return arrayPalindromo.length
        }
        const resultadoPalindromo = palindromo(response.data['conta-palindromos'].entrada.palavras)
        axios({
            method: "post",
            url: "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/conta-palindromos",
            data: {"resposta": resultadoPalindromo},
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
        })
        .then((response) => {
            console.log(response.data)
        })




    }, (error) => {
        console.log(error)
    })
    }, (error) => {
    console.log(error)
    });

