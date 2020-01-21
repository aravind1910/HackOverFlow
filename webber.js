function namify() {
  setTimeout(function(){ 

  document.getElementById("u1").innerHTML="Rama Raju Sattenapalli";
  document.getElementById("a1").innerHTML="#30-12-43/A, Sirukolu gramam, Sileru , AndhraPradesh";
  document.getElementById("u2").innerHTML="Produce: Rice (Bangaru Teegalu)";
  document.getElementById("a2").innerHTML="Quantity: 200kg";
  document.getElementById('track').style.display = "block";
  document.getElementById('u1a1').style.display="block";
}, 3000);
}
var modal = document.getElementById('id01');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}