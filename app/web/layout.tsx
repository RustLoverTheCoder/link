import { Suspense } from 'react'
import Loading from './loading'
import { Avatar } from 'components'
import './page.css'

import { login } from '../../services/auth'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const res = await login()
  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-[72px] flex-col items-center space-y-2 bg-white py-6 dark:bg-[#202225]">
        {Array.from(new Array(3)).map((_, index) => (
          <Avatar key={index} />
        ))}
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  )
}
