import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import NavBar from '@/components/NavBar'
import GlobalStyles from '@/app/GlobalStyles'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <GlobalStyles />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
