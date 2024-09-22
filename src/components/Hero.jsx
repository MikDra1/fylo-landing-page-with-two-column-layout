import styles from './Hero.module.css'

function Hero() {
    return (
        <section className={styles.hero}>
          <img src="./images/illustration-1.svg" alt="" /> 
          <div className={styles.heroContent}>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>Fylo stores your most important files in one secure location. Acess them wherever you need, share and collaborate with friends, family, and co-workers</p>
          <div className={styles.form}>
          <input type="email" name="" className='input' id='inputHero' placeholder='Enter your email...'  />
          <label htmlFor="InputHero">Please check your email</label>
          <button className='btn'>Get Started</button>
          </div>
          </div>
        </section>
    )
}

export default Hero
