/*El script que desarrollará deberá permitir al contador ingresar el nombre del empleado, cargo,
número de horas trabajadas en el mes y el pago por hora. En base a dicha información, deberá
mostrar la siguiente información: nombre, cargo, salario base, descuento ISSS, descuento AFP,
descuento de renta y el salario a devengar.
Deberá crear funciones flecha para calcular descuento de ISSS, AFP, renta y salario a devengar.
NOTA: Los porcentajes vigentes en El Salvador son los siguientes:
- ISSS: 3% del salario con un máximo de $30.
- AFP: 7.25 %
- Renta: en base a la siguiente tabla proporcionada por hacienda*/

let inputNombre = document.getElementById("nombreEmpleado");
let btnCalcular = document.getElementById("btnCalcular");
let nombreEmpleado = "";

btnCalcular.addEventListener("click", function () {
  nombreEmpleado = inputNombre.value;
  console.log("Que pedo si sirve", nombreEmpleado);
});

let cargoEmpleado = "CEO";
let numHoras = 40;
let pagoPorHoras = 11.5;
const descuentoISSS = 3;
const descuentoAFP = 7.23;
let sueldoTotal = pagoPorHoras * numHoras;

console.log(sueldoTotal);

let calcularPorcentajeISSS = () => {
  let porcentajeISSS = (sueldoTotal * descuentoISSS) / 100;
  console.log(porcentajeISSS);
  if (porcentajeISSS >= 30) {
    return (porcentajeISSS = 30);
  } else {
    // const sueldoSinISSS = sueldoTotal - porcentajeISSS;
    return porcentajeISSS;
  }
};

let calcularPorcentajeAFP = () => {
  let porcentajeAFP = (sueldoTotal * descuentoAFP) / 100;
  //   const sueldoSinAFP = sueldoSinISSS - porcentajeAFP;
  return porcentajeAFP;
};

let calcularPorcentajeRENTA = () => {
  let descuentoRENTA;
  let excesoRENTA;

  if (sueldoTotal > 472.0 && sueldoTotal < 895.25) {
    descuentoRENTA = 10;
    excesoRENTA = sueldoTotal - 472;
    console.log(excesoRENTA);
    let porcentajeRENTA = (excesoRENTA * descuentoRENTA) / 100 + 17.67;
    console.log(porcentajeRENTA);
    // let sueldoSinRENTA = sueldoSinAFP - porcentajeRENTA;
    return porcentajeRENTA;
  } else if (sueldoTotal > 895.24 && sueldoTotal < 2038.11) {
    descuentoRENTA = 20;
    excesoRENTA = sueldoTotal - 895.24;
    let porcentajeRENTA = (excesoRENTA * descuentoRENTA) / 100 + 60;
    console.log(porcentajeRENTA);
    // sueldoSinRENTA = sueldoSinAFP - porcentajeRENTA;
    return porcentajeRENTA;
  } else if (sueldoTotal > 2038.1) {
    descuentoRENTA = 30;
    excesoRENTA = sueldoTotal - 2038.1;
    let porcentajeRENTA = (excesoRENTA * descuentoRENTA) / 100 + 288.57;
    console.log(porcentajeRENTA);
    return porcentajeRENTA;
  } else {
    porcentajeRENTA = 0;
    return porcentajeRENTA;
  }
};

let calcularSueldoNeto = (
  sueldoTotal,
  calcularPorcentajeISSS,
  calcularPorcentajeAFP,
  calcularPorcentajeRENTA
) => {
  let sueldoNeto =
    sueldoTotal -
    calcularPorcentajeISSS(sueldoTotal) -
    calcularPorcentajeAFP(sueldoTotal) -
    calcularPorcentajeRENTA(sueldoTotal);
  return sueldoNeto;
};

let calcularDescuentoTotal = (
  calcularPorcentajeISSS,
  calcularPorcentajeAFP,
  calcularPorcentajeRENTA
) => {
  let descuentoTotal =
    calcularPorcentajeISSS + calcularPorcentajeAFP + calcularPorcentajeRENTA;
  return descuentoTotal;
};

console.log(sueldoTotal);
console.log(calcularPorcentajeISSS());
console.log(calcularPorcentajeAFP());
console.log(calcularPorcentajeRENTA());
console.log(
  calcularDescuentoTotal(
    calcularPorcentajeISSS(sueldoTotal),
    calcularPorcentajeAFP(sueldoTotal),
    calcularPorcentajeRENTA(sueldoTotal)
  )
);

console.log(
  calcularSueldoNeto(
    sueldoTotal,
    calcularPorcentajeISSS,
    calcularPorcentajeAFP,
    calcularPorcentajeRENTA
  )
);
