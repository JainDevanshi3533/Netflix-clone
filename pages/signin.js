import React from 'react';
import Navlogo from '../components/Navlogo';
import styles from '../styles/Signin.module.css';

const signin = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.content}>
        <Navlogo />
        <div className={styles.container}>
            <div className={styles.form}>
                <form >
                    <h1>Sign In</h1>
                    <input placeholder='Email or phone number'/>
                    <input placeholder='Password' />
                    <button>Sign In</button>
                    <div className={styles.forms1}>
                        <div>
                            <input type="checkbox" id ="reme" name="Remember Me"  value="Remember Me"/>
                            <label for="reme">Remember Me</label><br></br>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className={styles.forms2}>
                    <h1>New to Netflix? <span>Sign up now</span></h1>
                    <p>This page is protected by Google reCAPtCHA to ensure you're not a bot.
                        <span>Learn More.</span>
                    </p>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default signin;
