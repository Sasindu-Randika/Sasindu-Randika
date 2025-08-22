import { Outlet } from 'react-router-dom'
import './app.css'
import Navbar from '../components/Navbar'

export default function App() {
  return (
    <div className="app">
      <Navbar />
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