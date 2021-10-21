import React from 'react';
import Typed from 'react-typed';
import Card from '../components/card';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Testimonial from '../components/testimonial';
import { hpFeatures } from '../data/hp-features';
import { hpHighlights } from '../data/hp-highlights';
import { testimonials } from '../data/testimonials';
import Layout from '../layout/layout';

const meta = {
  title: 'Create mock APIs in seconds with Mockoon',
  description:
    'Mockoon is the easiest and quickest way to run mock REST API servers. No remote deployment, no account required, free, open source and cross-platform.'
};
const companyLogos = [
  { src: '/images/logos/impala.svg' },
  { src: '/images/logos/picpay.svg' },
  { src: '/images/logos/daimler.svg' },
  { src: '/images/logos/amadeus.svg' },
  { src: '/images/logos/localazy.svg' },
  { src: '/images/logos/koreanair.svg' },
  { src: '/images/logos/wargaming.svg' },
  { src: '/images/logos/rbc.svg' },
  { src: '/images/logos/cloudflight.svg' },
  { src: '/images/logos/shopee.svg' },
  { src: '/images/logos/ford.svg' },
  { src: '/images/logos/walmart.svg' }
];

class Index extends React.Component<{}, { companyLogos: any }> {
  constructor(props) {
    super(props);
    this.state = { companyLogos };
  }

  componentDidMount() {
    // ensure that random things are on client only
    this.setState({
      companyLogos: companyLogos.sort(() => 0.5 - Math.random())
    });
  }

  render() {
    return (
      <Layout>
        <Meta title={meta.title} description={meta.description} />

        <Hero
          title="Create <span className='text-primary'>mock APIs</span> in seconds"
          subtitle='Mockoon is the easiest and quickest way to design and run mock REST APIs.<br>No remote deployment, no account required, <strong>free</strong> and <strong>open-source</strong>.'
          cta={[
            {
              text: 'Download',
              link: '/download/'
            },
            {
              text: 'Documentation',
              link: '/docs/latest/about/'
            }
          ]}
          mainPicture='/images/hp-hero.png'
          mainPictureAlt='Mockoon screenshot with people working'
        />

        <section className='py-6 py-md-8 border-top bg-gradient-light-white'>
          <div className='container'>
            <h4 className='text-muted text-center pb-6 fw-bold'>
              Trusted by awesome teams
            </h4>
            <div className='row align-items-center justify-content-center'>
              {this.state.companyLogos.slice(0, 6).map((logo, logoIndex) => (
                <div
                  key={`logo${logoIndex}`}
                  className='col-6 col-sm-3 col-lg-2 mb-4 mb-md-0 px-xl-8 text-center'
                >
                  <div className='img-fluid mb-2 mb-md-0'>
                    <img src={logo.src} alt='' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-5 py-lg-10' id='download'>
          <div className='container'>
            <div className='row justify-content-around'>
              <div className='col-12 col-md-4'>
                <blockquote className='blockquote mb-8 mb-md-0'>
                  <div className='img-fluid mb-5 mb-md-6'>
                    <img
                      src='/images/case-studies/impala/logo-dark.svg'
                      style={{ maxWidth: '40%' }}
                      alt=''
                    />
                  </div>

                  <p className='lead text-gray-700 mb-5 mb-md-6'>
                    "Mockoon is the answer to just about every mocking need you
                    might have."
                    <br />
                    <a
                      href='/case-studies/impala-api-ux-user-research/'
                      className='fs-5'
                    >
                      Read more
                    </a>
                  </p>

                  <p className='fs-sm fw-bold mb-0'>Yasmin Desai</p>
                  <p className='fs-sm text-muted mb-0'>
                    Senior Product Manager @ Impala
                  </p>
                </blockquote>
              </div>
              <div className='col-12 col-md-4'>
                <blockquote className='blockquote mb-0'>
                  <div className='img-fluid mb-5 mb-md-6'>
                    <img
                      src='/images/case-studies/localazy/logo-dark.svg'
                      style={{ maxWidth: '40%' }}
                      alt=''
                    />
                  </div>

                  <p className='lead text-gray-700 mb-4 mb-md-6'>
                    "Mockoon was easy to start with, was fast and lightweight.
                    One clear purpose tool which immediately solved our
                    problem."
                    <br />
                    <a
                      href='/case-studies/localazy-speed-development-api-mocking/'
                      className='fs-5'
                    >
                      Read more
                    </a>
                  </p>

                  <p className='fs-sm fw-bold mb-0'>Jan Bílek</p>
                  <p className='fs-sm text-muted mb-0'>
                    Product Manager @ Localazy
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className='py-5 py-lg-10 border-top bg-gradient-light-white'>
          <div className='container'>
            <div className='row'>
              {hpHighlights.map((highlight, highlightIndex) => (
                <div
                  className='col-12 col-md-4'
                  key={`highlight${highlightIndex}`}
                >
                  <div className='row'>
                    <div className='col-10 col-lg-8 text-primary mb-3'>
                      <img
                        src={highlight.imgSrc}
                        className='img-fluid p-4'
                        alt={highlight.imgAlt}
                      />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <h3 className='fw-bold'>{highlight.title}</h3>

                      <p
                        className='text-muted mb-6 mb-md-0'
                        dangerouslySetInnerHTML={{
                          __html: highlight.description
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='features' className='py-5 py-lg-10'>
          <div className='container text-lg-start text-center'>
            {hpFeatures.map((feature, featureIndex) => {
              return (
                <div
                  className='row py-5 py-lg-8 align-items-center justify-content-between'
                  key={`feature${featureIndex}`}
                >
                  <div
                    className={`col-12 col-lg-5 pb-sm-10 pb-lg-0 ${
                      featureIndex % 2 === 0 ? 'order-lg-2' : 'order-lg-1'
                    }`}
                  >
                    <span className='badge rounded-pill bg-primary-soft mb-3'>
                      <span className='h6 text-uppercase'>{feature.label}</span>
                    </span>

                    <h3 className='h2 fw-bold'>{feature.title}</h3>

                    <p className='fs-lg text-gray-700'>{feature.description}</p>
                    <div>
                      {feature.cta && (
                        <a
                          className='btn btn-secondary-soft btn-xs mt-5'
                          href={feature.ctaLink}
                        >
                          {feature.cta}&nbsp;→
                        </a>
                      )}
                    </div>
                  </div>
                  <div
                    className={`col-12 col-lg-7 ${
                      featureIndex % 2 === 0 ? 'order-lg-1' : 'order-lg-2'
                    }`}
                  >
                    <div
                      className={`mb-6 mb-lg-0 ${
                        featureIndex % 2 === 0 ? 'text-start' : 'text-end'
                      }`}
                    >
                      <img
                        src={feature.imgSrc}
                        alt={feature.imgAlt}
                        className='img-fluid'
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id='testimonials'
          className='border-top bg-gradient-light-white py-5 py-lg-10'
        >
          <div className='container'>
            <div className='row'>
              <div className='justify-content-center'>
                <div className='col-12 text-center'>
                  <h2 className='fw-bold'>
                    Trusted by thousands of
                    <br />
                    <Typed
                      strings={[
                        'developers',
                        'testers',
                        'product managers',
                        'UX researchers',
                        'API designers',
                        'technical writers'
                      ]}
                      typeSpeed={50}
                      backSpeed={50}
                      backDelay={700}
                      loop={true}
                      className={'text-primary'}
                    />
                  </h2>
                </div>
              </div>
            </div>
            <div className='row mt-5 justify-content-center'>
              <div
                className='col-md-6 col-lg-4 col-xl-4 d-flex text-center'
                key='testimonial0'
              >
                <Testimonial
                  link={testimonials[0].link}
                  imgSrc={testimonials[0].imgSrc}
                  name={testimonials[0].name}
                >
                  {testimonials[0].text}
                </Testimonial>
              </div>
            </div>
            <div className='row mt-5 justify-content-center'>
              {testimonials.map((testimonial, testimonialIndex) => {
                return (
                  testimonialIndex > 0 && (
                    <div
                      className='col-md-6 col-lg-4 col-xl-3 d-flex text-center'
                      key={`testimonial${testimonialIndex}`}
                    >
                      <Testimonial
                        link={testimonial.link}
                        imgSrc={testimonial.imgSrc}
                        name={testimonial.name}
                        small
                      >
                        {testimonial.text}
                      </Testimonial>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </section>

        <section
          id='case-studies'
          className='border-top bg-gradient-light-white py-5 py-lg-10'
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 text-center pb-4'>
                <h2 className='mb-1 fw-bold'>Case studies</h2>
                <p className='text-gray-700 fs-lg'>
                  Discover how Mockoon's users improve their API design and
                  development workflows with our fast and easy to use API
                  tooling.
                </p>
              </div>

              <div className='col-12 text-center'>
                <div className='row'>
                  <div className='mx-auto my-lg-3 col-12 col-lg-4 '>
                    <Card
                      data={{
                        title: 'Uses Mockoon to conduct API UX research',
                        imageSrc: '/images/case-studies/impala/logo-dark.svg',
                        imageAlt: 'Impala logo',
                        links: [
                          {
                            src: '/case-studies/impala-api-ux-user-research/',
                            text: 'Read more'
                          }
                        ]
                      }}
                      vertical
                      cover={false}
                      border={true}
                      borderColor={'#000'}
                      synchronizedColors={true}
                    />
                  </div>
                  <div className='mx-auto my-lg-3 col-12 col-lg-4 '>
                    <Card
                      data={{
                        title:
                          'Uses API mocking to speed up application development and testing',
                        imageSrc: '/images/case-studies/localazy/logo-dark.svg',
                        imageAlt: 'Localazy logo',
                        links: [
                          {
                            src: '/case-studies/localazy-speed-development-api-mocking/',
                            text: 'Read more'
                          }
                        ]
                      }}
                      vertical
                      cover={false}
                      border={true}
                      borderColor={'#066fef'}
                      synchronizedColors={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Index;
