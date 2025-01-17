import "../app/assets/css/tailwind.css";
import '../app/assets/css/materialdesignicons.min.css';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400','500','600', '700'],
});

export const metadata = {
  title: 'Dennis - Next Js Personal Portfolio Template',
  description: 'Dennis - Next Js Personal Portfolio Template',
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900 `}>
        {children}
      </body>
    </html>
  )
}
