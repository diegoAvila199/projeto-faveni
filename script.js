const script_do_google = 'https://script.google.com/macros/s/AKfycbwlZ7qK1TW1sR2G53_ThVrjCuPsKgcc1y2K4vep3qdYWzDJWmwMHImTZQFrieaKX0NN/exec';
const dados_do_formulario = document.forms['formulario-contato'];

dados_do_formulario.addEventListener('submit', function(e)) {
    e.preventDefault();

    fetch(script_do_google, { method: 'POST', body: new FormData(dados_do_formulario) })
    .then(Response=> {
        //Se os dados forem gravados corretamente, será enviada uma mensagem de sucesso
        alert('Dados enviados  com sucesso!', Response);
        dados_do_formulario.reset();
    })
    .catch(error =>
        //Se houver erro no envio, a mensagem abaixo será exibida
        console.error('Erro no envio dos dados', error)
    )};

