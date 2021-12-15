function simular() {
  var valor = document.getElementById('valor').valueAsNumber;
  var prazoAnos = document.getElementById('prazoAnos').valueAsNumber;
  var jurosAa = document.getElementById('jurosAa').valueAsNumber;

  var prazoM = prazoAnos * 12;
  var jurosAm = (1 + jurosAa) ** (1 / 12) - 1;
  var amortizacao = valor / prazoM;

  var tbody = document.querySelector('tbody');
  
  for (var i = 0; i < 5; i++){
    var saldoDevedor = valor - amortizacao * i;
    var jurosPrestacao = saldoDevedor * jurosAm;
    var totalPrestacao = jurosPrestacao + amortizacao;

    var tr = tbody.children[i];
    tr.children[0].textContent = i + 1;
    tr.children[1].textContent = amortizacao.toFixed(2);
    tr.children[2].textContent = jurosPrestacao.toFixed(2);
    tr.children[3].textContent = totalPrestacao.toFixed(2);
  }

  var jurosTotal = 0;

  for (var i = 0; i < prazoM; i++){
    var saldoDevedor = valor - amortizacao * i;
    var jurosPrestacao = saldoDevedor * jurosAm;
    jurosTotal += jurosPrestacao;

  }

  document.querySelector('#prazoMeses').value = prazoM;
  document.querySelector('#jurosAm').value = jurosAm;
  document.querySelector('#jurosTotal').value = jurosTotal.toFixed(2);
}

simular();