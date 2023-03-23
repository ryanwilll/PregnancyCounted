const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const btnCalcular = document.querySelector(".btn-calcular");
const outputAnos = document.querySelector(".anos");
const outputMeses = document.querySelector(".meses");
const outputSemanas = document.querySelector(".semanas");
const outputDias = document.querySelector(".dias");
const resultado = document.querySelector(".resultado");

btnCalcular.addEventListener("click", (e) => {
  e.preventDefault();
  var startDateValue = startDate.value.toString();
  var endDateValue = endDate.value.toString();
  var dias = calcularDias(startDateValue, endDateValue);
  var meses = calcularMeses(dias);
  var semanas = calcularSemanas(dias);
  var anos = calcularAnos(meses);
  exibirDados(anos, meses, semanas, dias);
});

function calcularDias(d1, d2) {
  const diffInMs = new Date(d2) - new Date(d1);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays;
}

function calcularSemanas(dias) {
  var semanas = dias / 7;
  return semanas;
}

function calcularMeses(dias) {
  var meses = dias / 30;
  return meses;
}

function calcularAnos(meses) {
  var anos = meses / 12;
  return anos;
}

function exibirDados(anos, meses, semanas, dias) {
  if (dias < 0) {
    alert(
      "🐞 Ops...\n\nAs datas inseridas são inválidas, a data da DUM não pode ser mais recente do que a data do 1° atendimento. Caso isso ocorreu, será necessário lançar um novo atendimento com a data correta."
    );
    resultado.classList.remove("visible");
    return;
  }

  outputAnos.innerHTML = `<span>Anos: </span>${anos.toFixed(1)}`;
  outputMeses.innerHTML = `<span>Meses: </span>${meses.toFixed(1)}`;
  outputSemanas.innerHTML = `<span>Semanas: </span>${semanas.toFixed(1)}`;
  outputDias.innerHTML = `<span>Dias: </span>${dias}`;

  if (!isNaN(dias)) {
    resultado.classList.add("visible");
  } else {
    alert("🐞 Ops...\n\nParece que você esqueceu de selecionar alguma data...");
    resultado.classList.remove("visible");
  }
}

// function converterDate(){
//   var startDateConverted = startDate.value.split('-').reverse().join('/');
//   var endDateConverted = endDate.value.split('-').reverse().join('/');

//  return ({ startDate: startDateConverted, endDate: endDateConverted });
// }
