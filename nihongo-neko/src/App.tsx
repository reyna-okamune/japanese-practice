import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePageComponent from './HomePageComponent'
import SectionPageComponent from './SectionPageComponent'
import QuizPageComponent from './QuizPageComponent'
import Footer from './Footer'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/:materialRoute" element={<SectionPageComponent />} />
          <Route path="/:materialRoute/:sectionName" element={<QuizPageComponent />} />
        </Routes>
    </Router>

    <Footer />
    </>

  )
}

export default App
