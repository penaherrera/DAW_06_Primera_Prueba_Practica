let inputNombre = document.getElementById("nombreEmpleado");
let inputCargo = document.getElementById("cargoEmpleado");
let inputNumHoras = document.getElementById("numHoras");
let inputPagoHora = document.getElementById("pagoHora");
let btnCalcular = document.getElementById("btnCalcular");
let nombreEmpleado;
let cargoEmpleado;
let numHoras;
let pagoPorHora;

const descuentoISSS = 3;
const descuentoAFP = 7.25;
let sueldoTotal;

let calcularPorcentajeISSS = (sueldoTotal) => {
  let porcentajeISSS = (sueldoTotal * descuentoISSS) / 100;
  if (porcentajeISSS > 30) {
    return 30;
  } else {
    return porcentajeISSS;
  }
};

let calcularPorcentajeAFP = (sueldoTotal) => {
  let porcentajeAFP = (sueldoTotal * descuentoAFP) / 100;
  return porcentajeAFP;
};

let calcularPorcentajeRENTA = (sueldoTotal) => {
  let descuentoRENTA;
  let excesoRENTA;

  if (sueldoTotal > 472.0 && sueldoTotal < 895.25) {
    descuentoRENTA = 10;
    excesoRENTA = sueldoTotal - 472;
    let porcentajeRENTA = (excesoRENTA * descuentoRENTA) / 100 + 17.67;
    return porcentajeRENTA;
  } else if (sueldoTotal > 895.24 && sueldoTotal < 2038.11) {
    descuentoRENTA = 20;
    excesoRENTA = sueldoTotal - 895.24;
    let porcentajeRENTA = (excesoRENTA * descuentoRENTA) / 100 + 60;
    return porcentajeRENTA;
  } else if (sueldoTotal > 2038.1) {
    descuentoRENTA = 30;
    excesoRENTA = sueldoTotal - 2038.1;
    let porcentajeRENTA = (excesoRENTA * descuentoRENTA) / 100 + 288.57;
    return porcentajeRENTA;
  } else {
    return 0;
  }
};

let calcularSueldoNeto = (
  sueldoTotal,
  porcentajeISSS,
  porcentajeAFP,
  porcentajeRENTA
) => {
  let sueldoNeto =
    sueldoTotal - porcentajeISSS - porcentajeAFP - porcentajeRENTA;
  return sueldoNeto;
};

let calcularDescuentoTotal = (
  porcentajeISSS,
  porcentajeAFP,
  porcentajeRENTA
) => {
  let descuentoTotal = porcentajeISSS + porcentajeAFP + porcentajeRENTA;
  return descuentoTotal;
};

btnCalcular.addEventListener("click", function () {
  if (
    !inputNombre.value ||
    !inputCargo.value ||
    !inputNumHoras.value ||
    !inputPagoHora.value
  ) {
    alert("Por favor, completa todos los campos antes de calcular.");
    return;
  }
  nombreEmpleado = inputNombre.value;
  cargoEmpleado = inputCargo.value;
  numHoras = parseFloat(inputNumHoras.value);
  pagoPorHora = parseFloat(inputPagoHora.value);
  sueldoTotal = pagoPorHora * numHoras;

  let porcentajeISSS = calcularPorcentajeISSS(sueldoTotal);
  let porcentajeAFP = calcularPorcentajeAFP(sueldoTotal);
  let porcentajeRENTA = calcularPorcentajeRENTA(sueldoTotal);

  let descuentoTotal = calcularDescuentoTotal(
    porcentajeISSS,
    porcentajeAFP,
    porcentajeRENTA
  );
  console.log("Descuento Total:", descuentoTotal.toFixed(2));
  console.log("Nombre:", nombreEmpleado);
  console.log("Cargo:", cargoEmpleado);
  console.log("Sueldo Total:", sueldoTotal.toFixed(2));
  console.log("Descuento ISSS:", porcentajeISSS.toFixed(2));
  console.log("Descuento AFP:", porcentajeAFP.toFixed(2));
  console.log("Descuento RENTA:", porcentajeRENTA.toFixed(2));

  let sueldoNeto = calcularSueldoNeto(
    sueldoTotal,
    porcentajeISSS,
    porcentajeAFP,
    porcentajeRENTA
  );
  console.log("Sueldo Neto:", sueldoNeto.toFixed(2));

  const contenedorResultado = `<div class="item">
  <div class="item-header">
    <h2>Nombre: ${inputNombre.value}</h2>
  </div>

</div>
<div class="item">
  <div class="item-header">
    <h2>Cargo: ${inputCargo.value}</h2>
  </div>
</div>
<div class="item">
  <div class="item-header">
    <h2>Salario base: ${sueldoTotal.toFixed(2)}</h2>
  </div>
</div>
<div class="item">
  <div class="item-header">
    <h2>Descuento ISSS: ${porcentajeISSS.toFixed(2)}<h2>
  </div>
</div>
<div class="item">
  <div class="item-header">
    <h2>Descuento AFP: ${porcentajeAFP.toFixed(2)}<h2>
  </div>
</div>
<div class="item">
  <div class="item-header">
    <h2>Descuento RENTA: ${porcentajeRENTA.toFixed(2)}<h2>
  </div>
</div>
<div class="item">
  <div class="item-header">
    <h2>Descuento TOTAL: ${descuentoTotal.toFixed(2)}<h2>
  </div>
</div>
<div class="item">
  <div class="item-header">
    <h2>Salario Neto: ${sueldoNeto.toFixed(2)}<h2>
  </div>
</div>`;
  document.getElementById("contenedor-resultado").innerHTML =
    contenedorResultado;
});
