import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/ddevitz.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniela Devitz</strong>
              <time title='22 de janeiro de 2024' dateTime='2024-01-22 08:13:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Como já dizia o ditado, nem toda reyna, mas sempre uma reyna 😫</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            <strong>Aplaudir</strong> 
            <span>12</span>
          </button>
        </footer>
      </div>
    </div>
  )
}