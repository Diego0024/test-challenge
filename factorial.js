function calcularFactorial(numero) {
    
    if (numero === 0) {
      return 1;
    }
  

    return numero * calcularFactorial(numero - 1);
  }
  
  module.exports = calcularFactorial;
  