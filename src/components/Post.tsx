import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { format, formatDistanceToNow } from "date-fns"; // Para formatar data
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id?: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>("");

  const publishedDateFormated = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio");
  }

  function onDeleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (x) => x !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <div className={styles.post}>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={post.author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormated}
            dateTime={post.publishedAt.toISOString()}
          >
            Publicado {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {post.content.map((line: Content, index: number) => {
            if (line.type === "paragraph") {
              return <p key={index}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={index}>
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name="comment"
            placeholder="Deixe seu comentario"
            value={newCommentText}
            onChange={handleNewCommentText}
            onInvalid={handleNewCommentInvalid}
            required
          ></textarea>
          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.length
            ? comments.map((comment) => {
                return (
                  <Comment
                    key={comment}
                    content={comment}
                    onDeleteComment={onDeleteComment}
                  />
                );
              })
            : false}
        </div>
      </article>
    </div>
  );
}
