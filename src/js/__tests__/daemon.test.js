import Character from '../character/daemon';

test('create Character ok', () => {
  const character = new Character('Daemon1', 'Daemon');
  const result = {
    name: 'Daemon1',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
