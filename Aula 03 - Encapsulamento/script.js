class Pessoa {
  constructor(nome, idade) {
    this.nome = nome,
      this.idade = idade
  }
  apresentar() {
    return `O meu nome é ${this.nome}
    e tenho ${this.idade} anos.`
  }
}

// instanciar a classe pessoa
/*const p1 = new Pessoa("Jaque", 28);
console.log(p1);
console.log(p1.apresentar());
console.log(p1.nome);
console.log(JSON.stringify(p1));
console.log(Object.keys(p1));
console.log(Object.values(p1));*/

// Transaformar alguns em privado
class PessoaPrivada {
  #nome
  #idade
  email
  constructor(nome, idade, email) {
    this.#nome = nome,
      this.#idade = idade
    this.email = email
  }
  get nome() {
    return this.#nome
  }
  set nome(u) {
    this.#nome = u
  }
  apresentar() {
    return `O meu nome é ${this.#nome}
    e tenho ${this.#idade} anos.`
  }
  // para resolver o caso do Json
  toJSON() {
    return {
      nome: this.nome, // ACESSANDO ATRAVES DO GETTER
      idade: this.#idade, // acessando a propriedade privada
      email: this.email
    }
  }

}


// instanciar a classe pessoa
const p2 = new PessoaPrivada("Joao", 28, 'joao@letscode.com.br');

/*console.log(p2.nome)
console.log(p2);
console.log(p2.email);
console.log(p2.apresentar());

console.log(p2.nome); // a chamada foi feita do atributo
console.log(JSON.stringify(p2));
console.log(Object.keys(p2));
console.log(Object.values(p2));*/


