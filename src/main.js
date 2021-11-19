const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = new FormData(form);
  let transactionObj = convertFormDataToObject(formData)
  saveTransactionObj(transactionObj)
  insertRow(transactionObj);
});

function convertFormDataToObject(formData) {
 let tipo = formData.get("tipo")
 let descripcion = formData.get("descripcion")
 let monto = formData.get("monto")
 let categoria = formData.get("categoria")
 return {
  'tipo' : tipo,
  'descripcion' : descripcion,
  'monto' : monto,
  'categoria' : categoria
 }
}

function insertRow(transactionObj) {
  let tablaTransaccionesRef = document.getElementById("tabla_transacciones");
  let newRow = tablaTransaccionesRef.insertRow(-1);
  let newCell = newRow.insertCell(0);

  newCell.textContent = transactionObj["tipo"]

  newCell = newRow.insertCell(1);
  newCell.textContent = transactionObj["descripcion"]

  newCell = newRow.insertCell(2);
  newCell.textContent = transactionObj["monto"]

  newCell = newRow.insertCell(3);
  newCell.textContent = transactionObj["categoria"]

  alert("Datos agregados");
}

function saveTransactionObj(transactionObj) {
  let myTransactionArray = JSON.parse(localStorage.getItem('transactionData')) || [];
  myTransactionArray.push(transactionObj)
  let transactionObjJSON = JSON.stringify(transactionObj)
  localStorage.setItem("transactionData", transactionObjJSON)
}

console.log("funciona la logica");
resetForm();

function resetForm() {
  form.reset();
}
