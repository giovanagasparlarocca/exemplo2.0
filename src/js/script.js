//alert("Hello world");
//declaração e variaveis

var nome="Fiap";
console.log(nome)

let idade="17";
console.log(idade)

const sobrenome= "Fiapinho";
console.log(sobrenome)

//undefine
let exemplo;
console.log(exemplo)

//nula
let exemplo1= null;
console.log(exemplo1)

//tipos de variaveis
let ex1= "fiap";
console.log(typeof ex1)

let ex2= 15;
console.log(typeof ex2)

let ex3= true;
console.log(typeof ex3)

let ex4= {};
console.log(typeof ex4)

let ex5= [];
console.log(typeof ex5)

//conversoes 
// float pra string
let numFloat = 123.456;
console.log(numFloat.toString())

//string para float
let numString= "12.963"
console.log(parseFloat(numString))

//int para string
let numInt = 2;
console.log(numInt.toString())

// string pra int
let numString1= "12"
console.log(parseInt(numString1))

// metodos
//metodo length- verifica tamanho da string
let frase = "o mundo da tecnologia"
console.log(frase.length)

// metodo indexof/lastindexof- retorna um trecho do seu codigo
let texto = "programação sustentável"
console.log(texto.indexOf("ão"))

// metodo slice- retorna parte de um texto passando o inicio e o final
let info ="programação de ponta"
console.log(info.slice(15,20))

// operadores aritimeticos
const a=10;
const b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//operadores logicos
const c=20;
const d=30;
console.log(c < d);
console.log(c> d && c<10);
console.log(c > b || d > c);
console.log( c == d || d <= c);

// operdores de comparação
const e=10;
const f=30;

console.log(e==f);
console.log(e===f);
console.log(e!=f);


