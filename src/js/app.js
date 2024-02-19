import Team from "./class/team.js";

import Character from "./class/character.js"


const firstPlayer = new Character("Гэндальф", "Magician");
const secondPlayer = new Character("Гэндальф Белый", "Magician");
const thirdPlayer = new Character("Гэндальф Серый", "Magician");

const netologyTeam = new Team;

netologyTeam.add(firstPlayer)
/*netologyTeam.add(firstPlayer)*/

netologyTeam.addAll(secondPlayer, thirdPlayer)

/*console.log(netologyTeam);*/

console.log(typeof(netologyTeam.toArray()))
