import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instancesCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instancesCount += 1;
  }

  static override createdRacesInstances(): number {
    return Dwarf._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;