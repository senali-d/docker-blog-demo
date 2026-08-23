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
        <article key={post.id} className="post" id={`post-${post.id}`}>
          <h2 className="post-title">
            <a href={`#post-${post.id}`}>{post.title}</a>
          </h2>
          <p className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-author">{post.author}</span>
          </p>
          <div className="post-content-3">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </main>
  )
}

export default App
