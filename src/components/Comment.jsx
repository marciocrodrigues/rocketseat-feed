import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/getomni.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Teste dos Santos</strong>
              <time
                title="4 de Julho de 2023 às 20:54"
                dateTime="2023-07-23 20:53"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentários">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Apludir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
