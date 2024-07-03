import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Felipe Frizzo"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi placeat eum delectus amet ducimus aliquam autem, natus vel, aliquid dicta dolores libero reiciendis incidunt deserunt laboriosam neque eveniet hic eligendi?"
          />

          <Post
            author="Raphael Frizzo"
            content="Segundo post"
          />
        </main>
      </div>

    </>
  );
}
