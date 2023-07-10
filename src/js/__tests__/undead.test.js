import Character from '../character/undead';

test('create Character ok', () => {
  const character = new Character('Undead1', 'Undead');
  const result = {
    name: 'Undead1',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
