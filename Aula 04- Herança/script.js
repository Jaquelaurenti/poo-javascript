"use strict";

class Animal {
  #pais
  constructor(especie, pais) {
    this.especie = especie,
    this.#pais = pais
  }
  /*get pais () {
    return this.#pais
  }
  set pais(i) {
    console.log("estou no set de pais")
    this.#pais = i
  }*/
 

}

// Extendendo a classe pessoa de animal

class Pessoa extends Animal {  
  constructor( nome, idade, especie = "homo sapiens sapeiens", pais) {
    super(especie, pais)
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

 

 const joao = new Pessoa("Joao", 22, "", "Brasil")
 joao.pais = "Russia"
 const marlon = new Pessoa("Marlon", 22, "", "EUA")
 console.log(joao)
 console.log(marlon)

 