import { Metadata } from 'next';
import './styles/globals.css';
import Page from '@/src/app/page';

export const metadata: Metadata = {
  title: 'React Component Parts',
  description: 'Reactで作成したWebサイト用のパーツ集',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja">
    <head></head>
    <body>{children}</body>
  </html>
);
export default RootLayout;
