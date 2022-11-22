import { Suspense } from 'react'
import Loading from './loading'
import './page.css'

import { login } from '../../services/auth'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const res = await login()
  return (
    <div className="flex h-screen w-full">
      <div className="h-full w-[72px]" style={{ backgroundColor: 'rgb(32, 34, 37)' }}></div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  )
}
