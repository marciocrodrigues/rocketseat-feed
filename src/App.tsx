import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/getomni.png",
      name: "Teste dos Santos",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa",
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-07-05 17:17"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/getomni.png",
      name: "Teste da Silva",
      role: "Senyor Analist",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala turma",
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "link",
        content: "teste.design/doctorteste",
      },
    ],
    publishedAt: new Date("2023-06-05 16:17"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}

export default App;
