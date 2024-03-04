import "./service.style.css"
import { motion } from "framer-motion";

const ServicePage = () =>{
    
    const serviceData = [{
        name: "Web Desgins",
        title: "Your expertise extends to providing a wide array of web services aimed at enhancing the performance,",
        color:"#4b5563"
    },
    {
        name: "Web Desgins",
        title: "Your expertise extends to providing a wide array of web services aimed at enhancing the performance,",
        color:"#4b5563"
    },
    {
        name: "Web Desgins",
        title: "Your expertise extends to providing a wide array of web services aimed at enhancing the performance,",
        color:"#4b5563"
    },
    {
        name: "Web Desgins",
        title: "Your expertise extends to providing a wide array of web services aimed at enhancing the performance,",
        color:"#4b5563"
    },

]
    return (
        <div className="serviceDiv">
            <motion.div className="Box"
            initial={{opacity: 0.1, scale: 0.1}}
            transition={{duration: 2}}
            whileInView={{opacity: 1, scale: 1}}
            drag>
            <div className="headerDiv">
                <h1 className="sDiv">SERVICES</h1>
                <div className="pDiv">
                    <p>As a skilled web developer, I provide a full range of services encompassing web development,<br/> web services, web design, and RESTful API development.</p>
                </div>
            </div>
            </motion.div>

            <div className="row-container">
            <motion.div className="Box"
            initial={{opacity: 0.1, scale: 0.1}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, scale: 1}}
            drag>
                <div className="sec-container">
                {
                    serviceData && serviceData.map((data)=>(

                    <div className="box"style={{ backgroundColor: data.color }}>
                        <span className="iconDiv">img</span>
                        <h2 className="titleDiv">{data.name}</h2> 
                        <span className="spanDiv">{data.title} </span>
                   </div>
                    ))
                }
                </div>
                    </motion.div>

            </div>
        </div>
    )
}

export default ServicePage;