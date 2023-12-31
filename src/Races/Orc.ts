import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _instancesCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instancesCount += 1;
  }

  static override createdRacesInstances(): number {
    return Orc._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;