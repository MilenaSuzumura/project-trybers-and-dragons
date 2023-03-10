import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._lifePoints;

    if (damage > 0) {
      this._lifePoints -= attackPoints;
    }

    if (this._lifePoints < 1) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }
}