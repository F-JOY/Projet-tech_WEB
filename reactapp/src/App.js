import NavBar from "./component/navBar";
import Bouquets from "./pages/Bouquets";
import Home from "./pages/Home";
import Compte from "./pages/Compte";
import Fleurs from "./pages/Fleurs";
import Footer from "./component/footer";
import { state } from "./data/state";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bouquets" element={<Bouquets titre="Découvrir Nos Bouquets" bouquets={state.mesBouquets}/>} />
          <Route path="/fleurs" element={<Fleurs fleurs={state.Fleurs}/>} /> 
          <Route path="/compte" element={<Compte />} /> 
        </Routes>
      <Footer />
      </BrowserRouter>      
   </div>
  );
}

export default App;
