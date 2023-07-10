import Character from '../character/bowman';

test('create Character ok', () => {
  const character = new Character('Bowman1', 'Bowman');
  const result = {
    name: 'Bowman1',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
