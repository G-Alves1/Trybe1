/*******1*******/
const n = 5;
let linha = "";
let asterisco = "*";

for (let cont = 1; cont <= n; cont += 1) {
  linha = linha + asterisco;
}

for (let cont = 1; cont <= n; cont += 1) {
  console.log(linha);
}

/*******2*******/
const n = 5;
let linha = "";
let asterisco = "*";

for (let cont = 1; cont <= n; cont += 1) {
  linha = linha + asterisco;
  console.log(linha);
}

/*******3*******/
const n = 5;
let linha = "";
let asterisco = "*";
let espaco = " ";
let posicao = n;

for (let cont = 1; cont <= n; cont += 1) {
  for (c = 1; c <= n; c += 1) {
    if (c < posicao) {
      linha = linha + espaco;
    } else {
      linha = linha + asterisco;
    }
  }
  console.log(linha);
  linha = "";
  posicao -= 1;
}

/*******4*******/
const n = 5;
let linha = "";
let asterisco = "*";
let espaco = " ";
let posicao = n;
let meio = (n + 1) / 2;
let esquerdo = meio;
let direito = meio;

for (let cont = 1; cont <= meio; cont += 1) {
  for (c = 1; c <= n; c += 1) {
    if (c >= esquerdo && c <= direito) {
      linha = linha + asterisco;
    } else {
      linha = linha + espaco;
    }
  }
  console.log(linha);
  linha = "";
  esquerdo -= 1;
  direito += 1;
}

/*******5*******/
const n = 7;
let asterisco = "*";
let espaco = " ";
let meio = (n + 1) / 2;
let esquerdo = meio;
let direito = meio;

for (let cont = 1; cont <= meio; cont += 1) {
  let linha = "";
  for (let c = 1; c <= n; c += 1) {
    if (c == esquerdo || c == direito || cont == meio) {
      linha += asterisco;
    } else {
      linha += espaco;
    }
  }
  esquerdo -= 1;
  direito += 1;
  console.log(linha);
}

/*******6*******/
let number = 10;
let result = 0;

for (let cont = 1; cont <= number; cont += 1) {
  if (number % cont === 0) {
    result += 1;
  }
}
if (number / 1 == number) {
  result += 1;
}

if (result === 2) {
  console.log('Número primo');
} else {
  console.log('Número não é primo');
}
