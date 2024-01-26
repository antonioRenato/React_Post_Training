import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}></div>
        <img className={styles.avatar} src="http://github.com/JFalk21.png" alt="" />
        <div className={styles.authorInfo}>
          <strong>Julian Falk</strong>
          <span>Controlador</span>
        </div>

        <time title='22 de janeiro de 2024' dateTime='2024-01-22 08:13:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 🐱‍👓</p>
        <p>To jogando muito de Viper ultimamente, mas curto pegar um duelista pra entregar umas rankeds de vez em quando</p>
        <p>😁<a href="">julian.instalockjett@gmail.com</a></p>
        <p><a href="">#controlador #queroserduelista #escravotbmjoga</a></p>
      </div>
    </article>
  )
}