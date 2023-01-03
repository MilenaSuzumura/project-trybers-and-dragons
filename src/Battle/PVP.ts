import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private character1: Fighter;
  private character2: Fighter;

  constructor(character1: Fighter, character2: Fighter) {
    super.fight(character1);
    this.character1 = character1;
    this.character2 = character2;
  }

  fight() {
    
  }
}