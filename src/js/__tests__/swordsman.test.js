import Character from '../character/swordsman';

test('create Character ok', () => {
  const character = new Character('Swordsman1', 'Swordsman');
  const result = {
    name: 'Swordsman1',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
