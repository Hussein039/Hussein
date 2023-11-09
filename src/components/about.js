import styles from './css-components/about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3, faJs, faReact, faNode,   } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    
    return (
        <div id="about">
            <div className={styles.container}>
                <h1>About Me</h1>
                <div className={styles.aboutContainer}>
                    <div className={styles.text}>
                        <p>I am a dedicated Front-End Developer with a passion for creating immersive and user-friendly digital experiences.
                            Proficient in HTML, CSS, and JavaScript, React js, and Tailwind I specialize in translating design concepts into visually appealing and interactive interfaces.
                            With a keen eye for detail and a commitment to continuous learning, I strive to deliver exceptional and innovative web solutions tailored to meet the unique needs of users and businesses alike.</p>
                    </div>
                </div>
                       
            </div>
        </div>
    )
};

export default About;