import styles from "./Description.module.css";
import Quote from "./Quote";

function Description() {
  return (
    <section className={styles.stayProductive}>
      <img
        src="./images/bg-curve-mobile.svg"
        alt=""
        className={styles.curveMobile}
      />
      <img
        src="./images/bg-curve-desktop.svg"
        alt=""
        className={styles.curveDesktop}
      />
      <div className={styles.stayProductiveContent}>
        <img
          src="./images/illustration-2.svg"
          alt=""
          className={styles.illustration}
        />
        <div className={styles.stayProductiveContentContent}>
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an isue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <br></br>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required!
        </p>
        <button>
          See how Fylo works <img src="./images/icon-arrow.svg" alt="" />
        </button>
        <Quote /></div>
      </div>
    </section>
  );
}

export default Description;
