const path = require('path')
const archivo_path = path.join(`file://${__dirname}/../js/ajax_info.txt`)
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", archivo_path, true);
  xhttp.send();
}