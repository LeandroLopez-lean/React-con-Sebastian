import './App.css';
import NavBar from './component/navBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import style from "./component/styleCSS/style.css"
function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={"bienvenidos"} />
    </div>
  );
}

export default App;
