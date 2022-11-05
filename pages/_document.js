import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> 
        <Head>
          <link rel="icon" href="/front/images/favicon.ico" type="image/x-icon" />
	        <link rel="shortcut icon" type="image/x-icon" href="/front/images/favicon.png" />

          <link rel="stylesheet" type="text/css" href="/front/css/plugins.css" />
          <link rel="stylesheet" type="text/css" href="/front/css/style.css" />
          <link rel="stylesheet" type="text/css" href="/front/css/templete.css" />
          <link className="skin" rel="stylesheet" type="text/css" href="/front/css/skin/skin-1.css"></link>
        </Head>
        <body id="bg">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createCache({ key: 'css' });
  const { extractCriticalToChunks } = createEmotionServer(cache);
  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
    });
  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
};
