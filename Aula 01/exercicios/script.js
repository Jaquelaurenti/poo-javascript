/*

3)Crie uma função construtora, para criar um "Aluno".

Deverá conter as seguintes propriedades: nome, idade, email, matricula, curso.

Instancie o Aluno e printe o resultado.

Utilizando a estrutura de aluno, adicione uma função que retorne o 
curso do aluno através do prototype da função.

Invoque a função e printe o resultado
*/

function Aluno(nome, idade, email, matricula, curso){
  this.nome = nome, 
  this.idade = idade, 
  this.email = email, 
  this.matricula = matricula,
  this.curso = curso

};


Aluno.prototype.getCurso = function () {
  return this.curso
}

// instanciei
const aluno1 = new Aluno(
  "Jaque",
  28,
  "jaque@gmail.com",
  123456,
  "POO"
);



// printei o resultado
console.log(aluno1)
console.log(aluno1.getCurso())
