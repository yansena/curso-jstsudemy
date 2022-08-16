const nome = 'Yan';
const sobrenome = 'Sena';

const falaNome = () => {
  console.log(nome, sobrenome)
}

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;

console.log(module.exports)