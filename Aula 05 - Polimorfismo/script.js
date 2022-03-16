/**
 * polimorfismo é o princípio pelo qual 
 * duas ou mais classes derivadas da 
 * mesma superclasse podem invocar 
 * métodos que têm a mesma assinatura, 
 * mas comportamentos distintos.
 */

class Pessoa {
  constructor(nome, idade, endereco){
    this.nome = nome, 
    this.idade = idade,
    this.endereco = endereco
  }
  cumprimentaPessoa = () => `Ola ${this.nome}`
}

class PessoaFisica extends Pessoa {
  constructor(nome, idade, endereco, rg){
    super(nome, idade, endereco);
    this.rg = rg
  }

  cumprimentaPessoa = () => `Ola ${this.nome} do RG: ${this.rg}`

}


const pessoaNormal = new Pessoa(
  "Jaque",
  28,
  "xpto"
);

console.log(pessoaNormal.cumprimentaPessoa())


const pessoaFisica = new PessoaFisica(
  "Decio",
  28,
  "xpto",
  "2525252525"
);

console.log(pessoaFisica)


/**
 * No cliente pessoa física, criar um método
onde retorna os dados de rg e cpf.
No cliente pessoa juridica, criar um método
onde retorna os dados do cnpj

Utilize o conceito de Polimorfismo para execução da solicitação acima


Crie uma Classe Lançamentos 
e para cada operação de saque ou depósito
Insira os seguintes registros nessa classe:
  - Nome do Cliente
  - Tipo da Operação (se foi saque ou se foi depósito)
  - Valor
  - Horario da Transação

Considerando o conceito de encapsulamento
deixe o saldo bancário do cliente inacessível fora do escopo de conta.
Lembre-se apenas o escopo de conta poderá movimentar o saldo bancário.

Crie um método que calcule o juros de atraso 
de um determinado pgto, onde tenha as seguintes regras: 
- Atraso de 1 dia juros de 1%
- Atraso de 2 dias juros 2.5 % 
- Atraso de 3 dias ou mais, juros composto 

Squad 3: https://github.com/mcarneir0/javascript-poo-lets-code/tree/main/aula-04/atividade

squad 2: https://github.com/kallyup/lets-modulo-2/blob/main/desafios/grupo.js

Grupo 04: https://github.com/Decioagu/Vem-Ser-Tech/tree/main/POO-JavaScript%2F2022.03.14

grupo 1: https://github.com/Luvlore/lets_code/tree/master/programacao-orientada-a-objetos/aula-04/exercicios

 * 
 * /

