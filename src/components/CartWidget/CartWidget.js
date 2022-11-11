import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div class="logoCarro">
      <button id="boton-carrito">
        <i class="fas fa-shopping-cart">
          <span id="contadorCarro">0</span>
        </i>
      </button>
    </div>
  );
};
