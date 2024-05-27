import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar/navbar'
import Home from './Component/Home/home';
import About from './Component/About/main.jsx';
import JaPublication from './Component/Publication/Jornal/jamain.jsx';
import JrPublication from './Component/Publication/Jornal/jrmain.jsx';
import Papublication from './Component/Publication/Paper/pamain.jsx';
import Prpublication from './Component/Publication/Paper/prmain.jsx';
import Bapublication from './Component/Publication/Book/bamain.jsx';
import Brpublication from './Component/Publication/Book/brmain.jsx';
import Collaboration from './Component/Collaboration/main.jsx';
import Icollaboration from './Component/Collaboration/Imain.jsx';
import Facility from './Component/Facilities/main.jsx';
import Funded from './Component/Research/FundedProject/main.jsx';
import PHD from './Component/Research/phdProject/main.jsx';
import Student from './Component/Research/studentProject/main.jsx';
import Teaching from './Component/Teaching/main.jsx';
import Faculty from './Component/people/fmain.jsx';
import Stu from './Component/people/smain.jsx';
import Award from './Component/Activites/Award/main.jsx';
import Gallery from './Component/Gallery/main.jsx';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Publication" element={<JaPublication/>}/>
<Route path="/RPublication" element={<JrPublication/>}/>
<Route path="/PaPublication" element={<Papublication/>}/>
<Route path="/PrPublication" element={<Prpublication/>}/>
<Route path="/BaPublication" element={<Bapublication/>}/>
<Route path="/BrPublication" element={<Brpublication/>}/>
<Route path="/Collaboration" element={<Collaboration/>}/>
<Route path="/Icollaboration" element={<Icollaboration/>}/>
<Route path="/Facility" element={<Facility/>}/>
<Route path="/Funded" element={<Funded/>}/>
<Route path="/PHD" element={<PHD/>}/>
<Route path="/Student" element={<Student/>}/>
<Route path="/Teaching" element={<Teaching/>}/>
<Route path="/Faculty" element={<Faculty/>}/>
<Route path="/Stu" element={<Stu/>}/>
<Route path="/Award" element={<Award/>}/>
<Route path="/Gallery" element={<Gallery/>}/>


</Routes>
    </>
  );
}

export default App;
