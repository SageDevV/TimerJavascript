//instanciando um objeto do tipo date, configurando e retornando-o
function date(){
    const dateBr = new Date();
    return dateBr.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
//Criando um intervalo de tempo para a execução de printar uma instancia de um date
const timer = setInterval(function(){
    console.log(date());
}, 0.05);

//Definindo um limite para a execução da função setINterval
//Ele irá executar o print em um intervalo de 0.5 segundos dentro de um range de 3 segundos
const timeOut = setTimeout(function(){
    clearInterval(timer);
    console.log('Tempo excedido');
}, 3000);




