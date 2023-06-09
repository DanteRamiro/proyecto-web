document.addEventListener('DOMContentLoaded', function() {
  
  var form = document.querySelector('.form__content');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var sueldo = document.getElementById('sueldo').value;
    var mensaje = document.getElementById('mensaje').value;

    form.reset();

    var formData = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      sueldo: sueldo,
      mensaje: mensaje
    };
    
    var tasaDolarPeso = 498;
    var tasaEuroPeso = 258.30;
    var tasaBitcoinPeso = 6586486.98;

    var sueldoDolar = sueldo / tasaDolarPeso;
    var sueldoEuro = sueldo / tasaEuroPeso;
    var sueldoBitcoin = sueldo / tasaBitcoinPeso;

    formData.sueldoDolar = sueldoDolar.toFixed(2);
    formData.sueldoEuro = sueldoEuro.toFixed(2);
    formData.sueldoBitcoin = sueldoBitcoin.toFixed(8);

    mostrarInformacion(formData);
  });
});

function mostrarInformacion(data) {
  var infoContainer = document.createElement('div');
  infoContainer.classList.add('info__container');

  var infoList = document.createElement('ul');
  infoList.classList.add('info__list');

  for (var key in data) {
    var listItem = document.createElement('li');
    listItem.textContent = key + ': ' + data[key];
    infoList.appendChild(listItem);
  }

  infoContainer.appendChild(infoList);

  var infoSection = document.getElementById('info-section');

  infoSection.appendChild(infoContainer);
}



  