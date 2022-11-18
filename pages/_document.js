import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Roboto:ital,wght@0,100;0,400;0,500;0,900;1,100&display=swap" rel="stylesheet"/>      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;