import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _instancesCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instancesCount += 1;
  }

  static override createdRacesInstances(): number {
    return Elf._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;