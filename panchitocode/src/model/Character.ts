export class Character {
  private name: string;
  private health: number;
  private attackPower: number;
  private defense: number;

  constructor(name: string, health: number, attackPower: number, defense: number) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.defense = defense;
  }

  // Ataca un altre personatge
  attack(target: Character): void {
    const damage = Math.max(1, this.attackPower - target.defense);
    console.log(`⚔️  ${this.name} ataca ${target.getName()} i causa ${damage} de dany!`);
    target.takeDamage(damage);
  }

  // Rep dany i redueix la vida
  takeDamage(amount: number): void {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
  }

  // Comprova si el personatge segueix viu
  isAlive(): boolean {
    return this.health > 0;
  }

  // Mostra l'estat actual del personatge
  showStatus(): void {
    const bar = this.getHealthBar();
    console.log(`  ${this.name} — HP: ${bar} (${this.health}) | ATK: ${this.attackPower} | DEF: ${this.defense}`);
  }

  getName(): string {
    return this.name;
  }

  getHealth(): number {
    return this.health;
  }

  getAttackPower(): number {
    return this.attackPower;
  }

  getDefense(): number {
    return this.defense;
  }

  // Barra de vida visual (10 blocs)
  private getHealthBar(): string {
    const max = 10;
    const filled = Math.round((this.health / 100) * max);
    return "█".repeat(filled) + "░".repeat(max - filled);
  }
}
