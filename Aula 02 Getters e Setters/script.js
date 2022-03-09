const variavel = { 

  get moeda () {
    return "O valor é de R$ " + this.valor.toFixed(2).replace(".",",");
  },
  get xpto() {
    return this.valor
  },
  set xpto(i) {    
    this.valor = i
  },
  get conversao () {
    if(this.conversor === 'peso') {
      return 0.046 * this.valor;
    }
  }
}

// Em padrões de mercado o "_" é utilizado para representar private
const carro = {
  _cor: '',

  get cor() {
    return this._cor
  }
}

 
variavel.valor = 200;
variavel.conversor = "peso";
console.log(variavel.conversao); 
