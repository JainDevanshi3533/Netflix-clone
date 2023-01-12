import React, { useState } from 'react';
import styles from './Section3card.module.css';
const Section3card = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  return (
    <div className={styles.outer}>
      <div className={styles.card}>
        <div className={styles.top}>
          <h1>What is Netflix?</h1>
          <button className={one==true? styles.btn_active: styles.btn}
            onClick={() => {
              setFive(false);
              setOne(!one);
              setTwo(false);
              setThree(false);
              setFour(false);
            }}
          >
            +
          </button>
        </div>
        <div>
          <hr className={styles.hrline} />
        </div>
        {one == true ? (
          <div className={styles.bottom}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            rem aut eum maxime quae quas doloribus rerum, vero, adipisci
            veritatis et provident molestiae corporis earum culpa commodi
            accusamus distinctio mollitia.
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.card}>
        <div className={styles.top}>
          <h1>How much does Netflix cost?</h1>
          <button className={two==true? styles.btn_active: styles.btn}
            onClick={() => {
              setFive(false);
              setOne(false);
              setTwo(!two);
              setThree(false);
              setFour(false);
            }}
          >
            +
          </button>
        </div>
        <div>
          <hr className={styles.hrline} />
        </div>

        {two == true ? (
          <div className={styles.bottom}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            rem aut eum maxime quae quas doloribus rerum, vero, adipisci
            veritatis et provident molestiae corporis earum culpa commodi
            accusamus distinctio mollitia.
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.card}>
        <div className={styles.top}>
          <h1>Where can I watch?</h1>
          <button className={three==true? styles.btn_active: styles.btn}
            onClick={() => {
              setFive(false);
              setOne(false);
              setTwo(false);
              setThree(!three);
              setFour(false);
            }}
          >
            +
          </button>
        </div>
        <div>
          <hr className={styles.hrline} />
        </div>

        {three == true ? (
          <div className={styles.bottom}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            rem aut eum maxime quae quas doloribus rerum, vero, adipisci
            veritatis et provident molestiae corporis earum culpa commodi
            accusamus distinctio mollitia.
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.card}>
        <div className={styles.top}>
          <h1>Is Netflix kids-friendly? </h1>
          <button  className={four==true? styles.btn_active: styles.btn} 
            onClick={() => {
              setFive(false);
              setOne(false);
              setTwo(false);
              setThree(false);
              setFour(!four);
            }}
          >
            +
          </button>
        </div>
        <div>
          <hr className={styles.hrline} />
        </div>

        {four == true ? (
          <div className={styles.bottom}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            rem aut eum maxime quae quas doloribus rerum, vero, adipisci
            veritatis et provident molestiae corporis earum culpa commodi
            accusamus distinctio mollitia.
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.card}>
        <div className={styles.top}>
          <h1>How do I cancel?</h1>
          <button className={five==true? styles.btn_active: styles.btn}
            onClick={() => {
              setFive(!five);
              setOne(false);
              setTwo(false);
              setThree(false);
              setFour(false);
            }}
          >
            +
          </button>
        </div>
        <div>
          <hr className={styles.hrline} />
        </div>

        {five == true ? (
          <div className={styles.bottom}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            rem aut eum maxime quae quas doloribus rerum, vero, adipisci
            veritatis et provident molestiae corporis earum culpa commodi
            accusamus distinctio mollitia.
          </div>
        ) : (
          <></>
        )}
      </div>


    </div>
  );
};

export default Section3card;
