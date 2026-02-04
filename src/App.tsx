import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/app.layout'
import CartScreen from './screens/cart'
import Root from './screens/root'

export default function App() {
  return (
    <Routes>
      <Route index element={<Root to="/cart" />} />
      <Route element={<AppLayout />}>
        <Route path="/cart" element={<CartScreen />} />
      </Route>
    </Routes>
  )
}
