class Animal {
  constructor(especie) {
    this.especie = especie
  }
}

// Extendendo a classe pessoa de animal

class Pessoa extends Animal {  
  constructor( nome, idade, especie = "homo sapiens sapeiens",) {
    super(especie)
    this.nome = nome,
    this.idade = idade
  }

  imprimeDados(saudacao) {
    return `${saudacao}, ${this.nome} tem ${this.idade} anos.`
  }
}


class Cidadao extends Pessoa  {
  constructor(nome, idade, cpf, rg) {
    super(nome, idade)
    // o método supr executa o construtor da classe 
    // neste caso a classe Pai é pessoa
    // internamente o método super está fazendo
    // this.nome = nome
    // this.idade = idade
    this.cpf = cpf,
    this.rg = rg
  }
}
 

 const joao = new Pessoa('Joao', 22);
 console.log(joao)

 const jaque = new Cidadao('Carlos', 24, '00000', '1111');

 console.log(jaque)