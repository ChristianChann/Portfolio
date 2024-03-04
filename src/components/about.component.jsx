import "./about.style.css"

const AboutPage = () =>{
    return (
        <div className="about">
            <div className="firstAboutDiv">
            <div class="center">
                <div class="article-card">
                    <div class="content">
                    <p class="title">Here About of me</p>
                    </div>
                    <img src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/394770156_1388462848772765_6563324497517982938_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=SeNEkt_f2EIAX_a2fJ6&_nc_ht=scontent-hkg4-1.xx&oh=00_AfBwc-pY1I8wSOXbqw2Lq3Zj624YL6teosE2vKqrbClyOw&oe=65E4927F" alt="article-cover" />
                </div>
                </div>
            </div>
            <div className="secAboutDiv">
                <p className="pTag2">
                As 20-years old aspiring front-end software developer, I specialize in React, Next.js, Redux, HTML, CSS, and Javascript, SCSS. With a wealth of experience, I've successfully delivered numerous projects,integrating various libraries and APIs to meet diverse requirements. My expertise lies in crafting interactive, responsive user interfaces while ensuring code quality and adherence to best practices.I'm passionate about technology and eager to learn.
                </p>

                <p className="pTag2">
                I'm driven by challenges and continuously expand my skills through self-study and hands-on projects. With a collaborative mindset and commitment to excellence, I'm excited to embark on the journey toward becoming a proficient software dev.
                </p>
                <div className="btnDiv">
                    <span className="btn-1">View Project</span>
                    <span className="btn-2">Download CV</span>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;