const seguirBtn = document.getElementById('seguir-btn');
const cover = document.getElementById('cover');

seguirBtn.addEventListener('click', function (e) {
    e.preventDefault();
    cover.classList.add('up');
    setTimeout(function () {
        window.location.href = './pages/home.html';
    }, 800);
});

// impede que a página continue em branco quando usa o botão "voltar"
window.addEventListener('pageshow', function () {
    cover.classList.remove('up');
});