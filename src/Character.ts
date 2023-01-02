import Fighter from './Fighter';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getInt from './getInt';
import Race, { Elf } from './Races/index';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getInt(1, 10);
    this._defense = getInt(1, 10);
    this._strength = getInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
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

  get race(): Race {
    return this._race;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get energy(): Energy {
    return { ...this._energy };
  }
 
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    } 

    if (damage < 1) {
      this._lifePoints -= 1;
    }

    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this._strength);
  }
  
  levelUp() {
    this._maxLifePoints += getInt(1, 10);
    this._strength += getInt(1, 10);
    this._dexterity += getInt(1, 10);
    this._defense += getInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(): void {
    this._strength += getInt(1, 10);
  }
}