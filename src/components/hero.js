import styles from './css-components/hero.module.css'
import resumePDF from "./Files/myresume.pdf"


const HeroContainer = () => {
	

    return(
        <div id="home">
			<div class={styles.container}>
					
			  <div class={styles.textbox}>
			    <h2>Hussein Hussein</h2>
			    <p>Hello! I'm a front-end developer strongly focused on creating and developing beautiful and functional websites.</p>
					<a href="#contact">Contact Me</a>
					<a href={resumePDF} target="_blank">My Resume</a>
			  </div>
					
				<div class={styles.bgimg}>
					<div className={styles.bgimgcolor}>
			    		<img src={require('../images/my-img1.png')} alt="My-0Photo" ></img>
					</div>
				</div>
				<img src={require('../images/wave.png')} alt="My-0Photo" className={styles.wave} ></img>
			</div>
			
        </div>
    )
}



export default HeroContainer;