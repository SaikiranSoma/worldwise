import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import HomePAge from "../pages/HomePAge";
function Logo() {
  return (
    <Link to='homepage'>
      <img src="/src/icon.png" alt="WorldWise logo" className={styles.logo}  />
    </Link>
  );
}

export default Logo;
