import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _intancesCount = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._intancesCount += 1;
  }

  static override createdArchetypeInstances(): number {
    return Necromancer._intancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;