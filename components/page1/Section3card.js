import React from 'react';
import styles from './Section3card.module.css';
const Section3card = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.card}>
        <div className={styles.top}>
          <h1>What is Netflix?</h1>
          <button>+</button>
        </div>
        <div>
          <hr className={styles.hrline} />
        </div>

        <div className={styles.bottom}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus rem
          aut eum maxime quae quas doloribus rerum, vero, adipisci veritatis et
          provident molestiae corporis earum culpa commodi accusamus distinctio
          mollitia.
        </div>
      </div>
    </div>
  );
};

export default Section3card;
