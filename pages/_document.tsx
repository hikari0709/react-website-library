import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </Html>
  );
}
