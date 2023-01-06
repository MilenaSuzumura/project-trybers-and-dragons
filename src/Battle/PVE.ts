import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: Array<SimpleFighter>;

  constructor(character: Fighter, monsters: Array<SimpleFighter>) {
    super(character);
    this._character = character;
    this._monsters = monsters;
  }

  fight() {
    this._monsters.forEach((monster) => {
      if (this._character.lifePoints > 0 && monster.lifePoints > 0) {
        this._character.attack(monster);
        monster.attack(this._character);
      }
    });
    return super.fight();
  }
}