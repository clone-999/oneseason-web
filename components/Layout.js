import React from 'react'
import Head from 'next/head';

function Layout({ title, description, children }) {
  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="author" content="David" />
            <meta name="robots" content="" />
            <meta property="og:title" content={title ? `${title} - OneSeason` : 'OneSeason'} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:image" content="" />
            <meta name="format-detection" content="telephone=no" />
            <title>{title ? `${title} - OneSeason` : 'OneSeason'}</title>
            {description && <meta name="description" content={description} />}

            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="page-wraper">
            {children}
        </div>

    </>
  )
}

export default Layout