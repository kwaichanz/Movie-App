import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/Store'

// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie/:id' element={<MovieDetail />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  )
}

export default App