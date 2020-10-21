
let rocket: Rocket;

function crearRocket1() {

    let vista = <HTMLElement>document.getElementById("views");
    const paintdiv = document.createElement("div");
    rocket.setId('32WESSDS');
    rocket.setPropulsores(3);
    paintdiv.innerHTML = '<div class="card tex-center mb-4 "><div class="card-body"><strong>Rocket :</strong></br><strong>ID </strong> : ' + rocket.getId() + "<strong> Propulsores :  </strong> " + rocket.getPropu() + "</div> </div>";

    vista.appendChild(paintdiv);

}
