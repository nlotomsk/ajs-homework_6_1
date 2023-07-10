import Character from '../character/zombie';

test('create Character ok', () => {
  const character = new Character('Zombie1', 'Zombie');
  const result = {
    name: 'Zombie1',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
