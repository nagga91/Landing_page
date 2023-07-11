import './App.css';
import Carosel from './components/Carosel';
import data from './components/Data';
import DrawerAppBar from './components/Drawer'
import Footer from './components/Footer';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
    <DrawerAppBar/>
    <Carosel/>
    <Home data={data}/>
    <Footer/>
    </div>
  );
}

export default App;
