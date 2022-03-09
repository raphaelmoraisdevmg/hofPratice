//criando uma função que aceita ifinitos argumentos usando o paramêtro rest

const sum = (...numbers) =>numbers.reduce((curr,acc)=>acc+=curr);
const reposta = sum(10,15,30,50,20) // 125
console.log(reposta)

// o paramêtro rest empacota tudo o que for passado de paramêtro em  um array possibilitando a aplicação de metodos de array 