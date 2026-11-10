import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import ChecklistPage from './pages/ChecklistPage'
import ExercisePlanPage from './pages/ExercisePlanPage'
import './App.css'

function App() {
  return (
    <HashRouter>
      <main className="app-shell">
        <div className="page-shell">
          <header className="site-header">
            <nav className="main-nav" aria-label="Main navigation">
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Checklist
              </NavLink>
              <NavLink
                to="/exercise-plan"
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Exercise Plan
              </NavLink>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<ChecklistPage />} />
            <Route path="/exercise-plan" element={<ExercisePlanPage />} />
          </Routes>
        </div>
      </main>
    </HashRouter>
  )
}

export default App
