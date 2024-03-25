function CalcularIMC () {
    let nom = document.querySelector('#idnome');
    let alt = document.querySelector('#idaltura');
    let pes = document.querySelector('#idpeso');
    let res = document.getElementById('res');

    let altura = Number(alt.value);
    let peso = Number(pes.value);
    let nome = (nom.value);

    let imc = peso / (altura**2);
    

    if (imc < 16.9) {
        res.innerHTML = `<p>Olá, <strong>${nome}</strong> o seu IMC é <strong>${imc.toFixed(2)}</strong>.<br/> você está Muito Abaixo do Peso.</p>`
        //res.style.color = '#291f6c'
        
    } else if (imc >= 17 && imc <= 18.4) {
        res.innerHTML = `<p>Olá, <strong>${nome}</strong> o seu IMC é <strong>${imc.toFixed(2)}</strong>.<br/> você está Abaixo do Peso.</p>`
        //res.style.color = '#291f6c'
    } else if (imc > 18 && imc < 25) {
        res.innerHTML = `<p>Olá, <strong>${nome}</strong> o seu IMC é <strong>${imc.toFixed(2)}</strong>.<br/> você está no Peso normal.</p>`
    } else if (imc >= 25 && imc < 30) {
        res.innerHTML = `<p>Olá, <strong>${nome}</strong> o seu IMC é <strong>${imc.toFixed(2)}</strong>.<br/> você está acima do Peso.</p>`
    } else if (imc >= 30 && imc < 35) {
        res.innerHTML = `<p>Olá, <strong>${nome}</strong> o seu IMC é <strong>${imc.toFixed(2)}</strong>.<br/> você está obeso.</p>`
    } else {
        res.innerHTML = `<p>Olá, <strong>${nome}</strong> o seu IMC é <strong>${imc.toFixed(2)}</strong>.<br/> você está em risco.</p>`
    }

}