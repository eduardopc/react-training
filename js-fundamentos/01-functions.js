// functions

function myFunction() {
  this.nome = "myFunction";
}

const { nome } = new myFunction(); // objeto com a propriedade name apenas dentro do contexto da função
console.log(nome);

// arrow functions

const myArrowFunction = () => {
  this.name = "myArrowFunction";
};

myArrowFunction();

console.log(this.name); // arrow functions não possuem o this portanto a propriedade name é atribuida ao contexto de onde a arrow function esta sendo chamada
