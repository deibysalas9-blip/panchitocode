import { Player } from "./Player.js";
import { Character } from "./Character.js";

export class Game {
  private player1: Player;
  private player2: Player;
  private turn: number = 1;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  start(): void {
    console.log("\n🏟️  ====== JOC DE BATALLA ======");
    console.log(`⚔️   ${this.player1.getName()} vs ${this.player2.getName()}`);
    console.log("================================\n");

    while (
      this.player1.getTeam().hasAliveCharacters() &&
      this.player2.getTeam().hasAliveCharacters()
    ) {
      this.playTurn();
    }

    this.announceWinner();
  }

  private playTurn(): void {
    const attacker1 = this.player1.getTeam().getActiveCharacter();
    const attacker2 = this.player2.getTeam().getActiveCharacter();

    if (!attacker1 || !attacker2) return;

    console.log(`\n--- TORN ${this.turn} ---`);
    console.log(`👤 ${this.player1.getName()}: ${attacker1.getName()}`);
    console.log(`👤 ${this.player2.getName()}: ${attacker2.getName()}\n`);

    // El jugador 1 ataca el jugador 2
    attacker1.attack(attacker2);
    if (!attacker2.isAlive()) {
      console.log(`💀 ${attacker2.getName()} ha estat derrotat!`);
    }

    // El jugador 2 contraataca si segueix viu
    if (attacker2.isAlive()) {
      attacker2.attack(attacker1);
      if (!attacker1.isAlive()) {
        console.log(`💀 ${attacker1.getName()} ha estat derrotat!`);
      }
    }

    console.log("\n📊 Estat dels equips:");
    console.log(`  [${this.player1.getName()}]`);
    this.player1.getTeam().showStatus();
    console.log(`  [${this.player2.getName()}]`);
    this.player2.getTeam().showStatus();

    this.turn++;
  }

  private announceWinner(): void {
    console.log("\n🏆 ====== FI DE LA BATALLA ======");
    if (this.player1.getTeam().hasAliveCharacters()) {
      console.log(`🥇 GUANYADOR: ${this.player1.getName()}!`);
    } else {
      console.log(`🥇 GUANYADOR: ${this.player2.getName()}!`);
    }
    console.log("================================\n");
  }
}
