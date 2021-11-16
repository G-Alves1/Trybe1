**Exercícios React**

**1.** Crie uma lista de tarefas simples seguindo os passos abaixo:
  _insira a função Task a seguir acima do seu componente App dentro do arquivo App.js :_
```sh
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
```

  _agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start ._
  _por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App ._

**2.**
  _Na pasta src, crie um novo arquivo chamado Header.jsx , que representará o componente Header;_
  _No arquivo Header.jsx , crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;_
  _No arquivo App.js , importe o componente Header criado anteriormente;_
  _Renderize o componente Header no App.js ;_
  _Na pasta src, crie um novo arquivo chamado Content.jsx , que representará o componente Content ;_
  _Dentro do arquivo Content.jsx , crie uma classe React chamada Content ;_
  _Ainda no arquivo Content.jsx , adicione o seguinte array:_
```sh
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
```

  _A classe Content deve renderizar o array conteudos com a utilização da função map, como visto anteriormente, com o seguinte formato:_
```sh
O conteúdo é: `Nome do Conteúdo`
Status: `Status do Conteúdo`
Bloco: `Bloco do Conteúdo`
```

  _Lembre-se de adicionar o atributo 'key' ao elemento pai dessa lista, na renderização._
  _Exporte o componente Content ;_
  _No arquivo App.js , importe o componente Content criado anteriormente;_
  _Renderize o componente Content no App.js ;_
  _Crie um novo arquivo Footer.jsx ;_
  _No arquivo Footer.jsx , crie uma classe chamada Footer .
  _A classe Footer deve renderizar uma tag h1 com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado._
  _Importe o componente Footer no app.js_
  _Renderize o componente Footer no app.js ._

**3.** Bônus Estilize a aplicação do exercicio 2. Para isso, adicione classes para estilização dos seus componentes de forma que cada conteúdo listado seja um Card.
Para adicionar uma classe de estilização em um elemento HTML, utilize o atributo className:
```sh
<footer className='footer'>
  ...
</footer>
```