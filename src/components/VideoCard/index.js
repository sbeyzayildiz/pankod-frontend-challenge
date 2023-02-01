import { Link } from "react-router-dom";
import styles from "./style.module.css";
function VideoCard({ streamType }) {
  return (
    <Link to={`/${streamType}`} className={styles.link}>
      <div className={styles.link__card}>
        <span>{streamType}</span>
      </div>
    </Link>
  );
}

export default VideoCard;
