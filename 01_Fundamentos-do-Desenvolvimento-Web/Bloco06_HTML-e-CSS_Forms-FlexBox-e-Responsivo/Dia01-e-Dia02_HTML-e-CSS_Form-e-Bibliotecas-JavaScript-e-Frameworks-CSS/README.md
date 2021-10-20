**Dia 01**

**Para fixar - index.html**
Vamos praticar um pouco, criando uma tela de login? 🔥
**1.** Adicione os campos de entrada para email e senha.

**2.** Adicione um checkbox com o texto Lembre-me .

**3.** Adicione um botão com o texto Entrar .

**4.** Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.

**5.** Adicione o atributo required para os campos de email e senha.

**6.** Adicione o atributo autocomplete="off" para o campo de email.

**7.** Adicione o atributo autofocus para o campo de email.

**Criando um formulário de currículo - form.html style.css script.js**

_Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:_
_Faça as validações inicialmente pelo HTML_

**1.** Crie um <fieldset> para os seguintes dados pessoais:
  _Nome - Texto_
    _Limite de 40 caracteres_
    _Campo obrigatório_
  _Email - Texto_
    _Limite de 50 caracteres_
    _Campo obrigatório_
  _CPF - Texto_
    _Limite de 11 caracteres_
    _Campo obrigatório_
  _Endereço - Texto_
    _Limite de 200 caracteres_
    _Campo obrigatório_
  _Cidade - Texto_
    _Limite de 28 caracteres_
    _Campo obrigatório_
  _Estado - Select_
    _Todos os estados do Brasil_
    _Utilize estruturas de repetição via JavaScript para gerar os <option>_
    _Campo obrigatório_
  _Tipo - Radio Button_
    _Casa, Apartamento_
    _Campo obrigatório_

**2.** Crie outro <fieldset> para dados do seu último emprego
  _Resumo do currículo - TextArea_
    _Limite de 1000 caracteres_
    _Campo obrigatório_
  _Cargo - Texto_
    _Limite de 40 caracteres_
    _Campo obrigatório_
  _Descrição do cargo - Texto_
    _Limite de 500 caracteres_
    _Campo obrigatório_
  _Data de início - Texto_
    _Verificar o formato da data dd/mm/aaaa ._
    _O dia deve ser > 0 e <= 31._
    _O mês deve ser > 0 e <= 12._
    _O ano não pode ser negativo._
    _Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
    _Campo obrigatório_

**3.** Logo abaixo do formulário, crie um botão que:
  _Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit_
  _Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário._
  _Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário._
  _Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada._

**4.** Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.


**Dia 02**

**1.** Adicione um framework CSS de sua escolha ao formulário que você construiu na última aula e o utilize para estilizar o formulário.

**2.** Adicione uma biblioteca JavaScript de date picker ao formulário que você construiu na última aula. Utilize essa biblioteca no campo "Data de início" do formulário. Você pode remover as validações de data que adicionou, uma vez que a biblioteca se encarregará de permitir somente datas válidas.

**3.** Adicione uma biblioteca JavaScript de validações ao formulário que você construiu na última aula. Utilize essa biblioteca para substituir as validações que você fez manualmente.