import "./contact.style.css";

const ContactPage = () =>{
    return (
        <div className="lastDiv">
            <div className="lastTitle">
                <h2>Contact Me</h2>
            </div>
            <div className="contactDiv">
                <div>
                    <span>
                        Contact Info

                 <div className="direct-contact-container">
                        
                            <ul className="contact-list">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">City, State</span></i></li>
                            
                            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
                            
                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
                            
                            </ul>

                            
                            <ul className="social-media-list">
                            <li><a href="#" target="_blank" class="contact-icon">
                                <i classs="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#" target="_blank" class="contact-icon">
                                <i classs="fa fa-codepen" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#" target="_blank" class="contact-icon">
                                <i classs="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#" target="_blank" class="contact-icon">
                                <i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>       
                            </ul>
                            

                         <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
    
           </div>
  
                    </span>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ContactPage;