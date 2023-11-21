var colorPickers = [];
var colors = ["#ff0000", "#eb8f34", "#ebe834", "#89eb34", "#346eeb", "#c034eb"];
var pickerCount = 3;

window.onload = () => { createColorPickers(pickerCount) }

function createColorPickers(count) {
  for (let i = 0; i < count; i++)
    createColorPicker(i, colors[i]);
}

function createColorPicker(id, color) {
  var input = document.createElement("input");
  input.id = "color" + id;
  input.type = "color";
  input.value = color;
  input.classList.add("colorpicker")
  input.onchange = pickColor;
  console.log(document.getElementById("colorpickers"));
  document.getElementById("colorpickers").appendChild(input);
}

function pickColor() {

}


// let val = document.getElementById("color1").value; 
// console.log(val)