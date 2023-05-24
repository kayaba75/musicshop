import React from "react";
import styles from "../styles/Allproduct.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import Link from "next/link";

function Allproduct(data) {
  return (
    <div className={styles.Content}>
    <div className={styles.productContent}>
      <div className={styles.Description}>
        {data.title}

        <h1>{data.description}</h1>
<div className={styles.bouton}>
        <a href="#">DECOUVRIR</a>
      </div></div>

      <Image src={data.image} alt={data.description} width={700} height={700} />
    </div></div>
  );
}

export default Allproduct;
