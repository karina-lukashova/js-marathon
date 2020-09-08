import { pokemons } from "./pokemons.js";

function generatePlayers () {
  const players = [
    pokemons.find(item => item.name === 'Pikachu'),
    pokemons.find(item => item.name === 'Charmander'),
    pokemons.find(item => item.name === 'Bulbasaur'),
    pokemons.find(item => item.name === 'Squirtle'),
    pokemons.find(item => item.name === 'Pidgey'),
    pokemons.find(item => item.name === 'Mew'),
    pokemons.find(item => item.name === 'Snorlax'),
    pokemons.find(item => item.name === 'Psyduck'),
    pokemons.find(item => item.name === 'Jigglypuff'),
    pokemons.find(item => item.name === 'Eevee'),
    pokemons.find(item => item.name === 'Meowth')
  ];
  const player = players[Math.ceil(Math.random() * (players.length - 1))];
  return player;
}

export default generatePlayers;