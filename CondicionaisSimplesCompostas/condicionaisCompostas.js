const title = 'Condicionais Compostas'

document.querySelector('#body').innerHTML = title
console.log("Condicionais Compostas")

/* ------------------ Exemplo com Html --------------------------------
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'ensolarado') {
    para.textContent = 'Está bom e ensolarado lá fora hoje. Use shorts! Vá à praia, ou ao parque, e tome um sorvete.';
    console.log("Está bom e ensolarado lá fora hoje. Use shorts! Vá à praia, ou ao parque, e tome um sorvete.")
  } else if (choice === 'chuvoso') {
    para.textContent = 'A chuva está caindo lá fora; leve uma capa de chuva e um guarda-chuva, e não fique muito tempo fora.';
    console.log("A chuva está caindo lá fora; leve uma capa de chuva e um guarda-chuva, e não fique muito tempo fora.")
  } else if (choice === 'nublado') {
    para.textContent = 'Não está chovendo, mas o céu está cinza e sombrio; pode virar a qualquer minuto, então leve uma capa de chuva para o caso.';
    console.log("Não está chovendo, mas o céu está cinza e sombrio; pode virar a qualquer minuto, então leve uma capa de chuva para o caso.")
  } else if (choice === 'tempestade') {
    para.textContent = 'Cuidado! Raios, trovões, cuidado com as enchentes, se puder fique em caso e aguarde até a amenização da chuva.';
    console.log("Cuidado! Raios, trovões, cuidado com as enchentes, se puder fique em caso e aguarde até a amenzação da chuva.")
  } else {
    para.textContent = '';
  }
}
*/


/*  Sem um True explicito
var shoppingDone = false;

if (shoppingDone) {
  console.log(10);
} else {
  console.log(5);
}
*/

/* --- exemplo AND, o fragmento de exemplo anterior pode ser reescrito assim:
let choice = "ensolarado"
let temperature = 90

if (choice === 'ensolarado' && temperature < 86) {
    console.log(`Está bom e ensolarado lá fora hoje ${temperature}º. Use shorts! Vá à praia, ou ao parque, e tome um sorvete.`)
  } else if (choice === 'sunny' && temperature >= 86) {
    console.log(`Está um dia realmente quente ${temperature}º. Tome cuidade, beba muita água e mantenha-se hidratado.`)
    
}

/*------- exemplo OR  --------------
let sorveteiroLaFora = true
let statusCasa = 'Muito quente'

if (sorveteiroLaFora || statusCasa === 'Muito quente') {
  console.log('Você deve ir rapidamente.');
} else {
  console.log('Não precisa sair.');
}

/*------------ Exemplo NOT, expressado pelo operador !, pode ser usado para negar uma expressão. 
Vamos combiná-lo com OR no exemplo acima: -- */

let sorveteiroLaFora = true
let statusCasa = 'Muito quente'

if (!(sorveteiroLaFora || statusCasa === 'Muito quente')) {
  console.log('Você deve ir rapidamente.');
} else {
  console.log('Não precisa sair.');
}


/* ------------------ Exemplo com Html Case --------------------------------
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  switch(choice){
    case 'ensolarado' :
        para.textContent = 'Está bom e ensolarado lá fora hoje. Use shorts! Vá à praia, ou ao parque, e tome um sorvete.';
        break;
    
    case 'chuvoso' :
        para.textContent = 'A chuva está caindo lá fora; leve uma capa de chuva e um guarda-chuva, e não fique muito tempo fora.';
        break;

    case 'nublado' :
        para.textContent = 'Não está chovendo, mas o céu está cinza e sombrio; pode virar a qualquer minuto, então leve uma capa de chuva para o caso.';
        break;

    case 'tempestade' :
        para.textContent = 'Cuidado! Raios, trovões, cuidado com as enchentes, se puder fique em caso e aguarde até a amenização da chuva.';
        break;

      default:
        para.textContent = '';
  }

}

*/
