import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/getomni.png" />

        <strong>Teste dos Santos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
