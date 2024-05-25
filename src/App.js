import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar/navbar'
import Home from './Component/Home/home';
import JaPublication from './Component/Publication/Jornal/jamain.jsx';
import JrPublication from './Component/Publication/Jornal/jrmain.jsx';
import Papublication from './Component/Publication/Paper/pamain.jsx';
import Prpublication from './Component/Publication/Paper/prmain.jsx';
import Bapublication from './Component/Publication/Book/bamain.jsx';
import Brpublication from './Component/Publication/Book/brmain.jsx';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Publication" element={<JaPublication/>}/>
<Route path="/RPublication" element={<JrPublication/>}/>
<Route path="/PaPublication" element={<Papublication/>}/>
<Route path="/PrPublication" element={<Prpublication/>}/>
<Route path="/BaPublication" element={<Bapublication/>}/>
<Route path="/BrPublication" element={<Brpublication/>}/>

</Routes>
    </>
  );
}

export default App;
