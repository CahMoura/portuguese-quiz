import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  backgroung-color: #071e41;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.contrstText};
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

const { theme } = db;
// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

        <title>Brazilian Portuguese Quiz</title>
        <link rel="shortcut icon" href="/AvatarMaker-me" />
        <meta name="title" content="Brazilian Portuguese Quiz" />
        <meta name="description" content="Test your knowledge in Brazilian Portuguese and learning more about this idiom!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Brazilian Portuguese Quiz" />
        <meta property="og:description" content="Test your knowledge in Brazilian Portuguese and learning more about this idiom!" />
        <meta property="og:image" content="https://i.pinimg.com/originals/28/4a/ff/284afff1cd1740a7deaa1fa4ed599f7e.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Brazilian Portuguese Quiz" />
        <meta property="twitter:description" content="Test your knowledge in Brazilian Portuguese and learning more about this idiom!" />
        <meta property="twitter:image" content="https://i.pinimg.com/originals/28/4a/ff/284afff1cd1740a7deaa1fa4ed599f7e.jpg" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  );
}
