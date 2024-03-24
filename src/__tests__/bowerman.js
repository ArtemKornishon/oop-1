import Bowerman from '../bowerman';

const checkClass = new Bowerman('John', 'bowerman');
const correctArg = {
  name: 'John',
  type: 'bowerman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('Creating new Character', () => {
  expect(checkClass).toEqual(correctArg);
});