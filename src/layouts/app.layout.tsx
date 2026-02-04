import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <main className="relative flex h-dvh w-screen flex-col">
      <Outlet />
    </main>
  )
}
