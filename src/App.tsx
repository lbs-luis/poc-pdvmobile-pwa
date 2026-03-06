import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/app.layout'
import CartScreen from './screens/cart'
import HomeScreen from './screens/home'
import ProductSearchScreen from './screens/product-search'
import Root from './screens/root'

export default function App() {
  return (
    <Routes>
      <Route index element={<Root to="/home" />} />
      <Route element={<AppLayout />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/product-search" element={<ProductSearchScreen />} />
      </Route>
    </Routes>
  )
}
