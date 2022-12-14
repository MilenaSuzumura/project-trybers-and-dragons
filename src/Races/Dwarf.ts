import Race from './Race';

export default class Dwarf extends Race {
  private maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
  }
}