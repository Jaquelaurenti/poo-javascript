
function qualquerCoisa(){
  let num = 1;
  return num.toUpperCase();
}

/*try {
  
  // invocando a função
  qualquerCoisa();
  console.log("quero fazer algo")
}
catch(error) {
  console.log("entrei no catch")
  console.log(error);
  console.log(error.message);
  console.log(error.name)
}*/


// criando várias instruções de try catch

function funcaoFunciona(){
  console.log("Turma 837 # Lets Code");
}

/*try {
  qualquerCoisa();
  console.log("Dando sequencia no código")
}
catch(err){
  console.log(err)
}


try {
  console.log("mesmo o try acima dando erro este funcionou")
  funcaoFunciona()
}
catch(error){
  console.log(error)
}*/




/*try {
  //qualquerCoisa();
  funcaoFunciona()
  console.log("Dando sequencia no código")
}
catch(err){
  console.log(err)
}
finally {
  console.log("Final do try ou do catch");
}*/


function ValidaErro(mensagemErro) {
  this.erro = mensagemErro;
}

function validaString(nome) {
  try {
    if(typeof nome !== 'string') {
      // o throw é uma declação que lança 
      throw new ValidaErro("Erro no formato")
      // console.log("dar sequencia")

    }else {
      console.log(`Olá ${nome}`);
    }
  }
  catch(e) {
    console.log(e.erro)
  }
}

validaString(11)



/**
 * 
 * 
- Crie um método de Leasing para o cliente
considerando as seguintes condições:
- Se cliente PJ, considerar Juros diário de 1%
- Se cliente PF, considerar juros diário de 0.5 %

- Sempre que o usuário for fazer um saque, pagar uma conta, ou realizar 
transferência e o saldo disponível em conta for menor que o valor da operação,  
verificar se o mesmo quer fazer uso do Leasing, se sim, liberar o saque e informar o 
valor negativo e a taxa de juros a ser aplicada.

- Implementar um método que calcule e armazene o saldo do juros do leasing da conta, 
sendo separado por data, para ser possível ver o quanto de juros de leasing o cliente 
esta acumulando diariamente.
[Saldo negativo:
Juros Diário:
Data:
Juros Total Acumulado:]

OBS: Sempre que o cliente entrar no cheque especial o metodo precisa ser invocado

- Crie um método que irá verificar se o cliente está com cheque especial, 
e se ocorrer um depósito em conta, é necessário abater o valor do cheque especial

*
/

- SQUAD 01 - THALES, JOSUE, BRUNA E MANOELLA
- SQUAD 02 - MATHEUS CARNEIRO,  GABRIELA, LUCAS, GABRIEL,PEDRO,
- SQUAD 03 - DECIO, FABI, ANA, MARLON, 
- SQUAD 04 - LUAN, DEBORA, LUIZ, AUGUSTO, HIAGO