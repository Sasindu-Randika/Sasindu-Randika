import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
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
  )
}