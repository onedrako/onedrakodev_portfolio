import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>OneDrako Developer</title>
        <link rel="icon" type="image/x-icon" href="https://i.imgur.com/jBuNYci.png"/>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="FullStack React - Next Developer - OneDrako´s Portfolio (Gabriel Hernández Valdez), where I included my personal developer projects, technologies I have used, certificates and experience and a little space about what I do" />
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content="Gabriel Hernandez Valdez, Gabriel Hernandez, onedrako, OneDrako, react,js, next frontend developer, backend developer, fullstack developer, javascript, web developer, developer, portfolio, developer porfolio" />
        <meta name="author" content="onedrako"/>
        <link rel="apple-touch-icon" href="/https://i.imgur.com/jBuNYci.png"></link>
        <html lang="en"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
