import './App.css';
import Carosel from './components/Carosel';
import data from './components/Data';
import DrawerAppBar from './components/Drawer';
import ExamplesNavbar from './components/ExamplesNavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import IndexNavbar from './components/IndexNavbar';
import Example from './components/Navbar';

function App() {
  return (
    <div className="App">
    <DrawerAppBar/>
    {/*<Example/>*/}
    <Carosel/>
    <Home data={data}/>
    <Footer/>
    </div>
  );
}

export default App;
