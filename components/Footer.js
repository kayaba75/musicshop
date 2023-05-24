import React from 'react';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Link from 'next/link';

function Footer() {

    return (
    <div className={styles.footer}>
    <ul>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>SUPPORT</li>
        <li>STORES</li>
    </ul>
    </div>
    );
  }
  
  export default Footer;