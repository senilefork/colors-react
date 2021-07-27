import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import ColorList from "./ColorList";
import Color from './Color';
import Form from './Form';
import Routes from './Routes'
function App() {
  return (
    <div className="App">
     <Routes />
    </div>
  );
}

export default App;
