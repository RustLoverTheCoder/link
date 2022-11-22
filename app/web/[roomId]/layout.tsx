import { Suspense } from 'react'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <div className="h-full flex-1 md:w-[240px] md:flex-none" style={{ backgroundColor: 'rgb(47, 49, 54)' }}></div>
      <Suspense fallback={<></>}>{children}</Suspense>
    </div>
  )
}
