alert("Boas vindas ao nosso site");
let nome = "lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

nome = prompt(" Qual seu nome?");
idade = prompt("qual a sua idade");
idade = prompt("Digite a sua idade");
if (idade >= 18) {
  alert("Pode tirar a habilitação");
}else{
    alert("Voce nao pode tirar a sua habilitação")
}