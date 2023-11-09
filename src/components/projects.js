import styles from './css-components/projects.module.css'
import weatherImage from "../images/weather-image.png"
import xCloneImg from "../images/twitterXclone.PNG";

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
                        <div className={styles.text}>
                            <h3>Weather App</h3>
                            <p>A simple weather app that uses the Open Weather API to fetch data and display it in a user friendly manner. </p>
                            <div>
                                <p><a href="https://myreactjsweather.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                                <p><a href="https://myreactjsweather.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <img src={weatherImage} alt='weatherImage'></img>
                        </div>
                        <div className={styles.text}>
                            <h3>X(Twitter) Clone</h3>
                            <p>An X clone app that has the functionalities of posting, liking and deleting posts.</p>
                            <p>Tech used:</p>
                            <div>
                                <p><a href="https://myreactjsweather.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                                <p><a href="https://myreactjsweather.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <img src={weatherImage} alt='weatherImage'></img>
                        </div>
                        <div className={styles.text}>
                            <h3>3D Shirt Design</h3>
                            <p>A 3D tool that creates cool shirt design and logo using threejs technology.</p>
                            <div>
                                <p><a href="https://myreactjsweather.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                                <p><a href="https://myreactjsweather.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <img src={weatherImage} alt='weatherImage'></img>
                        </div>
                        <div className={styles.text}>
                            <h3>Nike Clone</h3>
                            <p>The website is visually appealing with cool designs and a user friendly interface.</p>
                            <div>
                                <p><a href="https://myreactjsweather.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                                <p><a href="https://myreactjsweather.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
};

export default Projects;