import { useState } from "react";
import "./main.style.css";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const MainPage = () =>{

    return(
        <div className="mainContainer">
            <div className="subContainer">
                <span className="pTag">
                <Typewriter
                    words={['Do Not Make Flower If You Are Scared To Fall ']}
                    loop={null}
                    cursor
                    cursorStyle='<'
                    cursorColor="red"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                 </span>
            </div>
        </div>
    )
}

export default MainPage;