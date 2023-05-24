import React from 'react';
import styles from '../styles/Lastproduct.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';



function Lastproduct(data){

    return (
        <div className={styles.lastproduct}>
            <div className={styles.lastcontent}>
    <span>
    {data.title}
        <h1>  {data.description}</h1>
    </span>
    <Image
        src={data.image}
        width='1000'
        height='245'
      />

<a href="#"> DECOUVRIR </a>
      </div>
      </div>
    )
}


export default Lastproduct;