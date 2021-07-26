import { FunctionComponent } from 'react';
import DownloadSection from '../components/download-section';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Download: FunctionComponent = function () {
  return (
    <Layout>
      <Meta
        title='Download'
        description='Download Mockoon, the easiest and fastest way to create realistic mock REST APIs. No account required, free and open-source.'
      />

      <Hero
        title='Download Mockoon'
        subtitle='Mockoon is available on the three major OS.'
      />
      <section className='pb-8'>
        <div className='container'>
          <DownloadSection />
        </div>
      </section>
      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='alert alert-dark' role='alert'>
                Learn how to use Mockoon in 5 minutes with our{' '}
                <a href='/tutorials/getting-started/' className='text-gray-500'>
                  getting started tutorial
                </a>
                !
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Download;
