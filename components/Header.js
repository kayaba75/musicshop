import React from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

function Header() {

  return (
    <header className={styles.header}>
        <div className={styles.topheader}>
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} className={styles.iconTop} />
        <p className={styles.logo}> Music Store </p>
        <ul className={styles.icons}>
<li> <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} className={styles.iconTop} /> </li>
<li> <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} className={styles.iconTop} /></li>
<li> <FontAwesomeIcon icon={faBagShopping} style={{color: "#ffffff",}} className={styles.iconTop} /></li>
        </ul>


        </div>
        

        <div className={styles.headerBottom}>
        <span>
        <h3>Phantom</h3>
        <h1>IMPLOSIVVE SOUND</h1>
        </span>
        <span className={styles.boutonheader}>
        <a href="#"> DECOUVRIR </a>
        <a href="#"> ACHETER </a>
        </span>
        </div>


        </header>
  );
}

export default Header;