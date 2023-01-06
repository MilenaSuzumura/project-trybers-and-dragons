import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: Array<Fighter | SimpleFighter>;

  constructor(character: Fighter, monsters: Array<Fighter | SimpleFighter>) {
    super(character);
    this._character = character;
    this._monsters = monsters;
  }
}