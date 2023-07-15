import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured"
import FilterDish from "./components/FilterDish"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="m-0 p-0 ">
      <Navbar/>
      <Hero/>
      <Featured/>
      <FilterDish/>
      <Footer/>
    </div>
  );
}

export default App;
