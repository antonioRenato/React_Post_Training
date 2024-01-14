import { Header } from "./components/Header/Header"

import styles from './app.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar/Sidebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <span>Teste testando super testando</span>
          <span>Teste testando super testando</span>
        </main>
      </div>
    </div>    
  )
}
