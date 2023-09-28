console.log(" Boas vindas!. ")

let nome = 'Guilherme';
console.log (`Olá ${nome}!`);
alert(`Olá ${nome}!`);

let valor1 = 2;
let valor2 = 5;
let resultado = valor1 + valor2;

console.log(`A soma do valor 1 com o valor 2 é de ${resultado}`)
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt('Digite a sua idade:');
if (idade > 17) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

var numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

let nota = 8; // Substitua pelo valor da nota que deseja testar

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
