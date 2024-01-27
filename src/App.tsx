import { Header } from "./components/Header/Header"

import styles from './app.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Postagem/Post"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>    
  )
}
