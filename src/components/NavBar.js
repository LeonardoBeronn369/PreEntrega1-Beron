import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="LogoRivia">
          <a className="riviaLogo" href="#">
            Rivia
          </a>
          <br></br>
          <p className="clothingLogo">Clothing</p>
        </div>
        <div className="links">
          <a className="link" href="#">Productos1</a>
          <a className="link" href="#">Productos2</a>
          <a className="link" href="#">Productos3</a>
          <a className="link" href="#">Productos4</a>

        </div>
        <div>
          <CartWidget />
        </div>
      </header>
    </>
  );
};

export default NavBar;
