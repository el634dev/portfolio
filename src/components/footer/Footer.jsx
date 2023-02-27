import React from 'react';
import navStyles from "../navbar/Navbar.css"
import styles from './footer.css';
import { Link, Text } from "@nextui-org/react"; // Link,
//import SocialContact from '../common/social-contact';

function Footer() {
    return (
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link href='https://github.com/el634dev' className={[navStyles.navbarLink, styles.footerLinks]} target='_blank' icon>GitHub<icon></Link>
          <Link href='https://www.linkedin.com/in/emily-lopez228' className={[navStyles.navbarLink, styles.footerLinks]} target='_blank' icon>LinkedIn</Link>
        </div>
        <Text>© {new Date().getFullYear()}</Text>
      </div>
    );
  }
  
export default Footer;
