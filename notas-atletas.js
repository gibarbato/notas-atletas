let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

// console.log(atletas);

// for (let i = 0; i < atletas.length; i++) {
//   for (let j = 0; j < atletas.length; j++) {
//     console.log(`${atletas[i].nome} -> nota ${j + 1} - ${atletas[i].notas[j]}`)
//   }
// }

let max = 0
let min = 0
let soma = 0
let media = 0
for (let x = 0; x < atletas.length; x++) {
  soma = atletas[x].notas.reduce(function (total, atual) {
    return total + atual
  }, 0);
  // notas atletas
  console.log("------")
  console.log(`${atletas[x].nome} -> notas ${atletas[x].notas}`)
  // valor máximo
  max = atletas[x].notas.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity)
  // valor mínimo
  min = atletas[x].notas.reduce(function (a, b) {
    return Math.min(a, b);
  }, Infinity)

  console.log(`Maior nota descartada - ${max}`);
  console.log(`Menor nota descartada - ${min}`);
  console.log(`Total notas válidas - ${soma - (max + min)}`);
  console.log(`Média notas válidas - ${(soma - max - min)/(atletas[x].notas.length-2)}`);
}


