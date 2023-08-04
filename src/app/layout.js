import './globals.css'
// import { Inter } from 'next/font/google'
import localFont from '@next/font/local'

// const inter = Inter({ subsets: ['latin'] })
const bukra = localFont({
  src: [
    {
      path: '../../public/fonts/29ltbukraregular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/29ltbukrabold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-bukra'
})
const shamel = localFont({
  src: [
    {
      path: '../../public/fonts/ArbFONTS-FFShamelFamily-SansOneBook.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/ArbFONTS-FFShamelFamily-SansOneBold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-shamel'
})

export const metadata = {
  title: 'Athar Landing Page',
  description: 'Athar Digital Marketing Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl'  className={`${bukra.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
