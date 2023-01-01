import Fighter from './Fighter';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getInt from './getInt';
import Race, { Elf } from './Races';

export default class Character {
  private _dexterity: number;
  private _strength: number;
  private _defense: number;
  private _race = Race;
  private _archetype = Archetype;
  private _energy = Energy;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _name: string; 

  constructor(name: string) {
    this._dexterity = getInt(1, 10);
    this._defense = getInt(1, 10);
    this._strength = getInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._name = name;
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getInt(1, 10),
    };
  }

  get dexterity(): number {
    return this._dexterity;
  }
  
  get defense(): number {
    return this._defense;
  }

  get strength(): number {
    return this._strength;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get energy(): Energy {
    return this._energy;
  }
}