import Bowerman from '../bowerman';

const checkClass = new Bowerman('John', 'bowman');
const correctArg = {
  name: 'John',
  type: 'bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctArg);
});