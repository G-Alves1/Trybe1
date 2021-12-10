**Exercício Todo List - exercise-todo-list**

**1.** Implemente os testes:

  __Necessário um botão para adicionar a tarefa._
  Botão precisa conter o texto "Adicionar"._
  _Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva._

Pode adicionar mais testes que achar relevantes para verificar a funcionalidade desse botão.

**2.** Teste a aplicação. Atenção ao que o teste orienta:

  _Use o array já disponibilizado no código para realizar os testes. Cada elemento do array será uma tarefa. Simule a adição de todas e depois verifique se elas estão aparecendo._
  _Teste apenas o componente Item. Ao passar uma string para ele ela precisa aparecer na tela._

**3.** Diferente dos outros, os testes já estão prontos, sendo necessário criar apenas as funcionalidades que eles testam.

  _Adicionar funcionalidade de selecionar uma task._
  _Adicionar um botão para apagar a task selecionada com o texto "Remover". Esse botão deverá surgir ao adicionar cada task, ou seja, um botão por task._
  _Observe bem como os teste estão escritos, todos devem passar quando terminar a funcionalidade._


**Exercício Jogo da Velha - exercise-tic-tac-toe**

**1.** Escreva os testes para as configurações iniciais do jogo:

  _Campos vazios;_
  _Sem mensagem de Fim de jogo;_
  _9 Casas renderizadas._

Fique livre para adicionar novos testes.

**2.** Agora, além de realizar alguns testes, será necessário implementar algumas funcionalidades. O arquivo TicTacToe.js possuí algumas informações de como o jogo deve funcionar.

  _Dois jogadores jogam o jogo;_
  _A cada clique em uma casa o jogador deve ser mudado;_
  _Cada jogador deverá possuir uma marcação (as imagens que estão no repositório, x.png, o.svg);_
  _Ao clicar na casa escolhida, a casa deve ser modificada para possuir a marcação do jogador, X ou O;_
  _Ao clicar em uma casa já marcada, nada deve acontecer;_
  _AS casas marcadas não podem ser modificadas;_

Teste o comportamento de cada casa, alguns exemplos:

  __O símbolo mudar quando clica em uma e depois em outra, mostrando a troca do jogador;_
  _Casa não pode ser mudada depois de clicada em por algum jogador;_

Caso tenha dúvida volte no conteúdo ou olhe na documentação, lembre que abordamos apenas algumas querys, tem outras que podem ser utilizadas.

**3.** Agora você fará a funcionalidade de acordo com o teste já criado para ela. A funcionalidade deve ser criada no arquivo TicTacToe.js, boa parte dele já está criado, fique atento com as instruções passadas.

Precisamos saber quando que o jogo acaba! Os testes já foram implementados, mas se roda-los verá que nenhum passa. Essa funcionalidade ainda não está pronta e precisa ser criada.

Crie a aplicação observando os teste, eles te guiarão.

Bônus - Nossos testes não cobrem caso de empate ou quem foi o ganhador.

_Crie uma mensagem para ver quem é o vencedor ou quando acontecer o empate._
_Crie os teste para essa nova funcionalidade._
_Adicione um botão para recomeçar o jogo. Crie os teste para ele._