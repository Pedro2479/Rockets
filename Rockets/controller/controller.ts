let rocket: Rocket;


function crearRocket1() {


    rocket.setId="32WESSDS";
    rocket.setPropulsores=3;
    let vista = <HTMLElement>document.getElementById("views");
    const paintdiv = document.createElement("div");
    paintdiv.innerHTML = '<div class="card tex-center mb-4 "><div class="card-body"><strong>Rocket :</strong></br><strong>ID </strong> : ' +rocket.id_ + "<strong> Propulsores :  </strong> " + rocket.prop_ + "</div> </div>";

    vista.appendChild(paintdiv);

}
