import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._createdArchetypeInstances += 1;
    this._energy = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
  
  get energyType(): EnergyType {
    return this._energy;
  }
}