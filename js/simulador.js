function limpiarTabla() {
  document.querySelectorAll('tbody tr').forEach((row) => {
    row.remove();
    localStorage.clear();
    let a = document.getElementById("pronostico")
    
  });
}

function calcular(corte1, corte2, corte3) {
  let nota1 = corte1 * 0.33;
  let nota2 = corte2 * 0.33;
  let nota3 = corte3 * 0.34;

  let definitiva = nota1 + nota2 + nota3;
  console.log(definitiva.toFixed(1));
  return definitiva.toFixed(1);
}

function guardarDatos(corte1, corte2, corte3, definitiva) {
  let datos = {
    corte1: corte1,
    corte2: corte2,
    corte3: corte3,
    definitiva: definitiva
  };

  let registros = localStorage.getItem('registros');
  if (registros) {
    registros = JSON.parse(registros);
    registros.push(datos);
  } else {
    registros = [datos];
  }

  localStorage.setItem('registros', JSON.stringify(registros));
}

function cargarDatos() {
  let registros = localStorage.getItem('registros');
  if (registros) {
    registros = JSON.parse(registros);
    let tbody = document.getElementById('cuerpoTabla');
    tbody.innerHTML = '';

    registros.forEach((datos) => {
      let html = `<tr><td>${datos.corte1}</td><td>${datos.corte2}</td><td>${datos.corte3}</td><td>${datos.definitiva}</td></tr>`;
      tbody.innerHTML += html;
    });
  }
}

let formulario = document.querySelector('#agregarNotas');
formulario.addEventListener('click', (el) => {
  el.preventDefault();
  let borrarForm = document.getElementById("borrarForm");
  let corte1 = parseFloat(document.getElementById('corte1').value);
  let corte2 = parseFloat(document.getElementById('corte2').value);
  let corte3 = parseFloat(document.getElementById('corte3').value);
  let regex = /^[0-5](\.\d+)?$/;
  
  if (regex.test(corte1) && regex.test(corte2) && regex.test(corte3)) {
    let definitiva = parseFloat(calcular(corte1, corte2, corte3));
    let tbody = document.getElementById('cuerpoTabla');
    let html = `<tr><td>${corte1}</td><td>${corte2}</td><td>${corte3}</td><td>${definitiva}</td></tr>`;
    tbody.innerHTML += html;

    guardarDatos(corte1, corte2, corte3, definitiva);
    borrarForm.reset();
    document.getElementById("pronostico").innerHTML = "";
  } else {
    console.log("El número ingresado es mayor a 5.0 o no es un número válido.");
    alert("Número no válido");
  }
});

cargarDatos();

let ayudaBtn = document.querySelector('#ayudaBtn');
ayudaBtn.addEventListener('click', (e) => {
  e.stopPropagation()
  e.preventDefault()
  let definitivaObjetivo = 3.0;
  let nota1 = parseFloat(document.getElementById('corte1').value) * 0.33;
  let nota2 = parseFloat(document.getElementById('corte2').value) * 0.33;
  let nota3Objetivo = (definitivaObjetivo - nota1 - nota2) / 0.34;
  
  document.getElementById("pronostico").innerHTML = (`Para obtener una definitiva de ${definitivaObjetivo}, debes sacar al menos ${nota3Objetivo.toFixed(1)} en el corte 3.`)
  
});
