import "./project.style.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const ProjectPage = () =>{
const pjData = [
    {
        bgImg: "white",
        title: "About my project",
        date: "2.5.2023",
    }, {
        bgImg: "blue",
        title: "About my project",
        date: "2.5.2023",
    },
    {
        bgImg: "green",
        title: "About my project",
        date: "2.5.2023",
    },
    
    {
        bgImg: "cyan",
        title: "About my project",
        date: "2.5.2023",
    },
    {
        bgImg: "yellow",
        title: "About my project",
        date: "2.5.2023",
    }

]

const [ref, isInView] = useInView();


const cardVarient = {
    initial: {y: 30, opacity: 0.5},
    animate: {y: 0, opacity: 1}
}

    return (
        <div className="pjContainer">
             <motion.div className="Box"
            ref={ref}
            initial={{opacity: 0.1, scale: 0.1}}
            transition={{duration: 2}}
            whileInView={{opacity: 1, scale: 1}}
            drag>
            <div className="pjHeader">
                <h1 className="h1">SOME OF MY PROJECT</h1>
                <span className="expSpan">Experienced web developer adept at creating user-friendly websites<br/>and performance optimization. Collaborative team player committed to staying updated with industry trends.</span>
             </div>
             </motion.div>

             <div>                      
                <div class="ag-courses_box">
                    {
                       pjData && pjData.map((data)=>(
                        <motion.div
                        variants={cardVarient}
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.5 }}
                      >
                        <div class="ag-courses_item" style={{backgroundColor: data.bgImg}} >
                            <section href="#" class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    <span>{data.title}</span>
                                </div>

                                <div class="ag-courses-item_date-box">
                                Date:
                                <span class="ag-courses-item_date">
                                    {data.date}
                                </span>
                                </div>
                             </section>
                        </div>
                        </motion.div>
                       ))
                    }
                    
                 </div>

                </div>
        </div>
    )
}

export default ProjectPage;