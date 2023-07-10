import Character from '../character/magician';

test('create Character ok', () => {
  const character = new Character('Magician1', 'Magician');
  const result = {
    name: 'Magician1',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
