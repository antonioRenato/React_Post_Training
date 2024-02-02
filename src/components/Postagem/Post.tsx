import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          
          <Avatar hasBorder src='http://github.com/JFalk21.png' />

          <div className={styles.authorInfo}>
            <strong>Julian Falk</strong>
            <span>Controlador</span>
           </div>
        </div>
        <time title='22 de janeiro de 2024' dateTime='2024-01-22 08:13:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 🐱‍👓</p>
        <p>To jogando muito de Viper ultimamente, mas curto pegar um duelista pra dar bala nos newbes.</p> 
        <p>main reyna na área 🔫</p>
        <p><a href="">julian.instalockreyna@gmail.com</a></p>
        <p>
          <a href="">#reynatbmégente</a>{' '}
          <a href="">#queroserduelista</a>{' '}
          <a href="">#escravotbmjoga</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário...'></textarea>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>        
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}