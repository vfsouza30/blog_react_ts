
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'src\/assets\/Foto-linkedin.png',
      name: 'Victor',
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-08-28 16:00:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'src/\assets\/Foto-linkedin.png',
      name: 'Fernandes',
      role: "Front end"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-08-27 16:00:00'),
  },
];
function App() {

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
       <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id} 
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

export default App
