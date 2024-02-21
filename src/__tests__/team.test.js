import Team from "../js/class/team";
import Character from "../js/class/character";

test('add in team', () => {

  const firstPlayer = new Character("Гэндальф", "Magician");

  const netologyTeam = new Team;

  netologyTeam.add(firstPlayer)

  expect(() => {
    netologyTeam.add(firstPlayer);
  }).toThrow('Такой игрок уже есть в комаде!');
});


test('add multiple players to a team', () => {
  const firstPlayer = new Character("Гэндальф", "Magician");
  const secondPlayer = new Character("Гэндальф Белый", "Magician");

  const netologyTeam = new Team;

  netologyTeam.addAll(firstPlayer, secondPlayer, secondPlayer)

  expect(netologyTeam.members).toBeInstanceOf(Set);
});

test('team returns a list', () => {
  const firstPlayer = new Character("Гэндальф", "Magician");
  const secondPlayer = new Character("Гэндальф Белый", "Magician");

  const netologyTeam = new Team;

  netologyTeam.addAll(firstPlayer, secondPlayer, secondPlayer)

  expect(netologyTeam.toArray()).toBeInstanceOf(Array);
});

