class Pessoa {
  constructor( nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
  }

  falar(){
    console.log(`${this.nome} esta falando`)
  }

}

const p1 = new Pessoa('Yan', 'Sena');
const p2 = new Pessoa('Ster', 'Sena');
const p3 = new Pessoa('Flora', 'Sena');


console.log(p1, p2, p3)
p3.falar();
