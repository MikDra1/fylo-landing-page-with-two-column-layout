import styles from "./Loader.module.css";
import {  Watch } from 'react-loader-spinner'


function Loader() {
  return (
    <div className={styles.loader}>
<Watch
  visible={true}
  height="80"
  width="80"
  radius="48"
  color="hsl(224, 93%, 58%)"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
}

export default Loader;
