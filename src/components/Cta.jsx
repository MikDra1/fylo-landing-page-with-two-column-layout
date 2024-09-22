import styles from './Cta.module.css'

function Cta() {
    return (
        <section className={styles.cta}>
            <div className={styles.ctaContent}>
                <div>
            <h2>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            </div>
            <div className={styles.form}>
            <input type="email" placeholder='email@example.com' className='input' id='input' />
            <label htmlFor="input">Please check your email</label>
            <button className='btn'>Get Started For Free</button>
            </div>
            </div>
        </section>
    )
}

export default Cta
