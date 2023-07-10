import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _intancesCount = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._intancesCount += 1;
  }

  static override createdArchetypeInstances(): number {
    return Ranger._intancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;