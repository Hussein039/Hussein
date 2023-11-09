import styles from './css-components/projects.module.css'
import weatherImage from "../images/weather-image.png"
import xCloneImg from "../images/twitterXclone.PNG";
import shirt3d from "../images/3dshirt.PNG";
import nikeClone from "../images/nike.PNG";


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
                                <p><a href="https://github.com/Hussein039/weather-app" target="__blank" className={styles.proj_link}>Github </a></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <img src={xCloneImg} alt='xClone'></img>
                        </div>
                        <div className={styles.text}>
                            <h3>X(Twitter) Clone</h3>
                            <p>An X clone app that has the functionalities of posting, liking and deleting posts and local storage</p>
                            <div>
                                <p><a href="https://xtwitterclonee.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                                <p><a href="https://github.com/Hussein039/x-clone" target="__blank" className={styles.proj_link}>Github </a></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <img src={shirt3d} alt='weatherImage'></img>
                        </div>
                        <div className={styles.text}>
                            <h3>3D Shirt Design</h3>
                            <p>A 3D tool that creates cool shirt design and logo using threejs technology.</p>
                            <div>
                                <p><a href="https://my3dshirt.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                                <p><a href="https://github.com/Hussein039/3d-Shirt" target="__blank" className={styles.proj_link}>Github </a></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImg}>
                        <img src={nikeClone} alt='weatherImage'></img>
                        </div>
                        <div className={styles.text}>
                            <h3>Nike Clone</h3>
                            <p>The website is visually appealing with cool designs and a user friendly interface.</p>
                            <div>
                                <p><a href="https://nikeappclone.netlify.app/" target="__blank" className={styles.proj_link}>Visit </a></p>
                                <p><a href="https://github.com/Hussein039/Nike-clone" target="__blank" className={styles.proj_link}>Github </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
};

export default Projects;