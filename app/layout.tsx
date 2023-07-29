import Sidebar from '@/components/sidebar';
import GlobalCssPriority from '../context/global-css-priority';
import './globals.css';
import { Poppins } from 'next/font/google';
import TopBar from '@/components/topbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '100', '400', '200', '500', '600', '700', '800', '900'],
  variable: '--poppins',
});

export const metadata = {
  title: 'Next | SohanEmon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} ${poppins.variable}`}>
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
