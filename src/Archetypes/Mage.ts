import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _intancesCount = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._intancesCount += 1;
  }

  static override createdArchetypeInstances(): number {
    return Mage._intancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;