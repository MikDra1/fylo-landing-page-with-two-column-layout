import styles from './Quote.module.css'

function Quote() {
    return (
        <div className={styles.quote}>
            <img src="./images/icon-quotes.svg" alt="" />
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>

            <div className={styles.person}>
                <img src="./images/avatar-testimonial.jpg" alt="" />
               <div>
               <h3>Kyle Burton</h3>
               <p>Founder & CEO, Huddle</p>
               </div>
            </div>
        </div>
    )
}

export default Quote
