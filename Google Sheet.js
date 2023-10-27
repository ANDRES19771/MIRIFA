const scriptURL = 'https://script.google.com/macros/s/AKfycbzHGpwOHphHCYDSmAJQBY1FF6qLempJdYxjPs2ZcNMaPgODv8BImlSr1Wyt2BNEgvk/exec'

const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("REGISTRO ENVIADO CON EXITO." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
 
})

var fecha = new Date();
  var dia = fecha.getDate();
  var mes = fecha.getMonth() + 1;
  var ano = fecha.getFullYear();
  var fechacompleta = "FECHA DE PEDIDO   " +dia+"/"+mes+"/"+ano;
  var objetivo = document.getElementById('texto_nav1');
  objetivo.innerHTML = fechacompleta;
 