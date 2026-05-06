import { Character } from "./Character.js";
import { Player } from "./Player.js";
import { Game } from "./Game.js";

// === CONFIGURACIÓ DELS JUGADORS ===

const player1 = new Player("Jugador 1");
player1.getTeam().addCharacter(new Character("Guerrer",   100, 10, 3));
player1.getTeam().addCharacter(new Character("Arquera",    80,  8, 2));
player1.getTeam().addCharacter(new Character("Mag",        60, 12, 1));

const player2 = new Player("Jugador 2");
player2.getTeam().addCharacter(new Character("Ork",       110,  9, 4));
player2.getTeam().addCharacter(new Character("Troll",      90,  7, 5));
player2.getTeam().addCharacter(new Character("Goblin",     70, 11, 2));

// === INICI DEL JOC ===

const game = new Game(player1, player2);
game.start();
