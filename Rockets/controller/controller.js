"use strict";
var rocket;
function crearRocket1() {
    rocket.setId = "32WESSDS";
    rocket.setPropulsores = 3;
    var vista = document.getElementById("views");
    var paintdiv = document.createElement("div");
    paintdiv.innerHTML = '<div class="card tex-center mb-4 "><div class="card-body"><strong>Rocket :</strong></br><strong>ID </strong> : ' + rocket.id_ + "<strong> Propulsores :  </strong> " + rocket.prop_ + "</div> </div>";
    vista.appendChild(paintdiv);
}
