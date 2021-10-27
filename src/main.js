const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(form);
    let tablaTransaccionesRef = document.getElementById("tabla_transacciones");
    let newRow = tablaTransaccionesRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    newCell.textContent = formData.get("tipo");

    newCell = newRow.insertCell(1);
    newCell.textContent = formData.get("descripcion");
    
    newCell = newRow.insertCell(2);
    newCell.textContent = formData.get("monto");
    
    newCell = newRow.insertCell(3);
    newCell.textContent = formData.get("categoria");
    alert("Datos agregados");
    console.log("funciona la logica");
    resetForm();
})

function resetForm () {
    form.reset();
}