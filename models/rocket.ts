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

    for (let i = 0; i <potencia.length; i++) {

      this.acelerar += potencia[i]+10;

  
 
}
return this.acelerar;
 
}}