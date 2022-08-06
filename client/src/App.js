import './App.scss'
import './pages/home/Home.scss'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Auth from './pages/auth/Auth'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.AUTH_REDUCER.auth)

  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <duv className="blur" style={{ top: '36%', left: '-8rem' }}></duv>

      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route 
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth/>}
        />
      </Routes>
    </div>
  )
}

export default App
