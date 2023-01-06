import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: Array<Monster | SimpleFighter>;

  constructor(character: Fighter, monsters: Array<Monster | SimpleFighter>) {
    super(character);
    this._character = character;
    this._monsters = monsters;
  }

  lifePointsMonster() {
    return this._monsters.some((monster) => monster.lifePoints > 0);
  }

  fight() {
    if (this._character.lifePoints > 0 
      && this._monsters.length > 0 && this.lifePointsMonster()) {
      this._monsters.forEach((monster) => {
        this._character.attack(monster);
        monster.attack(this._character);
      });
    }
    return super.fight();
  }
}
