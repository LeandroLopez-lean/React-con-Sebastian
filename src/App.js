import './App.css';
import NavBar from './component/navBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import style from "./component/styleCSS/style.css"
import CartWidget from "./component/CartWidget/CartWidget"

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={"bienvenidos"} />
     <CartWidget />
    </div>
  
  
  );
}

export default App;
