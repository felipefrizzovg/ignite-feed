import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/felipefrizzovg.png" />
          <div className={styles.authorInfo}>
            <strong>Felipe Frizzo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 de Julho às 15:18" dateTime="2024-07-03 15:18:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        Fala galeraa 👋
        
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        
        
          👉 <a href="">jane.design/doctorcare</a>
        
        
          <a href="">#novoprojeto</a>{" "}
          <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentario"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
