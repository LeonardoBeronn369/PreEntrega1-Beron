import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContaine from "./components/ItemListContaine";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContaine nombre= "Nueva Coleccion" />
    </>
  );
};

export default App;
