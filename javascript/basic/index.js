var n1 = 2;
var n2 = 3;

verificar(n1, n2);

function verificar(n1, n2) {
  var soma;
  var comparar;
  var txtSoma;
  var maior_menor;
  var resultado;

  if (!n1 || !n2) return console.log("Defina dois numeros");

  n1 === n2
    ? (comparar = `Os números ${n1} e ${n2} são iguais.`)
    : (comparar = `Os números ${n1} e ${n2} não são iguais.`);

  soma = n1 + n2;
  txtSoma = ` Sua soma é ${soma}`;

  if (soma > 20) {
    maior_menor = `,que é maior que 10 e maior que 20.`;
  } else if (soma < 10 && soma < 20) {
    maior_menor = `,que é menor que 10 e menor que 20.`;
  } else {
    maior_menor = `,que é maior que 10 e menor que 20.`;
  }

  resultado = comparar + txtSoma + maior_menor;
  console.log(resultado);
}
