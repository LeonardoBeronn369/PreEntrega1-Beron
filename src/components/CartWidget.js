const CartWidget = () => {
  return (
    <>
      <div className="logoCarro">
        <button id="boton-carrito">
          <i className="fas fa-shopping-cart">
            <span id="contadorCarro">4</span>
          </i>
        </button>
      </div>
    </>
  );
};

export default CartWidget;
