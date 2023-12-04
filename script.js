document.addEventListener('DOMContentLoaded', function () {
    var abrirModalBtn = document.getElementById('abrirModalBtn');
    var fecharModalBtn = document.getElementById('fecharModalBtn');
    var janelaModal = document.getElementById('janela-modal');

    abrirModalBtn.addEventListener('click', function () {
        janelaModal.style.display = 'flex';
    });

    fecharModalBtn.addEventListener('click', function () {
        janelaModal.style.display = 'none';
    });
});
