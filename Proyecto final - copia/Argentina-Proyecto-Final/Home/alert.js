/* funcion de alert, llama a la funcion y si devuelve un emial, resonde con otra alert*/

(async() => {
    const { value: email} = await Swal.fire({
        title: 'Bienvenidos',
        text: 'Sucribite y recibi las mejores ofertas',
        icon: 'info',
        confirmButtonText: 'Enviar',
        bacckdrop: true,
        position:'center',
        allowOutsideClick: true,
        input: 'text',
        inputPlaceholder: 'Email',
        inputValue: '',
        confirmButtonAriaLabel:'Confirmar',
        showCloseButton: true,
        closeButtonAriaLabel:'Cerrar alerta',
    });
    if (email){
        Swal.fire({
            title:'Te suscribiste de manera correcta!',
            icon:'success',
        })
    }
}) ()




