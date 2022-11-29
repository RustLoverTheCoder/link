import { Suspense, use } from 'react'
import Loading from './loading'
import { List } from 'components'
// import { notFound } from 'next/navigation'
// import { getCurrentUser } from 'utils/session'
import './page.css'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // const user = await getCurrentUser()
  // if (!user) {
  //   return notFound()
  // }
  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-[72px] overflow-hidden bg-white  dark:bg-[#202225]">
        <List />
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  )
}
