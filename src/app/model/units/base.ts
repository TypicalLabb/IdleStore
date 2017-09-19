import { GameModel } from '../gameModel';
import { Action } from './action';

export enum Type {
  Material,
  Generator,
  Ant,
  Bee,
  Food,
  Crystal,
  Soil,
  Fungus,
  Wood,
  Sand,
  Machinery,
  Engineer,
  Other,
  Scientist,
  Laser,
  Farmer,
  Mining,
  SoilG,
  WoodG
}

export class Base {

  endIn = 0
  buyAction: Action

  constructor(
    public game: GameModel,
    public id: string,
    public name = "",
    public description = "",
    public types: Type[] = [],
    public unlocked = false,
    public quantity = Decimal(0),
    public avabileBaseWorld = true,
    public avabileThisWorld = true
  ) {
    this.game.allBase.push(this)
  }

  //     Save and Load
  getData() {
    const data: any = {}
    data.q = this.quantity
    data.u = this.unlocked
    data.id = this.id
    data.atw = this.avabileThisWorld
    return data;
  }
  restore(data: any) {
    this.quantity = new Decimal(data.q)
    this.unlocked = data.u
    this.avabileThisWorld = data.atw
  }

  initialize() {
    this.unlocked = false
    this.quantity = Decimal(0)
    this.avabileThisWorld = this.avabileBaseWorld
  }
  isEnding(): boolean {
    return this.endIn < Number.POSITIVE_INFINITY
  }
  isStopped() { return false }
  haveUp() { return false }
}
