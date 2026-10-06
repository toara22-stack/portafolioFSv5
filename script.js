document.addEventListener("DOMContentLoaded", function() {
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    
    btnDarkMode.addEventListener("click", function() {
        // Alterna la clase 'dark-mode' en la etiqueta body
        document.body.classList.toggle("dark-mode");
        
        // Opcional: Cambia el texto del botón según el estado
        if (document.body.classList.contains("dark-mode")) {
            btnDarkMode.textContent = "Modo claro";
        } else {
            btnDarkMode.textContent = "Modo oscuro";
        }
    });
});
