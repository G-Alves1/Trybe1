Com a etapa de instalação concluida e a documentação em mãos, vamos conhecer um pouco mais sobre o comando rodando exemplos práticos no terminal!

**1.** Sintaxe básica do curl .
```sh
	curl [OPTIONS] [URL]
```

_Options aqui podemos especificar diversas opções que nos permitem acessar informações e definir comportamentos/configurações, como por exemplo:_

	-u ou --user : Permite especificar nome de usuário e senha para autenticação no servidor.
	
	-T ou --upload-file : Permite transferir arquivos locais para uma URL remota.
	
	-s ou --silent : Coloca o curl em modo silencioso. Este comando fará com que mensagens de erro e status de progressão não gerem nenhum tipo de notificação.
	
    Caso você queira conhecer mais opções, é possível acessar o manual completo do curl através do comando curl --manual .

_URL é o endereço WEB ao qual vamos nos referir para fazer nosas requisições via comando curl ._

**2.** Agora faremos nossa primeira requisição para um site.
```sh
	curl testdomain.com
```

_Note que a resposta que você receberá no terminal será um código HTML que como vimos anteriormente, permite configurar a estrutura física da página web._

_Além disto, observe também que as tags 'html' , 'head' , 'title' , 'body' e 'h1' estão presentes na resposta. A tag 'h1' foi vista anteriormente no conteúdo e representa o título principal. As demais tags nós veremos com mais detalhes no próximo bloco de conteúdo._

**3.** Nesta próxima etapa, utilizaremos uma option do comando curl , conhecida como --head . Ela nos permitirá ter acesso a todo cabeçalho da página. Não se preocupe em entender todos os detalhes, vários pontos que estão presentes nesta resposta serão vistos por você com profundidade ao longo do curso!
```sh
	curl --head https://www.betrybe.com/
```

_Nesta requisição ao site da trybe, recebemos algumas informações como por exemplo:_

	Status da requisição : está representado pelo número 200, e nos informa que nossa requisição foi feita com sucesso.
	
	Server : Servidor Web para onde as requisições estão sendo feitas.
	
	Content-type : Especifica como os dados são representados. Neste caso, text/html

**4.** Por fim, veremos como podemos fazer uma requisição de download para uma URL específica, utilizando a option -O . A partir desta requisição você terá acesso ao arquivo localmente, no diretório em que o terminal está rodando.
```sh
	curl -O https://uploads-ssl.webflow.com/5dbd9ce75ad64f24b67f0932/5dbdd9165ad64f5e29811c52_BRAND3.png
```

_- _Note que o arquivo em sua máquina terá o mesmo nome do arquivo remoto. É comum que as nomenclaturas de arquivos remotos não sejam descritivas. Para resolver este problema, podemos utilizar uma segunda option do comando curl que nos permitirá nomear o arquivo da forma que desejarmos._
```sh
	curl -o trybe_logo.png https://uploads-ssl.webflow.com/5dbd9ce75ad64f24b67f0932/5dbdd9165ad64f5e29811c52_BRAND3.png
```

_Observe que agora o download foi feito com o nome trybe_logo.png ._