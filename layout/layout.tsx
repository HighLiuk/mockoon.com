import Head from 'next/head';
import Script from 'next/script';
import { Fragment, FunctionComponent } from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';
import { FooterCTA } from '../models/common.model';

const Layout: FunctionComponent<{
  footerBanner: FooterCTA;
  children: JSX.Element | JSX.Element[];
}> = function ({ footerBanner, children }) {
  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#252830' />
        <meta name='theme-color' content='#ffffff' />

        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', { 'anonymize_ip': true });`
          }}
        ></Script>
      </Head>
      <Nav />
      {children}
      <Footer banner={footerBanner} />
    </Fragment>
  );
};

export default Layout;
