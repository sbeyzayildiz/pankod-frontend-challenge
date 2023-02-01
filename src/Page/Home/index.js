import styles from "./style.module.css";
import VideoCard from "../../components/VideoCard";
function Home() {
  const streamTypes = ["movies", "series"];
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>Popular Titles</div>
      <div className={styles.container__content}>
        {streamTypes.map((streamType) => (
          <VideoCard streamType={streamType} key={streamType}></VideoCard>
        ))}
      </div>
      
    </div>
  );
}

export default Home;
