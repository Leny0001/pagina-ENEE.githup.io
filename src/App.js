import './App.css';
/* import NavbarT from './components/Navbar/Navbar'; */
/* import Gallery from './components/Gallery/Gallery'; */


import Cards from './components/Card/Cards';
import Columna from './components/PantallaDividida/Columna';

function App() {
  return (
    <div className="App">
{/*       <NavbarT /> */}
      <Cards />
      {/* <Gallery /> */}
      <Columna />
    </div>
  );
}

export default App;
