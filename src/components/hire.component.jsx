import "./hire.style.css"
import { motion } from "framer-motion";

const HirePage = () =>{
    return (
        <div className="expContainer">
            <motion.div 
            initial={{opacity: 0.1, scale: 0.1}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, scale: 1}}
            drag>
            <div className="expHeader">
                <h1 className="expTitle">Have Any Project In Mind?</h1>
                <div className="hireDiv">
                <span className="hireBtn">Hire Me</span>
                </div>
            </div>
            </motion.div>
        </div>
    )
}

export default HirePage;