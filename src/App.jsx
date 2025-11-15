
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BatchDetails from './pages/BatchDetails'
import Lessons from './pages/Lessons'
import ContentPage from './pages/ContentPage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/batch/:batchId' element={<BatchDetails />} />
      <Route path='/lessons/:batchId/:chapterId' element={<Lessons />} />
      <Route path='/content/:batchId/:chapterId/:lectureId' element={<ContentPage />} />
    </Routes>
  )
}
