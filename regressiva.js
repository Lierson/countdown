// Definir o tempo total em minutos
var tempoTotal = 20;

// Função para iniciar a contagem regressiva
function iniciarContagemRegressiva() {
  // Exibir o tempo total no início da contagem regressiva
  console.log(tempoTotal + " minutos");

  // Criar um intervalo de tempo para a contagem regressiva
  var intervalo = setInterval(function() {
    // Reduzir o tempo total em 1
    tempoTotal--;

    // Verificar se o tempo total é maior que 0
    if (tempoTotal > 0) {
      // Exibir o tempo total atualizado
      console.log(tempoTotal + " minutos");
    } else {
      // Se o tempo total for menor ou igual a 0, exibir a mensagem "Sua vez" e parar o intervalo
      console.log("Sua vez");
      clearInterval(intervalo);
    }
  }, 60000); // 60000 milissegundos = 1 minuto
}

// Chamar a função para iniciar a contagem regressiva
iniciarContagemRegressiva();
