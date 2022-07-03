var selectedRow = null

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null)
      insertNewRecord(formData);
    else
      updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["fullNameStudent"] = document.getElementById("fullNameStudent").value;
  formData["nameMatter"] = document.getElementById("nameMatter").value;
  formData["valor"] = document.getElementById("valor").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("subjectList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullNameStudent;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.nameMatter;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.valor;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = `<a onClick="onEdit(this)" class="btn btn-primary btn-sm">Editar</a>
            <a onClick="onDelete(this)" class="btn btn-danger btn-sm">Eliminar</a>`;
}

function resetForm() {
  document.getElementById("fullNameStudent").value = "";
  document.getElementById("nameMatter").value = "";
  document.getElementById("valor").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullNameStudent").value = selectedRow.cells[0].innerHTML;
  document.getElementById("nameMatter").value = selectedRow.cells[1].innerHTML;
  document.getElementById("valor").value = selectedRow.cells[2].innerHTML;
}

document.getElementById("valor").onblur =function (){  
  //Formato de número para el valor
  this.value = parseFloat(this.value.replace(/,/g, ""))
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullNameStudent;
  selectedRow.cells[1].innerHTML = formData.nameMatter;
  selectedRow.cells[2].innerHTML = formData.valor;
}

function onDelete(td) {
  if (confirm('¿Está seguro de eliminar este registro?')) {
    row = td.parentElement.parentElement;
    document.getElementById("subjectList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function validate() {
  isValid = true;
  if (document.getElementById("fullNameStudent").value == "") {
    isValid = false;
    document.getElementById("fullNameStudentValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("fullNameStudentValidationError").classList.contains("hide"))
      document.getElementById("fullNameStudentValidationError").classList.add("hide");
  }
  return isValid;
}
