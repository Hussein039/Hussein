import styles from './footer.module.css';
import Pdf from '../../Files/myresume.pdf';

const Footer = () =>{

    return(
        <div>
            <footer className={styles.list}>
                <p>Copyright&copy; All Rights Reserved {(new Date().getFullYear())}</p>
            </footer>
        </div>
    )
};

export default Footer;