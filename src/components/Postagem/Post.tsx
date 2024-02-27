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

  function deleteComment(commentToDelete : string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    
    setComments(commentsWithoutDeletedOne);
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
        {props.content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
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
          return (
            <Comment 
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}