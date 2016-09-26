numeros = [];
function minumero ()
{
  var a = parseInt(document.getElementById("numero").value);
  numeros.push(a);
  //console.log(numeros);
  imprimirnumeros(numeros);
}
function imprimirnumeros(numeros)
{
  for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
}
