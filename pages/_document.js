import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Filmcore by Abdullah" key="title"/>
        <meta property="og:description" content="Built by Abdullah" key="description"/>
        <meta
          property="og:image"
          content="https://i.pinimg.com/280x280_RS/e1/a8/ce/e1a8cee33865d65cdcaeea0c704f1db4.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
