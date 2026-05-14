import { Team } from "./Team.js";

export class Player {
  private name: string;
  private team: Team;

  constructor(name: string) {
    this.name = name;
    this.team = new Team();
  }

  getTeam(): Team {
    return this.team;
  }

  getName(): string {
    return this.name;
  }
}
