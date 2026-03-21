import { useState } from "react";
import styles from "./Post.module.css";

function Post() {
  const [likes, setLikes] = useState(0);

  return (
    <div className={styles.post}>
      <h2>Mi primer post</h2>
      <p>Este es un post de prueba en React 🚀</p>

      <p className={likes > 10 ? styles.verde : styles.azul}>
        Likes: {likes}
      </p>

      <button onClick={() => setLikes(likes + 1)}>
        Me gusta
      </button>

      {likes > 10 && (
        <p className={styles.mensaje}>
          ¡Este post es popular!
        </p>
      )}
    </div>
  );
}

export default Post;