**Agora a prática**

**1.** Navegue até a raiz do projeto com o arquivo .txt;
```sh
        cd ~/Trybe/
```

**2.** Verifique se não existe nada sem "commitar" utilizando git status :
Caso exista algo, verifique se é necessário e faça o commit , ou remova-o.
```sh
        git status
```

**3.** Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;
```sh
        git branch trybe-skills-changes
        git checkout trybe-skills-changes
```

**4.** No arquivo .txt , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:
```sh
        cat >> trybe-skills.txt
        - Python
        - SoftSkills
```

_Faça um git add nome-do-arquivo.extensao ;_
```sh
        git add trybe-skills.txt
```

_Você pode adicionar todos os arquivos que você modificou usando git add . , mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;_

_Agora um git commit -m "Mensagem que você gostaria" ;_
```sh
        git commit -m "Adiciona nova skill"
```

_Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, git commit -m "Adiciona nova skill" ;_
_Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;_

_E por último um git push -u origin trybe-skills-changes ;_
```sh
        git push -u origin trybe-skills-changes
```

**5.** Abra um Pull Request com uma descrição detalhada:

_Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex: "Trabalho feito para a semana 1 do curso de Software Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..." ;_
_O merge deve ser feito apenas quando chegar no exercício 10._

**6.** Retorne para a branch principal, master , com o comando: git checkout master ;
```sh
        git checkout master
```
**7.** Verifique que você está na branch master , com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);
```sh
        git branch
```

**8.** Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;
```sh
        git branch trybe-skills-updates
        git checkout trybe-skills-updates
```

**9.** No mesmo arquivo .txt que você criou no passo 4 , ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
```sh
        cat >> trybe-skills.txt
        - JavaScript
```

_Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;_
_Faça um git add nome-do-arquivo.extensao ;_
```sh
        git add trybe-skills.txt
```

_Agora um git commit -m "Mensagem que você gostaria" ;_
```sh
        git commit -m "Mais uma skills adicionada"
```

_e por último um git push -u origin trybe-skills-updates ;_
```sh
        git push -u origin trybe-skills-updates
```

_Após o primeiro "push" da sua branch, você pode usar apenas o comando git push ;_
_Abra um Pull Request com uma descrição amigável:_
        _O merge deve ser feito apenas quando chegar no exercício 10;_

**10.** Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master , através do Pull Request :

_Primeiro, vá até a página do primeiro Pull Request (branch trybe-skills-changes ) e faça o merge clicando no botão verde "Merge pull request"_

_Agora, vá até página do outro Pull Request (branch trybe-skills-updates ) e tente fazer o merge clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse Pull Request está tentando alterar a mesma linha de código com um conteúdo diferente, e o Git não consegue determinar sozinho qual das duas linhas é a correta;_

_Você terá que resolver esse conflito antes de "mergear" o Pull Request . Clique no botão "Resolve conflicts" , escolha uma das duas versões do texto (lembre-se de apagar as linhas com <<<<<<< e >>>>>>> , elas são criadas apenas para dar uma identificação mais visual ao problema) . Depois clique em "Mark as resolved" e, em seguida, em "Commit merge" ;_

_Agora você deve conseguir "mergear" seu Pull Request normalmente._