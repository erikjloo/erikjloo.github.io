var colorPickers = [];
var colors = ["#ff0000", "#eb8f34", "#ebe834", "#89eb34", "#346eeb", "#c034eb"];
var pickerCount = 4;
var minPickerCount = 2;
var maxPickerCount = 5;

window.onload = () => { createColorPickers(pickerCount) }

var setPickerCount = () => {
  pickerCount = Number(document.getElementById("pickerCount").value);
  pickerCount = min(max(pickerCount, minPickerCount), maxPickerCount);
}

var increment = () => {
  if (pickerCount == maxPickerCount) return;
  document.getElementById("pickerCount").value = String(++pickerCount);
  createColorPicker(pickerCount)
}
var decrement = () => { 
  if (pickerCount == minPickerCount) return;
  deleteColorPicker(pickerCount)
  document.getElementById("pickerCount").value = String(--pickerCount);
}

function createColorPickers(count) {
  for (let i = 0; i < count; i++)
    createColorPicker(i, colors[i]);
}

function deleteColorPicker(id) {
  document.getElementById("color" + id).remove()
}

function createColorPicker(id, color) {
  var input = document.createElement("input");
  input.id = "color" + id;
  input.type = "color";
  input.value = color;
  input.classList.add("colorpicker")
  input.onchange = pickColor;
  document.getElementById("colorpickers").appendChild(input);
}


function pickColor() {

}


// let val = document.getElementById("color1").value; 
// console.log(val)