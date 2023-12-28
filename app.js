document.getElementById('guardarCoordenadas').addEventListener('click', function() {
    // Lógica para obtener las coordenadas GPS
    document.getElementById('guardarCoordenadas').addEventListener('click', function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;
    
            // Lógica para guardar las coordenadas
            console.log('Coordenadas GPS:', latitud, longitud);
        });
    
        // Lógica para obtener la frase
        var mensaje = "Coordenadas GPS: \nLatitud: " + latitud + "\nLongitud: " + longitud;
            window.prompt("Coordenadas GPS", mensaje);
        
    });

});
