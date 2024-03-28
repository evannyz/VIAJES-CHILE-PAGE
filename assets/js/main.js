/* Se habilita tooltips */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* Se habilita popovers */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/* Se implementan funcion con jquery */

$(function () {
    // con un click despliego alerta de mensaje enviado correctamente
    $("#send").click(function () {
        alert("El mensaje fue enviado correctamente")
    });

})