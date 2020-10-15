// Variables
const lista = document.getElementById('celus');
const lugarCelus = document.getElementById('show');
const vaciar = document.querySelector('#vaciar-carrito');
const final = document.querySelector('#fin');
const cotizar = document.querySelector("#envios");
const persona = document.querySelector("#persona");
const botonCerrar = document.querySelector("#cerrarmodal")
// No lo muestro hasta que se cargue por lo menos un objeto
final.style.display = "none";
let articulosCarrito = [];


// Evento
cargarEvent();
function cargarEvent() {
    // Cargar celu
    lista.addEventListener('click', cargarCelu);
    // Eliminar celus
    show.addEventListener('click', eliminarCelu);
    // Botones envio y retiro
    cotizar.addEventListener('click', envios);
    persona.addEventListener('click', retira);
    // Vaciar carrito
    vaciar.addEventListener('click', () => {
        articulosCarrito = [];
        localStorage.removeItem('celu')
        final.style.display = "none"
        limpiar()
    });
    botonCerrar.addEventListener('click', cerrarModal);
    
}

//eliminar celu
function eliminarCelu(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar')) {
        const celuID = e.target.getAttribute('data-id');
        //eliminar pr ID
        articulosCarrito = articulosCarrito.filter(celu => celu.id !== celuID)
        localStorage.removeItem('celu', celuID) // Remueve el item de local storage
        carritoHTML() // Iterar y mostrar HTML de nuevo
    }
}

//FUNCIONES
function cargarCelu(e) {
    e.preventDefault();
    if (e.target.classList.contains('comprar')) {
        const celuElegido = e.target.parentElement.parentElement.parentElement;
        final.style.display = "block"
        leerDatos(celuElegido);
    }
}
//Leé el contenido y extrae información
function leerDatos(celu) {
    // Objeto
    const Celular = {
        imagen: celu.querySelector('img').src,
        nombre: celu.querySelector('h5').textContent,
        id: celu.querySelector('a').getAttribute('data-target'),
        cantidad: 1,
    }
    //Revisar si ya existe
    const existe = articulosCarrito.some(celu => celu.id === Celular.id)
    if (existe == true) {
        let celu = articulosCarrito.map(celu => {
            if (celu.id === Celular.id) {
                celu.cantidad++; // retorna actualizado
                return celu;
            } else {
                return celu; //retorna objetos no actualizado
            }
        })
        articulosCarrito = [...celu]
    } else {
        // Agrego al carrito
        articulosCarrito = [...articulosCarrito, Celular]
    }

    //Agregar elementos al carrito

    carritoHTML()
}
function carritoHTML() {
    // Limpiar html
    limpiar();
    articulosCarrito.forEach(celu => {
        const { imagen, nombre, id, cantidad } = celu;
        const celulares = document.createElement('div');
        celulares.setAttribute('class', 'col s12 m6 l4')
        celulares.setAttribute('id', "show")
        var cel = celulares.innerHTML = `
        <div class="col s12">
                <div class="card horizontal">
                    <div class="card-image">
                        <img src="${imagen}" height="200"> 
                        <span class="card-title"></span>
             </div>
                    <div class="card-content">
                        <span class="card-title black-text">${nombre} </span>
                        <p>Cantidad: ${cantidad}</p>
                    </div>   
             </div>
    </div>
         `;
        //Agregar html 
        lugarCelus.appendChild(celulares)
        localStorage.setItem('celu', cel)
    })
}
// Elimina los celu
function limpiar() {
    //forma recomendada
    while (lugarCelus.firstChild) {
        lugarCelus.removeChild(lugarCelus.firstChild);
    }
}

function envios() {
    var contenido = document.querySelector('#contenido')
    let input = document.createElement('div')
    input.setAttribute('class', 'col s12 m6 l4')
    let mostrar = contenido.innerHTML = `
    <form action="#">
    <div class="input-field col s6">
    <label class="label" for="numero" >Codigo postal</label>
    <input type="text" id="numero" minlength="3" maxlength="7">
    <input type="submit" onclick="valor()" class="btn green" value="Cotizar">
    </div>
    </form>
    `
}


function valor() {
    var codigo = document.getElementById("numero").value;
    codigo = parseInt(codigo);
    let longitud = codigo.toString();
    if (longitud.length < 3) {
        swal({
            title: "Por favor",
            text: "Ingresa un codigo postal mayor a 3 numeros",
            icon: "error",
            button: "Reintentar",
        });
    } else {
        calcularCodigo(codigo)
    }



}
function cerrarModal(){
    

}
function retira() {

}

function calcularCodigo(codigo) {
    if (codigo <= 500 && codigo >= 0) {
        let div = document.querySelector('#modal1')

        swal({
            title: "El valor del envío es de 750$",
            text: "Para aceptar el pedido, presiona 'Ok'",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Nos contactaremos para enviar tu/s producto/s :)", {
                        icon: "success",

                    });
                    var modal = document.querySelector('.modal-overlay');
                    modal.style.display = "none"
                } else {
                    swal({
                        icon: 'error',
                        text: "No hay problema, puedes seguir comprando :)"
                    });
                    div.style.display = "block"
                }
            });

    } else if (codigo <= 2500 && codigo >= 500) {
        swal({
            title: "El valor del envío es de 650$",
            text: "Para aceptar el pedido, presiona 'Ok'",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Nos contactaremos para enviar tu/s producto/s :)", {
                        icon: "success",

                    });
                    var modal = document.querySelector('.modal-overlay');
                    modal.style.display = "none"
                } else {
                    swal({
                        icon: 'error',
                        text: "No hay problema, puedes seguir comprando :)"
                    });
                    div.style.display = "block"
                }
            });
    } else if (codigo <= 4500 && codigo >= 2500) {
        swal({
            title: "El valor del envío es de 650$",
            text: "Para aceptar el pedido, presiona 'Ok'",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Nos contactaremos para enviar tu/s producto/s :)", {
                        icon: "success",

                    });
                    var modal = document.querySelector('.modal-overlay');
                    modal.style.display = "none"
                } else {
                    swal({
                        icon: 'error',
                        text: "No hay problema, puedes seguir comprando :)"
                    });
                    div.style.display = "block"
                }
            });
    } else if (codigo >= 4500) {
        swal({
            title: "El valor del envío es de 450$",
            text: "Para aceptar el pedido, presiona 'Ok'",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Nos contactaremos para enviar tu/s producto/s :)", {
                        icon: "success",

                    });
                    var modal = document.querySelector('.modal-overlay');
                    modal.style.display = "none"
                } else {
                    swal({
                        icon: 'error',
                        text: "No hay problema, puedes seguir comprando :)"
                    });
                    div.style.display = "block"
                }
            });
    } else {
        swal({
            title: "Por favor",
            text: "Ingresa un valor",
            icon: "error",
            button: "Reintentar",
        });
    }
}






// MATERIALIZE
function agregar() {
    M.toast({
        html: 'Agregado al carrito!',
        displayLength: 3000,
        classes: 'green',
    })
}

