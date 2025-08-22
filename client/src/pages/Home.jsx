export default function Home() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to the MERN App</h1>
        <p className="subhead">A minimal MERN starter with a responsive navigation bar and a modern home page.</p>
        <div className="cta-row">
          <a className="btn primary" href="#get-started">Get started</a>
          <a className="btn" href="/api/health" target="_blank" rel="noreferrer">Check API health</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 22 }}>
          <div className="card">
            <div style={{ fontWeight: 600 }}>React + Vite</div>
            <div style={{ color: 'var(--muted)', fontSize: 14 }}>Fast dev server and modern tooling.</div>
          </div>
          <div className="card">
            <div style={{ fontWeight: 600 }}>Express API</div>
            <div style={{ color: 'var(--muted)', fontSize: 14 }}>Simple server with /api/health.</div>
          </div>
          <div className="card">
            <div style={{ fontWeight: 600 }}>Ready to extend</div>
            <div style={{ color: 'var(--muted)', fontSize: 14 }}>Add MongoDB and routes easily.</div>
          </div>
        </div>
      </div>
    </section>
  )
}