import { Character } from "./Character.js";

export class Team {
  private characters: Character[] = [];

  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  getCharacters(): Character[] {
    return this.characters;
  }

  // Retorna el primer personatge viu de l'equip
  getActiveCharacter(): Character | null {
    return this.characters.find((c) => c.isAlive()) ?? null;
  }

  // Comprova si l'equip té algun personatge viu
  hasAliveCharacters(): boolean {
    return this.characters.some((c) => c.isAlive());
  }

  showStatus(): void {
    this.characters.forEach((c) => c.showStatus());
  }
}
