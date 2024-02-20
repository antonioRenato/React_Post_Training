import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

interface PostProps {
  id?: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Array<{ type: string; content: string }>;
  publishedAt: Date;
}

export function Post(props : PostProps) {
  const [comments, setComments] = useState(['Post muito bacana'])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment() {
    event?.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    setNewCommentText(value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          
          <Avatar hasBorder src={props.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
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

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment" 
          placeholder='Deixe um comentário...' 
          value={newCommentText}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => handleNewCommentChange(event)}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>        
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}
      </div>
    </article>
  )
}