
import NavBar from './component/navBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import CartWidget from "./component/CartWidget/CartWidget";
import Counter from "./component/ItemListContainer/ItemCount";
import './component/styleCSS/style.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={"bienvenidos"} />
     <CartWidget />
     <Counter />
     
    </div>
  
  
  );
}

export default App;
