window.addEventListener('load', function() {
    const txtX = document.getElementById('txt-x');
    const txtY = document.getElementById('txt-y');
    const btnAdd = document.getElementById('btn-add');
    const txtSum = document.getElementById('txt-sum');

    btnAdd.onclick = function() {
        const x = parseInt(txtX.value);
        const y = parseInt(txtY.value);
        txtSum.value = x + y;
    }
})