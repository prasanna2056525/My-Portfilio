import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import CursorGlow from "./components/CursorGlow";

export default function App(){
return(
<>
<CursorGlow/>
<Navbar/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Resume/>
<Contact/>
<ChatBot/>
<Footer/>
</>
);
}