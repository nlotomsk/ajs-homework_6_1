import Character from '../app';

test('create Character name < 2', () => {
  expect(() => new Character('D', 'Daemon')).toThrowError(new Error('min - 2 символа, max - 10'));
});

test('create Character name > 10', () => {
  expect(() => new Character('Demon17121985', 'Daemon')).toThrowError(new Error('min - 2 символа, max - 10'));
});

test('create Character type Error', () => {
  expect(() => new Character('Demon1712', 'Daemon123')).toThrowError(new Error('тип не существует'));
});

test('create Character name ok', () => {
  const character = new Character('Demon1712', 'Daemon');
  expect(character.name).toBe('Demon1712');
});

test('create Character type ok', () => {
  const character = new Character('Demon1712', 'Daemon');
  expect(character.type).toBe('Daemon');
});

test('create Character ok', () => {
  const character = new Character('Demon1712', 'Daemon');
  const result = {
    name: 'Demon1712',
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});
