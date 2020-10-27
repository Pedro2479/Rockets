class Rocket {

  id_: string;
  prop_: number;

 constructor(id: string, propulsores: number) {

    this.id_ = id;

    this.prop_ = propulsores;


  }
 public get  getId(): string {
    return this.id_;
  }
 public get getPropu(): number {
    return this.prop_;
  }

 public set  setId(id: string) {
    this.id_ = id;

  }
 public set setPropulsores(propulsores: number) {
    this.prop_ = propulsores;
  }

}