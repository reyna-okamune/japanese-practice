import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePageComponent from './HomePageComponent'
import QuizPageComponent from './QuizPageComponent'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/quiz" element={<QuizPageComponent />} />
      </Routes>
    </Router>
  )
}

export default App
