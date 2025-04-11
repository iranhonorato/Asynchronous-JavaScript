import axios from "axios"
import fs from "fs";



// Pegando o token de acesso 
async function getToken() {
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/token",
            {username: "antonioihsj"}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json"}}
        ) 
        return response.data.accessToken
    } catch (error) {
        return error
    }
}


// Pegando os exercícios
async function getExercises(token) {
    try {
        const response = await axios.get(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio", 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        )
        return response
    } catch (error) {
        return error
    }
}

// Pegando o token de acesso 
const token = await getToken()

// acessando os exercícios
const exercises = await getExercises(token)


// Escrevendo um arquivo json com os exercícios
fs.writeFileSync("exercicios.json", JSON.stringify(exercises.data, null, 2));






// 1º exercício: soma 
function soma(a, b) {
    return a + b
}



// 2º exercício: tamanho-string 
function tamanhoString(string) {
    if (typeof string === "string") {
        return string.length
    }
}



// 3º exercício: nome-do-usuario
const nomeUsuario = function(string) {
    const index = string.indexOf("@")
    return string.slice(0,index)
}



// 4º exercício: jaca-wars
const jacaWars = function(vel, ang) {
    const g = 9.8;
    const rad = (2 * ang*Math.PI)/180; 
    const distancia = (vel**2)*Math.sin(rad)/g;

    if (distancia < 98) {
        return -1
    } else if (distancia > 102) {
        return 1
    } 

    return 0
}



// 5º exercício: ano-bissexto
const anoBissexto = ano => {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}



// 6º exercício: volume-da-pizza
const volumePizza = (raio, h) => {
    return Math.round((Math.PI)*h*(raio**2))
}



// 7º exercício: mru
const mru = (s, vel, t) => {
    return s + vel*t
}



// 8º exercício: inverte-string
const inverteString = string => {
    return string.split("").reverse().join("")
}



// 9ª exercício: soma-valores 
const somaValores = obj => {
    let resultado = 0
    for (const valor of Object.values(obj)) {
        resultado += valor 
    }
    return resultado
}



// 10º exercício: n-esimo-primo
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
const nEsimoPrimo = num => {
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



// 11º exercício: maior-prefixo-comum
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



// 12º exercício: soma-segundo-maior-e-menor-numeros
const somaSegundo = array => {

    // Ordenando o array original 
    array.sort((a, b) => a - b)

    const segundoMenor = array[1]
    const segundoMaior = array[array.length - 2]

    return segundoMenor + segundoMaior
}



// 13º exercício: conta-palindromos
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




// 14º exercício: soma-de-strings-de-ints
const converte = valor => {
    if (typeof Number(valor) === "number") {
        return Number(valor)
    }
    return 0
}
function somaString(array) {
    const soma = array.reduce((acumulador, valorAtual) => {
        return acumulador + converte(valorAtual);
    }, 0);
    return soma;
}





// 15º exercício: soma-com-requisicoes
const pegaUrl = async (url, token) => {
    try {
        const response = await axios({
            method: "get",
            url: `${url}`,
            headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}
          })
        return response.data
    } catch (error) {
        console.log(error)
        return NaN
}}

const somaComRequisicoes = async array => {
    const result = []
    for (const url of array) {
        const num = await pegaUrl(url, token)
        if (typeof num === "number") {
            result.push(num)
        } else {
            result.push(num)
        }
    }
    return result.reduce((acumulador,valorAtual) => acumulador + valorAtual, 0)
}


// 16º exercício: caca-ao-tesouro
//
//
//
//      código aqui
//
//
//



async function enviaResposta1(exercises, token) {     // Enviando 1º exercício 
    const arg1 = exercises.data.soma.entrada.a
    const arg2 = exercises.data.soma.entrada.b
    const resultadoSoma = soma(arg1, arg2)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/soma",
            {"resposta": resultadoSoma}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("soma: ", response.data.sucesso)
    } catch (error) {
        console.log("soma: ", error)
    }
}




async function enviaResposta2(exercises, token) {     // Enviando 2º exercício 
    const string = exercises.data['tamanho-string'].entrada.string
    const resultadoTamanhoString = tamanhoString(string)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/tamanho-string",
            {"resposta": resultadoTamanhoString}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("tamanho-string: ", response.data.sucesso)
    } catch (error) {
        console.log("tamanho-string: ", error)
    }
}



async function enviaResposta3(exercises, token){    // Enviando 3º exercício 
    const string = exercises.data['nome-do-usuario'].entrada.email
    const resultadoNomeUsuario = nomeUsuario(string)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/nome-do-usuario",
            {"resposta": resultadoNomeUsuario}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("nome-do-usuario: ", response.data.sucesso)
    } catch (error) {
        console.log("nome-do-usuario: ", error)
    }
}




async function enviaResposta4(exercises, token){    // Enviando 4º exercício 
    const vel = exercises.data['jaca-wars'].entrada.v
    const ang = exercises.data['jaca-wars'].entrada.theta
    const resultadoJacaWars = jacaWars(vel, ang)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/jaca-wars",
            {"resposta": resultadoJacaWars}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("jaca-wars: ", response.data.sucesso)
    } catch (error) {
        console.log("jaca-wars: ", error)
    }
}




async function enviaResposta5(exercises, token){    // Enviando 5º exercício 
    const ano = exercises.data['ano-bissexto'].entrada.ano
    const resultadoAnoBissexto = anoBissexto(ano)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/ano-bissexto",
            {"resposta": resultadoAnoBissexto}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("ano-bissexto: ", response.data.sucesso)
    } catch (error) {
        console.log("ano-bissexto: ", error)
    }
}




async function enviaResposta6(exercises, token){   // Enviando 6º exercício 
    const raio = exercises.data["volume-da-pizza"].entrada.z
    const h = exercises.data["volume-da-pizza"].entrada.a
    const resultadoVolumePizza = volumePizza(raio, h)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/volume-da-pizza",
            {"resposta": resultadoVolumePizza}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("volume-da-pizza: ", response.data.sucesso)
    } catch (error) {
        console.log("volume-da-pizza: ", error)
    }
}



async function enviaResposta7(exercises, token){    // Enviando 7º exercício 
    const S = exercises.data.mru.entrada.s0
    const V = exercises.data.mru.entrada.v
    const T = exercises.data.mru.entrada.t
    const resultadoMru = mru(S, V, T)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/mru",
            {"resposta": resultadoMru}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("mru: ", response.data.sucesso)
    } catch (error) {
        console.log("mru: ", error)
    }
}



async function enviaResposta8(exercises, token){    // Eviando 8º exercício 
    const string = exercises.data['inverte-string'].entrada.string
    const resultadoInverteString = inverteString(string)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/inverte-string",
            {"resposta": resultadoInverteString}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("inverte-string: ", response.data.sucesso)
    } catch (error) {
        console.log("inverte-string: ", error)
    }
}




async function enviaResposta9(exercises, token){    // Enviando 9º exercício
    const obj = exercises.data['soma-valores'].entrada.objeto
    const resultadoSomaValores = somaValores(obj)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/soma-valores",
            {"resposta": resultadoSomaValores}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("soma-valores: ", response.data.sucesso)
    } catch (error) {
        console.log("soma-valores: ", error)
    }
}




async function enviaResposta10(exercises, token){    // Enviando 10º exercício
    const num = exercises.data["n-esimo-primo"].entrada.n
    const resultadoNEsimoPrimo = nEsimoPrimo(num)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/n-esimo-primo",
            {"resposta": resultadoNEsimoPrimo}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("n-esimo-primo: ", response.data.sucesso)
    } catch (error) {
        console.log("n-esimo-primo: ", error)
    }
}




async function enviaResposta11(exercises, token){    // Enviando 11º exercício 
    const array = exercises.data['maior-prefixo-comum'].entrada.strings
    const resultadoMaiorPrefixo = maiorPrefixo(array)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/maior-prefixo-comum",
            {"resposta": resultadoMaiorPrefixo}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("maior-prefixo-comum: ", response.data.sucesso)
    } catch (error) {
        console.log("maior-prefixo-comum: ", error)
    }
}



async function enviaResposta12(exercises, token){    // Enviando 12º exercício
    const array = exercises.data['soma-segundo-maior-e-menor-numeros'].entrada.numeros
    const reusltadoSomaSegundo = somaSegundo(array)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/soma-segundo-maior-e-menor-numeros",
            {"resposta": reusltadoSomaSegundo}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("soma-segundo-maior-e-menor-numeros: ", response.data.sucesso)
    } catch (error) {
        console.log("soma-segundo-maior-e-menor-numeros: ", error)
    }
}




async function enviaResposta13(exercises, token){    // Enviando 13º exercício 
    const array = exercises.data['conta-palindromos'].entrada.palavras
    const resultadoPalindromo = palindromo(array)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/conta-palindromos",
            {"resposta": resultadoPalindromo}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
    console.log("conta-palindromos: ", response.data.sucesso)
    } catch (error) {
        console.log("conta-palindromos: ", error)
    }
}




async function enviaResposta14(exercises, token){    // Enviando 14º exercício
    const array = exercises.data['soma-de-strings-de-ints'].entrada.strings
    const resultadoSomaString = somaString(array)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/soma-de-strings-de-ints",
            {"resposta": resultadoSomaString}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("soma-de-strings-de-ints: ", response.data.sucesso)
    } catch (error) {
        console.log("soma-de-strings-de-ints: ", error)
    }
}



async function enviaResposta15(exercises, token){    // Enviando 15º exercício
    const array = exercises.data['soma-com-requisicoes'].entrada.endpoints
    const resultadoSomaComRequisicoes = await somaComRequisicoes(array)
    try {
        const response = await axios.post(
            "https://servidor-exercicios-js-eficaz.vercel.app/exercicio/soma-com-requisicoes",
            {"resposta": resultadoSomaComRequisicoes}, 
            {headers: {"Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${token}`}}
        ) 
        console.log("soma-com-requisicoes: ", response.data.sucesso)
    } catch (error) {
        console.log("soma-com-requisicoes: ", error)
    }
}



async function main() {
    // Envia as respostas 
    await enviaResposta1(exercises, token)
    await enviaResposta2(exercises, token)
    await enviaResposta3(exercises, token)
    await enviaResposta4(exercises, token)
    await enviaResposta5(exercises, token)
    await enviaResposta6(exercises, token)
    await enviaResposta7(exercises, token)
    await enviaResposta8(exercises, token)
    await enviaResposta9(exercises, token)
    await enviaResposta10(exercises, token)
    await enviaResposta11(exercises, token)
    await enviaResposta12(exercises, token)
    await enviaResposta13(exercises, token)
    await enviaResposta14(exercises, token)
    await enviaResposta15(exercises, token)
}


main()

