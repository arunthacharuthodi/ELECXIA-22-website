import Document, { Html, Head, Main, NextScript } from 'next/document'

const googleFontFamilies: string[] = [
  'Gemunu+Libre:wght@400;500'
]

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href={`https://fonts.googleapis.com/css2?${googleFontFamilies
              .map((f) => `family=${f}&`)
              .join('')}display=swap`}
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
