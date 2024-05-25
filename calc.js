// function media(nota1, nota2){
//     var media = (nota1 + nota2)/2
//     console.log(media)
// }
// media(6, 8)

function limpar(){
    document.getElementById('resultado').innerHTML = ""
}

function voltar(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.lenght -1)
}

function inserir(botao){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + botao
}

function calcular(){
    var caixinha = document.getElementById('resultado').innerHTML
    if(caixinha){
        document.getElementById('resultado').innerHTML = eval(caixinha)
    }else{
        document.getElementById('resultado').innerHTML = "... nada"
    }
}