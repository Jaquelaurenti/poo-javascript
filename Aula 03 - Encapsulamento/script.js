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


/**
 * Crie uma classe Sorteio que tem o número de pessoas inscritas
 *  e um método sorteiaPremio que sorteia um número que
 *  corresponderá ao número de inscrição do participante 
 * e declara o vencedor. 
 * */


/***
 * 
 * 
Crie uma classe Restaurante 
com as propriedades 
cidade, delivery (verdadeiro ou falso), 
pedidosPendentes e 
tempo de entrega estimado (calculado com base nos pedidos pendentes, 
sendo 10 + 2 * pedidosPendentes em minutos). 

Os restaurantes devem ser capazes de
 realizar entregas desde que o cliente esteja localizado na mesma cidade e, 
 para isso, precisamos de um método entregaPedido que devolve como resultado 
 se é possível realizar a entrega para um determinado cliente ou não e,
 em caso positivo, o tempo estimado de entrega.

 * 
 * */


class Restaurante {
  constructor(nome, cidade, delivery = false, pedidosPendentes = 0) {
    this.nome = nome,
    this.cidade = cidade,
      this.delivery = delivery,
      this.pedidosPendentes = pedidosPendentes
    this.tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes
  }
  entregaPedido(cidadeDoCliente) {
    if(cidadeDoCliente !== this.cidade) {
      return 'Entrega não pode ser realizada'
    }

    // acrescentando um pedido sempre que invocar o método entrega pedido
    this.pedidosPendentes += 1 ;
    this.tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes;

    // retorno a mensagem do tempo estimado
    return `Tempo de entrega estimado é de: ${this.tempoEntregaEstimado}`
  }

}

const churrascaria = new Restaurante("Joao e Maria", "SP", true, 1);
console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("RJ"))

class RestaurantePrivado {
  #tempoEntregaEstimado
  constructor(nome, cidade, delivery = false, pedidosPendentes = 0, numeroPedido) {
    this.nome = nome,
    this.cidade = cidade,
    this.delivery = delivery,
    this.pedidosPendentes = pedidosPendentes,
    this.#tempoEntregaEstimado = this.#formulaTempoEntrega(),
    this.numeroPedido = 0
    
  }
  entregaPedido(cidadeDoCliente) {
    if(cidadeDoCliente !== this.cidade) {
      return 'Entrega não pode ser realizada'
    }

    // acrescentando um pedido sempre que invocar o método entrega pedido
    this.pedidosPendentes += 1 ;
    this.#tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes;

    // retorno a mensagem do tempo estimado
    return `Tempo de entrega estimado é de: ${this.#tempoEntregaEstimado}`
  }
  #formulaTempoEntrega = () => {
    return 10 + 2 * this.pedidosPendentes
  }
  iniciarPedido() {
    return this.numeroPedido  += 1;
  }

}


const churrascariaPrivado = new RestaurantePrivado("Joao e Maria", "SP", true, 1, "NovoParametro");
console.log(churrascariaPrivado);
console.log(churrascariaPrivado.iniciarPedido())
console.log(churrascariaPrivado.iniciarPedido())
console.log(churrascariaPrivado.iniciarPedido())

console.log(churrascariaPrivado.numeroPedido)
