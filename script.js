document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-button');
    const arButton = document.querySelector('.btn-ar');
    const stockInfo = document.getElementById('stock-info');
    const message = document.getElementById('message');

    let units = 5;

    // Lógica de Compra
    buyButton.addEventListener('click', () => {
        if (units > 0) {
            units--;
            stockInfo.textContent = `Quedan ${units} unidades`;

            message.textContent = "¡Producto añadido! Redirigiendo a pago seguro...";
            message.classList.remove('hidden');
            message.style.color = "#2ecc71";

            if (units === 0) {
                buyButton.disabled = true;
                buyButton.textContent = "Sin existencias";
                buyButton.style.backgroundColor = "#444";
                stockInfo.style.backgroundColor = "#444";
            }
        }
    });

    // Lógica del botón AR
    arButton.addEventListener('click', () => {
        alert("Para ver este modelo en tu espacio, descarga nuestra App en tu móvil y escanea el marcador que recibirás con tu pedido.");
    });
});