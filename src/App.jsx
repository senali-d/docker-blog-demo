import posts from './posts'
import './App.css'

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Docker Blog</h1>
        <p className="subtitle">A demo blog about Docker</p>
      </header>

      {posts.map((post) => (
        <article key={post.id} className="post">
          <h2>{post.title}</h2>
          <p className="post-meta">
            {post.date} &middot; {post.author}
          </p>
          <p className='post-content'>
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </p>
        </article>
      ))}
    </main>
  )
}

export default App
