// Para Fixar I
/*******1*******/
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList); 


// Para Fixar II
/*******1*******/
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  const div3and5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return div3and5;
}

console.log(findDivisibleBy3And5());

/*******2*******/
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const nameWithFiveLetters = names.find((name) => name.length === 5);
  return nameWithFiveLetters;
}

console.log(findNameWithFiveLetters());

/*******3*******/
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const musicId = musicas.find((musica) => musica.id === id);
  return musicId;
}

console.log(findMusic('31031685'))


// Para Fixar III
/*******1*******/
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const verifyName = names.some((name) => name === 'Ana');
  return verifyName;
}

console.log(hasName(names, 'Ana'))

/*******2*******/
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const verifyAge = arr.every((person) => person.age >= minimumAge);
  return verifyAge;
}

console.log(verifyAges(people, 18));


// Para Fixar IV
/*******1*******/
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age);

console.log(people);

/*******2*******/
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => b.age - a.age);

console.log(people);