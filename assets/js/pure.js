window.addEventListener('load', () => {

    const inputJoin = document.querySelector('#input-join');
    const btnJoin = document.querySelector('#btn-join');

    inputJoin.addEventListener('input', function() {
        if (inputJoin.value) {
        btnJoin.style.display = 'block';
        } else {
        btnJoin.style.display = 'none';
        }
    });
});