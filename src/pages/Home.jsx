import MainPage from "../components/main.component";
import "../App.css"
import About from "./About";
import Service from "./service";
import Project from "./Project";
import Hire from "./Hire";
import ContactPage from "../components/contact.component";
  
const Home = () =>{
    
    return(
        <div className="home">
            <MainPage></MainPage>
            <About/>            
            <Service/>
            <Project/>
            <Hire/>
            <ContactPage/>
        </div>
    )
}

export default Home;