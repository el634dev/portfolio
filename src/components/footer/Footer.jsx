import React from 'react';
import navStyles from '../Navbar/Navbar.module.css';
import styles from './footer.css';
import { Link, Text } from "@nextui-org/react";

const Footer = () => {
    return (
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link href='https://github.com/el634dev' className={navStyles.navbarLink} target='_blank' icon>GitHub</Link>
          <Link href='https://www.linkedin.com/in/emilylopez-228b' className={navStyles.navbarLink} target='_blank'  icon>LinkedIn</Link>
        </div>
        <Text>© {new Date().getFullYear()}</Text>
      </div>
    );
  }
  
export default Footer;