
// Objeto criado com uma função onde foi chamada através do 
// objeto.função 

const pessoa = {
  nome: "Jaque",
  idade: 28,
  cumprimentaPessoa(nome = "") {
    return ("Seja bem vindo: " + nome);
  },
};

const mensagem = pessoa.cumprimentaPessoa("Joao");
console.log(mensagem);


/*

Se você trabalha com outras linguagens de programação como C++, Java e PHP, 
já deve conhecer a palavra-chave this.
Nessas linguagens, a palavra-chave this representa a instância do objeto atual
 no método da classe. E a palavra this é relevante apenas dentro de um método de
  classe, o que significa que você não pode usá-la fora de um método.
O JavaScript possui a palavra-chave this que se comporta de maneira diferente 
de outras linguagens de programação, esse fato pode confundir você no início.
Em JavaScript você pode usar this no contexto global e no contexto de função. 
Além disso, o comportamento do this muda entre o modo estrito e o não estrito.

O que é a palavra-chave "this"?
O this faz referência ao objeto do qual a função é uma propriedade. 
Em outras palavras, o this faz referência ao objeto que está chamando a 
função no momento.

*/

const counter = {
  count: 0,
  next: function () {
    return this.count++;
  }
}

counter.next()
counter.next()
counter.next()

// Dentro da função next() o this faz referência ao objeto counter.
// O next() é uma função que é propriedade do objeto contador. 
// Portanto, dentro da função next() o this faz referência ao objeto counter.
// A propósito, quando uma função é propriedade de um objeto, isso é chamada de método.


console.log(counter.count)

/**
 * 
 * Contexto Global
  No contexto global, o this faz referência ao objeto global, que é o
 objeto window no navegador de internet ou ao objeto global no Node.js.


*/

console.log(this == window); // retorna true 

// Se você atribuir uma propriedade ao objeto this no contexto global,
// o JavaScripti adicionará a propriedade como sendo uma propriedade do 
// objeto global, conforme o exemplo a seguir:


this.color = "Red";
console.log(window.color);


/**
 * Contexto de função
 */


function show() {
  console.log(this === window); // retorna true 
}

show();

/**
 * Quando você chama a função show(), o this se refere ao objeto global, 
 * que é o windows no navegador de internet ou global no Node.js.
 Chamar a função show() dessa forma é a mesma coisa:
 */

window.show(); // retorna true 


/**
 * 
 * 2) Invocação de método
Quando você chama o método de um objeto, o JavaScript aponta o this para o
objeto que possui o método. Veja o seguinte objeto car:
 */

let carro = {
  marca: "Honda",
  getMarca: function () {
    return this.marca;
  }
}

console.log(carro.getMarca());

/**
 * 
 * Neste exemplo, o objeto this no método getMarca() se refere ao objeto carro.
Como um método é uma propriedade de um objeto que possui um valor, 
você pode armazenar esse método em uma variável.
 */

let marca = carro.getMarca;

console.log(marca());


/**
 * 
 * Você obtém undefined em vez de "Honda" porque ao chamar o método
 *  sem especificar o objeto, o JavaScript o define this como objeto global 
 * no modo estrito e como undefined no modo não estrito.
Para corrigir esse problema, use o método bind() do objeto Function.prototype. 
O método bind() cria uma nova função com o termo this e define como um valor
 especificado.
 */

let marca1 = carro.getMarca.bind(carro);
console.log(marca1());


/**
 * Neste exemplo, quando você chama o método getMarca(), 
 * o termo this é vinculado ao objeto carro. Veja:
 */


let carro1 = {
  marca: "Fiat",
  getMarca: function () {
    return this.marca;
  }
};

let moto = {
  marca: 'Harley'
}


let marca2 = carro1.getMarca.bind(moto);
console.log(marca2());


/**
 * Neste exemplo, o método bind() define o this como objeto da moto, 
 * portanto você vê o valor da
 *  propriedade marca do objeto moto no console.
 */


/**
 * 
 * 3) Chamada de construtor
Ao usar o termo new para criar uma nova instância de um objeto de função, 
você o utiliza como sendo um construtor.
O exemplo a seguir declara uma função Carro e a invoca como construtor:
 */



function Carro(marca) {
  this.marca = marca;
}

// Criando um método utilizando o prototype que é  global do JS 
Carro.prototype.getMarca = function () {
  return this.marca;
}

var carro2 = new Carro('Hyundai');

console.log(carro2);
console.log(carro2.getMarca());


/**
 * 
 * A expressão new Carro() é uma chamada construtora da função Carro.
O JavaScript cria um novo objeto e define this para o objeto recém criado. 

Agora, você pode chamar a função Car() como uma função ou como um construtor. 
Se você omitir a palavra new, dessa forma:

 */

var fiat = Carro('Fiat');
//console.log(fiat.getMarca);


/**
 * 
 * Devido o valor do this em Carro() ser definido como o objeto global, 
 * o fiat.getMarca retorna undefined.
Para garantir que a função Carro() seja sempre chamada usando a 
chamada de construtor, adicione uma verificação no início da 
função Carro() dessa forma:
 */

function Carro2(marca) {
  if (!(this instanceof Carro2)) {
    throw Error("Use o operador New para instanciar o objeto")
  }
  this.getMarca = marca;
}


var bmw = Carro2('BMW');
//console.log(bmw.getMarca);


/**
 * O ES6 introduziu uma metapropriedade chamada new.target que permite 
 * detectar se uma função é invocada como uma chamada simples ou como construtora.
Você pode modificar a função Carro() para usar a metapropriedade new.target 
da seguinte forma:

 */

function Carro3(marca) {
  if (!new.target) {
    throw Error("Use o operador New para instanciar o objeto")
  }
  this.getMarca = marca;
}


var bmw1 = Carro3('BMW');
//console.log(bmw1.getMarca);