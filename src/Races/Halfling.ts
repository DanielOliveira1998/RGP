import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instancesCount = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instancesCount += 1;
  }

  static override createdRacesInstances(): number {
    return Halfling._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;