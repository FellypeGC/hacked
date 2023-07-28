function clicar() {
    let n1 = parseFloat(document.getElementById('n1').value); 
    //Variável do input n1 que receberá o valor do n1.

    let n2 = parseFloat(document.getElementById('n2').value); 
    //Variável do input n2 que receberá o valor do n2.

    if (n1 >= 0 && n2 >= 0) { 
        // Caso os inputs n1 e n2 recebam um número maior ou igual a 0 (Zero), ou seja: for positivo, a página exibirá o seguinte alerta: 
        alert('**Parabéns! Você acabou de HACKEAR a NASA!! Agora, Bem-Vindo aos Anonymous!**');
    } else { 
        // Caso os inputs não receberem os números, a página exibirá o alerta para que sejam preenchidos corretamente.
        alert('**Insira um número *positivo* e veja o que acontecerá!**')
    }
}