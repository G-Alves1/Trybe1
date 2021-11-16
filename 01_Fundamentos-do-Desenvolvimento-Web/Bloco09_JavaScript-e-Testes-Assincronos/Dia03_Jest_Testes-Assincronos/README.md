**Agora a prática - exercicies.js exercicies.test.js**

**1. - githubApi.test.js** O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
```sh
// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
```

**2. - exercicie2.test.js** Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach .
```sh
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
```
_Após escrever o que imagina que será o resultado, execute os testes e veja se acertou._

**exercise-magic-card**

**3.** Agora você vai treinar um pouco mais testes assíncronos em Jest com os exercícios do repositório exercise-magic-card . Antes de começar, leia atentamente e siga os passos indicados no README para fazer o fork e clone do repositório.

**3.1.** Antes de começar
  _Confirme que você está na branch exercise-one, se não estiver, execute os passos descritos no Readme antes de prosseguir._
  _Todas as funções já estão impĺementadas, você precisará se preocupar apenas em testá-las._
  _A função trybeSimulator já está pronta e disponível dentro do arquivo magic.test.js, onde você implementará seus testes. Mas atenção, você NÃO precisará modificá-la._
  _Não se preocupe em entender a estrutura da função trybeSimulator, você aprenderá a implementar este tipo de função futuramente no curso._
  _Não se esqueça de atualizar o número de expect.assertions, a cada expect que você implementar em seus testes._
**Dica de ouro:** leia e entenda cada parte da implementação da função getMagicCard que está no arquivo src/magic.js. Isso te ajudará a implementar os testes.

**Agora mão na massa**
**I -** Abra o arquivo tests/magic.test.js. Nele você encontrará a estrutura inicial dos testes ja montada. Essa estrutura no entanto está incompleta e precisa de ajustes para que a sintaxe do async/await seja aplicada de forma correta. Implemente o que falta para que a sintaxe do async/await esteja completa.

**II -** Implemente um teste que verifique se o retorno da função getMagicCardSimulator é igual ao objeto expected. spoiler-alert: você pode desestruturar o objeto response e obter diretamente suas propriedades.

**III -** Implemente um teste que verifique se a propriedade types é do tipo Array.

**IV -** Implemente um teste que verifique se a propriedade subtypes possui length === 2.

**V -** Implemente um teste que verifique se a propriedade rarity possui valor Uncommon.

**VI -** Implemente um teste que verifique se a propriedade name possui valor Ancestor's Chosen.

**VII -** Implemente um teste que verifique se a propriedade manaCost possui valor {5}{W}{W}.

**3.2.** Antes de começar
  _Confirme que você está na branch exercise-two, se não estiver, execute os passos descritos no Readme antes de prosseguir._
  _Dentro da pasta data, você encontrará o arquivo favoriteCards, leia e compreenda sua estrutura para realizar os exercícios._
  _A função getMagicCard sofreu alterações e agora além de realizar a chamada a API, ela também modifica o arquivo favoriteCards, adicionando um novo card a cada execução._
  _Não se esqueça de atualizar o número de expect.assertions, a cada expect que você implementar em seus testes._
**Dica de ouro:** leia e entenda cada parte da implementação da função getMagicCard que está no arquivo src/magic.js. Isso te ajudará a implementar os testes.

**Agora mão na massa**
Agora temos um arquivo com algumas das cartas preferidas do nosso jogador. Você pode verificar a sua estrutura no arquivo data/favoriteCards.js. Utilizaremos este arquivo para os próximos passos.

**I -** Implemente um teste que verifique que após a execução da função getMagicCard, favoriteCards passa a possuir length === 5.

**II -** Implemente um teste que verifique que na última posição do array favoriteCards existe um card com o a propriedade name e valor "Beacon of Immortality".

Para os próximos exercícios descomente o teste dentro do escopo do segundo it.

**III -** Após descomentar o teste dentro do segundo it, rode os testes.

Você vai perceber que o teste falhou. Consegue entender porque ele falha? Isso mesmo, a função getMagicCard modificou o arquivo favoriteCards no escopo do it anterior. Desta maneira, para o Jest, o array favoriteCards não possui quatro cards, mas sim, seis.

**IV -** Utilizando a função afterEach crie uma lógica capaz de restaurar o array favoriteCards que faça com que o teste passe.

**3.3.** Bônus
  _Este exercício será feito na mesma branch do exercício anterior: exercise-two._
  _Este exercício deve ser realizado após a implementação da função afterEach._
  _Implemente o teste solicitado dentro do escopo do segundo it._

**I -** Utilizando a função map, crie um array contendo apenas a propriedade name de todos os cards presentes no deck original, ou seja, no favoriteCards. Este array deve conter quatro nomes e deve ser salvo em uma nova variável.

**II -** Implemente um teste que verifique que o array que você obteve com o map do exercício anterior contém a seguinte estrutura e valores:

```sh
['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']
```