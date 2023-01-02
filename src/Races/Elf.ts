import Race from './Race';

export default class Elf extends Race implements Race {
  private _maxLifePoints: number;
  private static _createdRaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.addRace();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addRace() {
    this._createdRaces += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdRaces;
  }
}