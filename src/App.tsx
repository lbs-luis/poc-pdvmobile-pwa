import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from './screens/root'
import Home from './screens/home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
