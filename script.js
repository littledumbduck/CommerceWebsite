document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-button');
    const stockInfo = document.getElementById('stock-info');
    const message = document.getElementById('message');

    let units = 5;

    buyButton.addEventListener('click', () => {
        if (units > 0) {
            units--;

            // Actualizamos la interfaz
            stockInfo.textContent = `Quedan ${units} unidades`;

            // Mensaje de éxito
            message.textContent = "¡Gracias por tu compra! Redirigiendo a pasarela de pago...";
            message.classList.remove('hidden');

            if (units === 0) {
                buyButton.disabled = true;
                buyButton.textContent = "Agotado";
                buyButton.style.backgroundColor = "#555";
                stockInfo.style.backgroundColor = "#555";
                stockInfo.textContent = "Sin existencias";
            }
        }
    });
});