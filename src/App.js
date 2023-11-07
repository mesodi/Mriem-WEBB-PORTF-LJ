
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App" >

      <Navbar/>
      <section>
        <Intro/>
        <Skills/>
        <Contact/>
      </section>
      <Footer/>
      
    </div>
  );
}

export default App;
