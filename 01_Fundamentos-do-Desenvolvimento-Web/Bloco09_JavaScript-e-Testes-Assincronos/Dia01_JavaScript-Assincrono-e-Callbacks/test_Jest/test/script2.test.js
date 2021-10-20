/* // Maneira errada de gerar um TEST em cima de uma função assíncrona
test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
});
*/

// Maneira certa de gerar um TEST em cima de uma função assíncrona
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
});