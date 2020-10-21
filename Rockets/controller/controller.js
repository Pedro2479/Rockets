"use strict";
var rocket;
function crearRocket1() {
    var vista = document.getElementById("views");
    var paintdiv = document.createElement("div");
    rocket.setId('32WESSDS');
    rocket.setPropulsores(3);
    paintdiv.innerHTML = '<div class="card tex-center mb-4 "><div class="card-body"><strong>Rocket :</strong></br><strong>ID </strong> : ' + rocket.getId() + "<strong> Propulsores :  </strong> " + rocket.getPropu() + "</div> </div>";
    vista.appendChild(paintdiv);
}
