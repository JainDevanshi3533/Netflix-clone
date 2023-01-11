import React from 'react'
import styles from './Section2left.module.css';
import logo from '../../Netflix-images/img2.jpg'
const Section2right = ({ head1, head2 }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.right}>
        <img src={logo.src} />
      </div>
      <div className={styles.left}>
        <div className={styles.text}>
          <h1>{head1}</h1>
          <h2>{head2}</h2>
        </div>
      </div>
      
    </div>
  );
};

export default Section2right