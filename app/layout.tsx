import { AnalyticsWrapper } from 'components/analytics'
import { headers } from 'next/headers'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log('cookie', headers().get('cookie'))
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
