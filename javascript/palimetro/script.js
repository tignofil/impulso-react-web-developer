function verificaPalimetro(string) {
  if (!string) return "string inexistente";
  return string.split("").reverse().join("") === string;
}

//console.log(verificaPalimetro(""));

function verificaPalimetro2(string) {
  if (!string) return "string inexistente";
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalimetro2("gato"));
