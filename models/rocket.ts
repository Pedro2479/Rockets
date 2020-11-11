class Rocket {

  id: string;
  prop: number;
  potencia: number[];
  acelerar: number;
  constructor(id: string, propulsores: number, potencia: number[], acelerar: number) {

    this.id = id;

    this.prop = propulsores;
    this.potencia = potencia;
    this.acelerar = acelerar;

  }


  acelerarRocket(potencia: number[]) {
  let valActual=0;
    for (let i = 0; i <=potencia.length; i++) {

      this.acelerar += potencia[i];

  valActual=this.acelerar+10;
  valActual++
  return valActual;
}
 
 
}}