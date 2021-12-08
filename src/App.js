import './App.css';
import Bienvenida from './components/Bienvenida';
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Bienvenida name="Pepito"/>
      </header>
    </div>
  );
}

export default App;
