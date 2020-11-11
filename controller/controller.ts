let rocket: Rocket;
let rocket_list: Rocket[] = [];

function crearRocket1() {

    rocket = new Rocket('32WESSDS', 3, [10, 30, 80], 0);
    let vista = <HTMLElement>document.getElementById("views");
    const paintdiv = document.createElement("div");
    paintdiv.innerHTML = '<div class="card tex-center mb-4"><div class="card-body"><strong>Rocket :</strong></br><strong>ID </strong> : ' + rocket.id + " <strong> Propulsores  </strong> : " + rocket.prop + "<strong>  Potencia  </strong> : " + rocket.potencia + "</div> </div>";

    vista.appendChild(paintdiv);

}
function crearRocket2() {

    rocket = new Rocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10], 0);
    let vista = <HTMLElement>document.getElementById("views");
    const paintdiv = document.createElement("div");
    paintdiv.innerHTML = '<div class="card tex-center mb-4"><div class="card-body"><strong>Rocket :</strong></br><strong>ID </strong> : ' + rocket.id + "<strong> Propulsores   </strong> : " + rocket.prop + "<strong> Potencia   </strong> : " + rocket.potencia + "</div> </div>";

    vista.appendChild(paintdiv);

}

function acelerarRocket1(potencia: number) {
    rocket = new Rocket('32WESSDS', 3, [0, 0, 0], 0);
    let vista = <HTMLElement>document.getElementById("views");
    const paintdiv = document.createElement("div");
    paintdiv.innerHTML = "<div>" + rocket.acelerarRocket(rocket.potencia) + "</div>";
    vista.appendChild(paintdiv);

}

function acelerarRocket2(potencia: number) {

    rocket = new Rocket('LDSFJA32', 6, [0, 0, 0, 0, 0, 0], 0);
    let vista = <HTMLElement>document.getElementById("views");
    const paintdiv = document.createElement("div");
    paintdiv.innerHTML = "<div>" + rocket.acelerarRocket(rocket.potencia) + "</div>";

    vista.appendChild(paintdiv);

}