document.getElementById('btnClick').addEventListener('click', function() {
    document.getElementById('output').textContent = '¡Botón clicado!';
});

//Este es un metodo
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    document.getElementById('formOutput').textContent = 'Nombre: ' + name + ', Email: ' + email;
});



// Agrego un comentario para generar cambios al realizar 
// el commit en la nueva rama de Release
