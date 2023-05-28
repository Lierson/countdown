# countdown
O código JavaScript que forneci é responsável por realizar uma contagem regressiva a partir de um valor inicial de tempo total, diminuindo 1 a cada minuto até chegar a 0.




Definição do tempo total: A variável tempoTotal é definida com o valor inicial do tempo total em minutos. Neste exemplo, foi utilizado o valor 20, mas você pode alterá-lo conforme necessário.

Função iniciarContagemRegressiva(): Essa função é responsável por iniciar a contagem regressiva. Ela exibe o tempo total no início da contagem e cria um intervalo de tempo para atualizar o tempo total a cada minuto.

Intervalo de tempo: Utilizamos a função setInterval() para criar um intervalo de tempo. Dentro desse intervalo, a cada 1 minuto (60000 milissegundos), o tempo total é reduzido em 1.

Verificação do tempo total: Dentro do intervalo de tempo, é verificado se o tempo total é maior que 0. Se sim, o tempo total atualizado é exibido. Caso contrário, a mensagem "Sua vez" é exibida e o intervalo é interrompido com clearInterval().

Exibição no console: Para este exemplo, utilizamos a função console.log() para exibir o tempo total e a mensagem "Sua vez" no console do navegador ou ambiente de execução.

Para utilizar esse código, você pode copiá-lo para um arquivo JavaScript, como por exemplo contagem_regressiva.js. Em seguida, pode executar esse arquivo em um navegador ou em um ambiente de execução JavaScript. O código iniciará a contagem regressiva a partir do tempo total especificado e exibirá os números e a mensagem de acordo com o tempo decorrido.
