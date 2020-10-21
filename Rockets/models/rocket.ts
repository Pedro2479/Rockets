
class Rocket {

   id_: string;
   prop_: number;

  constructor(id: string, propulsores: number) {

    this.id_ = id;

    this.prop_ = propulsores;


  }
  public getId(): string {
    return this.id_;
  }
  public getPropu(): number {
    return this.prop_;
  }

  setId(id: string) {
    this.id_ = id;

  }
  setPropulsores(propulsores: number) {
    this.prop_ = propulsores;
  }

}