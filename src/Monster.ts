/* import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints): {

  }
Este valor deve ser decrescido de seus pontos de vida (lifePoints), assim causando um dano (damage);
Se o dano for maior que 0, você perde pontos de vida (lifePoints);
Ao receber o ataque e perder pontos de vida, sua vida nunca poderá chegar a 0, se isto acontecer seus lifePoints deve valer -1;
Ao final o método deve retornar o valor atualizado dos pontos de vida.
attack 🪄 este método recebe por parâmetro uma pessoa inimiga (enemy) e as regras são:
Toda vez que acontecer um ataque, o inimigo recebido por parâmetro recebe um dano;
Este dano deve ser calculado a partir de attackPoints equivalentes à força (strength) de quem ataca.
} */