import { Html, Head, Main, NextScript } from 'next/document' 

export default function Document() {
  return (
    <Html lang='en'>
      <Head >
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* 👇 Here's the script */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}