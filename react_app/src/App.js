import './App.css';
import List from './components/List/List';

function App() {

  const list = ["position", "display", "border", "padding", "margin", "overflow", "background", "font", "text", "transform"];

  return (
    <div className="App">
        <List list = {list}/>
    </div>
  );
}

export default App;
