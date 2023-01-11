import React from 'react'
import Searchemail from './Searchemail'
import Section3card from './Section3card'
import styles from './Section3.module.css';
const Section3 = () => {
  return (
    <div className={styles.outer}>
      <h1>Frequently Asked Questions</h1>
        <Searchemail />
        <Section3card />
    </div>
  )
}

export default Section3