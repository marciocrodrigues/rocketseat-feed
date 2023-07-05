import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://github.com/getomni.png" />
            <div className={styles.authorInfo}>
              <strong>Teste dos Santos</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="4 de Julho de 2023 às 20:54" dateTime="2023-07-23 20:53">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa</p>
          <p>Acabei de subir mais um projeto no meu portifa.</p>
          <p>
            <a href="#">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
            <a href="#">#rocketseat</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea placeholder="Deixe seu comentario"></textarea>
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
    </div>
  );
}
