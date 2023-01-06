import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private character1: Fighter;
  private character2: Fighter;

  constructor(character1: Fighter, character2: Fighter) {
    super(character1);
    this.character1 = character1;
    this.character2 = character2;
  }

  fight() {
    if (this.character1.lifePoints > 0 && this.character2.lifePoints > 0) {
      this.character1.attack(this.character2);
      this.character2.attack(this.character1);
    }

    return super.fight();
  }
}