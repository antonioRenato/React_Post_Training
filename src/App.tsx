import { Header } from "./components/Header/Header"

import styles from './app.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Postagem/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JFalk21.png',
      name: 'Julian Falk',
      role: 'Duelista'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 🐱‍👓'},
      { type: 'paragraph', content: 'To jogando muito de Viper ultimamente, mas curto pegar um duelista pra dar bala nos newbes' },
      { type: 'paragraph', content: 'main reyna na área 🔫' },
      { type: 'link', content: 'julian.instalockreyna@gmail.com' }
    ],
    publishedAt: new Date('2024-01-21 16:50:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ddevitz.png',
      name: 'Daniela Devitz',
      role: 'Iniciadora'
    },
    content: [
      { type: 'paragraph', content: 'Hellooo 🎮' },
      { type: 'paragraph', content: 'Melhor Fade do brasil here guys, só sentar e ver o show' },
      { type: 'paragraph', content: 'Fica ligado que o dragão morde 🐲' },
      { type: 'link', content: 'Dani.bestfadeofbrazil@gmail.com' }
    ],
    publishedAt: new Date('2024-01-19 19:30:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map (post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>    
  )
}
