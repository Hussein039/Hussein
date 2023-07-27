import styles from './css-components/projects.module.css'
import weatherImage from "../images/weather-image.png"

const Projects = () => {
    
    return (
        <div id="projects">
            <div className={styles.container}>
                <h1>Projects</h1>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <img src={weatherImage} alt='weatherImage'></img>
                        </div>
                        <h3>Weather App</h3>
                        <p><a href="https://myreactjsweather.netlify.app/" target="__blank">Visit Site</a></p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                            <img src='../images/proj.jpg' alt='img'></img>
                        </div>
                        <h3>My Project</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <img src='../images/proj.jpg' alt='img'></img>
                        </div>
                        <h3>My Project</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <img src='../images/proj.jpg' alt='img'></img>
                        </div>
                        <h3>My Project</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            
        </div>
    )
};

export default Projects;