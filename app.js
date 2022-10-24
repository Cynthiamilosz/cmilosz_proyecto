const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    //localstorage
if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
} else {
    localStorage.setItem('dark-mode', 'false');
}
})

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}


//formulario consultas
const submit =document.querySelector ('#submit');
submit.addEventListener('click', mostrarDatos);

function mostrarDatos(){
    const form = document.forms['formconsulta'];

    const datos = [];
    for(let elemento of form){
        //console.dir (elemento);
        datos.push(elemento.value);
    }
    console.log(JSON.stringify(datos));
}

submit.addEventListener('click', function(){
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Se envió la consulta',
    text: 'Te responderemos a la brevedad!'
  })
})
