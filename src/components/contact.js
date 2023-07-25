import styles from './css-components/contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    
    return (
        <div id="contact">
            <div className={styles.container} >
                <div className={styles.containerWrap}>
                <h1>Get In Touch</h1>
                <div className={styles.info}>
                    {/* <p className={styles.email}>Email To: </p> <span className={styles.emailto}><a href='mailto:husseinsaad123123@gmail.com'>Click To Email</a></span> */}
                        <p>Email: <span className={styles.emailtxt}>husseinsaad123123@gmail.com</span></p>
                        <p>Phone: <span className={styles.emailtxt}>+1 416 786-4664</span></p>
                    </div>
                    <div classNAme={styles.icons}>
                    <a href="https://www.linkedin.com/in/hussein-saadol/" target='__blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icon} /></a>
                    <a href="https://github.com/Hussein039" target='__blank'><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a>
                    <a href="mailto:husseinsaad123123@gmail.com"><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /></a>
                    </div>
                </div>
                

            </div>
        </div>
    )
};

export default Contact;