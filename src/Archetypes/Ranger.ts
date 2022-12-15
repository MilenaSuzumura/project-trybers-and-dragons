import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
    this._energy = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}