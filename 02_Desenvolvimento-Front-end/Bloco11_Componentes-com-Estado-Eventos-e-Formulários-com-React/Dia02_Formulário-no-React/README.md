**Para fixar - dia02**

**1.** Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado

**2.** Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.

**3.** Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles.

**4.** Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente.

**5.** Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos . Acrescente um ao seu formulário.

**6.** Encapsule alguns dos seus campos num fieldset . Entenda como ele funciona lendo a documentação .

**7.** Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.

**8.** Faça duas validações em um desses componentes filhos e uma em um outro.

**9.** Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.

**Dica:** Se algum dos componentes transmitir true para a função que fará o handle dos erros, qual valor deve ser armazenado no Estado ?

**Exercicios - my-form-2.0**

_Crie um novo projeto, utilizando npx create-react-app my-form-2.0_
_Caso julgue necessário, crie estilos CSS para seu formulário, de acordo com a sua imaginação._
_Faça tudo utilizando as abstrações do React ._

Vamos criar um formulário de cadastro de currículo com base na especificação seguintes:

**1.** Crie um <fieldset> para os dados pessoais a seguir:
  _Nome - Texto_
    _Limite de 40 caracteres_
    _Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados._
    _Campo obrigatório_

  _Email - Texto_
    _Limite de 50 caracteres_
    _Campo obrigatório_

  _CPF - Texto_
    _Limite de 11 caracteres_
    _Campo obrigatório_

  _Endereço - Texto_
    _Limite de 200 caracteres_
    _Remover qualquer caracter especial que seja digitado_
    _Campo obrigatório_

  _Cidade - Texto_
    _Limite de 28 caracteres_
  _Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, _limpar o campo._
  _Campo obrigatório._

  _Estado - ComboBox_
    _Todos os estados do Brasil_
    _Campo obrigatório._

  _Tipo - Radio Button_
    _Casa, Apartamento_
    _Campo obrigatório._

**2.** Crie outro <fieldset> para dados do seu último emprego:
  _Resumo do currículo - TextArea_
    _Limite de 1000 caracteres_
    _Campo obrigatório._

  _Cargo - TextArea_
    _Limite de 40 caracteres_
    _Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez._
    _Campo obrigatório_

  _Descrição do cargo - Texto_
    _Limite de 500 caracteres_
    _Campo obrigatório_

**3.** Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.

**4.** Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

**Bônus**
    _Utilize regex(https://www.regextester.com/100026) para validar o campo email._
      _O formato esperado é: trybe@gmail.com ._
      _Dica: Para estudar como o regex funciona, utilize o https://regexone.com/ ._