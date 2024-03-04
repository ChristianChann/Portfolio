import "./nav.style.css"

const NavBar = () =>{
    return(
        <div className="navDiv">
            <div>
                <h2>CHANN</h2>
            </div>

            <div className="container">
                <span>Home</span>
                <span>About Me</span> 
                <span>Service</span>
                <span>Portfoilo</span>
                <span>Contact</span>
            </div>
        </div>
    )
}

export default NavBar