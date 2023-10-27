import NavBar from "./component/navBar";
import Bouquet from "./pages/Bouquet";
import Home from "./pages/Home";
import Compte from "./pages/Compte";
import Footer from "./component/footer";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Bouquet />
      <Compte/>
     <Footer />
    </div>
  );
}

export default App;
