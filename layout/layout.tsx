import Head from 'next/head';
import React, { Fragment } from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';

class Layout extends React.Component {
  render() {
    return (
      <Fragment>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#252830' />
          <meta name='theme-color' content='#ffffff' />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-TKYQRWTZ0P'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', { 'anonymize_ip': true });`
            }}
          ></script>
        </Head>
        <Nav />
        {this.props.children}
        <Footer />
        <script src='https://buttons.github.io/buttons.js' defer />
      </Fragment>
    );
  }
}

export default Layout;
