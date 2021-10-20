**Para fixar - scripts.js**

**1.** Crie um objeto player contendo as variáveis listadas abaixo.
```sh
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
```

**2.** Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

**3.** Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
```sh
[2006, 2007, 2008, 2009, 2010, 2018]
```

**4.** Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

**5.** Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.


**Para fixar 1 - scripts1.js**

**1.** Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
```sh
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};
```

**2.** Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
```sh
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
```


**Para fixar 2 - scripts2.js**
_Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. Por exemplo:_

```sh
let a = 5;
let b = 2;
a + b;
```
_... se transforma em:_
```sh
function sum(a, b) {
  return a + b;
```
_Verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes._

**Parte I - Objetos e For/In - scripts3.js**
Usando o objeto abaixo, faça os exercícios a seguir:
```sh
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

**1.** Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
```sh
Bem-vinda, Margarida
```

**2.** Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
```sh
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```

**3.** Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
```sh
personagem
origem
nota
recorrente
```

**4.** Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
```sh
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```

**5.** Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
```sh
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes
```

**Parte II - Funções - scripts3.js**
_Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis._

**1.** Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
_Exemplo de palíndromo: arara ._
_verificaPalindrome('arara') ;_
_Retorno esperado: true_
_verificaPalindrome('desenvolvimento') ;_
_Retorno esperado: false_

**2.** Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
_Array de teste: [2, 3, 6, 7, 10, 1]; ._
_Valor esperado no retorno da função: 4 ._

**3.** Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
_Array de teste: [2, 4, 6, 7, 10, 0, -3]; ._
_Valor esperado no retorno da função: 6 ._

**4.** Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
_Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; ._
_Valor esperado no retorno da função: Fernanda ._

**5.** Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
_Array de teste: [2, 3, 2, 5, 8, 2, 3]; ._
_Valor esperado no retorno da função: 2 ._

**6.** Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
_Valor de teste: N = 5 ._
_Valor esperado no retorno da função: 1+2+3+4+5 = 15 ._

**7.** Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
_Valor de teste: 'trybe' e 'be'_
_Valor esperado no retorno da função: true_
_verificaFimPalavra('trybe', 'be') ;_
_Retorno esperado: true_
_verificaFimPalavra('joaofernando', 'fernan') ;_
_Retorno esperado: false_