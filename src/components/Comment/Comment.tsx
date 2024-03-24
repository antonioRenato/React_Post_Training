import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react';

interface PropsContent {
  content: string;
  onDeleteComment: (comment : string) => void; 
}

export function Comment(props: PropsContent) {
  const [likeCount, setLikeCount] = useState(0);
  
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  
  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ddevitz.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniela Devitz</strong>
              <time title='22 de janeiro de 2024' dateTime='2024-01-22 08:13:00'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            <strong>Aplaudir</strong> 
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}