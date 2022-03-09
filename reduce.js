// reduce para calcular a soma dos números
const numbers = [20,10,30,50,100];
/* o primeiro parametro da callback  é o elemento da iteração atual é o segundo é o acumulador.
o reduce retorna um unico valor que é o valor final do acumulador*/
const total = numbers.reduce((curr,acc) => acc+=curr)
console.log(total) // 210