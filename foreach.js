// usando o foreach para calcular a tabuada do 7
numbers=[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(number => {
  let result = number * 7;
  console.log(`${number} * ${7} = ${result}`)
})

// o forEach aplica em cada elemento do array o que foi passado como lógica e não retorna nada