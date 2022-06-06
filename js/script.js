function main() {
    const iniciarButton = document.querySelector('#iniciar')
    const pausarButton = document.querySelector('#pausar')
    const resetarButton = document.querySelector('#resetar')
    const timerBox = document.querySelector('p');
    let seconds = 0;
    let timer;

    function createDate(seconds) {
        const dateBr = new Date(seconds * 1000);
        return dateBr.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function initiateTimer() {
        timer = setInterval(function () {
            timerBox.innerHTML = createDate(seconds++);
        }, 1000)
    }

    iniciarButton.addEventListener('click', function () {
        clearInterval(timer);
        initiateTimer();
    });

    pausarButton.addEventListener('click', function () {
        clearInterval(timer);
    });

    resetarButton.addEventListener('click', function () {
        clearInterval(timer);
        timerBox.innerHTML = '00:00:00';
        seconds = 0;
    });
}
main();