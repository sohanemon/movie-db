import Sidebar from '@/components/sidebar';
import GlobalCssPriority from '../context/global-css-priority';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import TopBar from '@/components/topbar';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--openSans',
});

export const metadata = {
  title: 'Movies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${openSans.className} ${openSans.variable}`}>
        <GlobalCssPriority>
          <main className='flex'>
            <Sidebar />{' '}
            <div className='p-4 grow md:p-8 lg:p-11'>
              <TopBar />
              {children}
            </div>
          </main>
        </GlobalCssPriority>
      </body>
    </html>
  );
}
