function showInicio(){
    document.getElementById('inicio').style.display = '';
    document.getElementById('projectos').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';

}

function showProjectos(){
    document.getElementById('projectos').style.display = '';
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('contacto').style.display = 'none';

}
function showContacto(){
    document.getElementById('contacto').style.display = '';
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('projectos').style.display = 'none';
}


const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:jupitermorillo@hotmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}




window.addEventListener('load', ()=> {
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');
  
    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach( (button) => { 
        button.addEventListener('click', ()=> {
            calculadora(button, display)
        })
    })
});

function calculadora(button, display) {
    switch (button.innerHTML){
        case 'c':
            borrar(display);
            break;
        
        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }   
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}


function actualizar(display, button) {
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}


function borrar(display){
    display.innerHTML = 0;

}