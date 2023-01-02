import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
    this._energy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}