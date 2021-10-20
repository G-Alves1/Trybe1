**Parte I - Comandos de Input e Output**

**1.** Navegue até a pasta unix_tests;
```sh
		cd unix_tests
```

**2.** Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.
```sh
		cat > skills2.txt
		Internet
		Unix
		Bash
```

**3.** Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.🤓
```sh
		cat >> skills2.txt
		PHP
		Python
		HTML
		CSS
		JavaScript

		sort skills2.txt
```

**4.** Conte quantas linhas tem o arquivo skills2.txt.
```sh
		wc -l skills2.txt
```

**5.** Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.
```sh
		sort skills2.txt | head -3 | cat > top_skills.txt
```

**6.** Crie um novo arquivo chamado phrases2.txt pelo o terminal e adicione algumas frases de suas escolha.
```sh
		cat > phrases2.txt
		Os primeiros 90% do código representam os primeiros 10% do tempo de desenvolvimento. Os 10% restantes do código é para mostrar aos outros os 90% do tempo de desenvolvimento.
```

**7.** Conte o número de linhas que contêm as letras br.
```sh
		wc -l phrases2.txt | grep -ic 'br' phrases2.txt
```

**8.** Conte o número de linhas que não contêm as letras br.
```sh
		wc -l phrases2.txt | grep -ivc 'br' phrases2.txt
```

**9.** Adicione dois nomes de países ao final do arquivo phrases2.txt.
```sh
		cat >> phrases2.txt | tail
		EUA
		Holanda
```

**10.** Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
```sh
		cat phrases2.txt >> bunch_of_things.txt
		cat countries.txt >> bunch_of_things.txt
```

**11.** Ordene o arquivo bunch_of_things.txt.
```sh
		sort -o bunch_of_things.txt bunch_of_things.txt
```

**Parte II - Permissões**

**1.** Navegue até a pasta unix_tests;
```sh
		cd unix_tests
```

**2.** Rode o comando ls -l e veja quais as permissões dos arquivos;
```sh
		ls -l
```

**3.** Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;
```sh
		chmod a+rw bunch_of_things.txt
```
_Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt_

**4.** Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;
```sh
		chmod a-w bunch_of_things.txt
```
Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

**5.** Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.
```sh
		chmod 644 bunch_of_things.txt
```
_Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt_

**Parte III - Processos & Jobs**

**1.** Liste todos os processos;
```sh
		ps
```

**2.** Agora use o comandondo sleep 30 &;
```sh
		sleep 30 &
```

**3.** Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);
```sh
		ps
		kill 7277
```

**4.** Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;
```sh
		sleep 30
		bg
```

5**.** Crie um processo em background que rode o comando sleep por 300 segundos.
```sh
		sleep 300 &
```

**6.** Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.
```sh
		sleep 200

		sleep 100
```

**7.** Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.
Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal).
```sh
		jobs
		fg %1
```

**8.** Retome a execução do processo sleep 100 em background com o comando bg.
```sh
		bg %3
```

**9.** Termine a execução de todos os processos sleep (mate os processos).
```sh
		kill -9 %1 %2 %3
```

**(Bônus) - Parte IV - O despertar do terminal**

**1.** Abra o terminal e execute o comando sudo apt-get install cmatrix e, depois, execute o comando cmatrix. Quando estiver se sentindo como o Neo, aperte ctrl+c para voltar ao terminal;
```sh
		sudo apt-get install cmatrix
		cmatrix
```

**2.** Execute o comando sudo apt-get install fortune, após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune, e o operador >;
```sh
		sudo apt-get install fortune
		fortune > fortune.txt
```

**3.** Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc;
```sh
		wc -w fortune.txt
```

**4.** Execute o comando sudo apt-get install sl, após a instalação, execute o comando sl. Agora tente sl -F;
```sh
		sudo apt-get install sl
		sl
		sl -F
```

**5.** Execute o comando sudo apt-get install cowsay, após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt;
```sh
		sudo apt-get install cowsay
		cowsay
		cat fortune.txt | cowsay
```

**6.** Descubra os fatores primos usando o comando factor e em seguida o número 42;
```sh
		factor 42
```

**7.** Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev.
```sh
		cat fortune.txt | rev
```

**8.** Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos.
```sh
		telnet towel.blinkenlights.nl
```