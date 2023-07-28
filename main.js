function clicar() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    if (n1 >= 0 && n2 >= 0) {
        alert('**Parabéns! Você acabou de HACKEAR a NASA!!**');
    } else {
        alert('**Insira um número *positivo* e veja o que acontecerá!**')
    }
}