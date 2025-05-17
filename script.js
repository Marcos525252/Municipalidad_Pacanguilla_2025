function toggleVacantes() {
    var vacantesInfo = document.getElementById("vacantesInfo");
    var vacantesBtn = document.getElementById("vacantesBtn");

    // Cambiar el estado del botón y mostrar/ocultar la sección de vacantes
    if (vacantesInfo.style.display === "none") {
        vacantesInfo.style.display = "block";
        vacantesBtn.innerHTML = "Desactivar Vacantes";
    } else {
        vacantesInfo.style.display = "none";
        vacantesBtn.innerHTML = "Activar Vacantes";
    }
}
