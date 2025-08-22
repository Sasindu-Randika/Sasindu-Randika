import { Outlet, NavLink } from 'react-router-dom'
import './app.css'

export default function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="container nav-inner">
          <NavLink to="/" className="brand" aria-label="Go to home">
            <span className="logo" aria-hidden="true"></span>
            <span>MERN App</span>
          </NavLink>
          <nav className="nav-links" aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <a href="https://react.dev" target="_blank" rel="noreferrer">Docs</a>
            <a href="/api/health" target="_blank" rel="noreferrer">API Health</a>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand-inline">
            <span className="logo" aria-hidden="true"></span>
            <span>© <span id="year"></span> MERN App</span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}