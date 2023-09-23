import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import PracticeQuestion from './pages/Practice'
import BaseLayout from './components/BaseLayout'
import PortfolioHome from './components/home/PortfolioHome'
import PortfolioAbout from './components/about/PortfolioAbout'
import PortfolioPortfolio from './components/portfolio/PortfolioPortfolio'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="practice" element={<PracticeQuestion />} />
        <Route path="founder" element={<BaseLayout />}>
          <Route path="" element={<PortfolioHome />} />
          <Route path="about" element={<PortfolioAbout />} />
          <Route path="portfolio" element={<PortfolioPortfolio />} />
          <Route path="home" element={<PortfolioHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
