import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _intancesCount = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._intancesCount += 1;
  }

  static override createdArchetypeInstances(): number {
    return Warrior._intancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;