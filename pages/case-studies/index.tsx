import Card from '../../components/card';
import Hero from '../../components/hero';
import Meta from '../../components/meta';
import Layout from '../../layout/layout';
import { ArticleList } from '../../models/common.model';
import { buildIndexStaticProps } from '../../utils/static-builders';
import { orderArticles } from '../../utils/utils';

const meta = {
  title: 'Case studies',
  description:
    "Discover how Mockoon's users improve their API design and development workflows with our fast and easy to use API tooling."
};

export async function getStaticProps() {
  const staticProps = buildIndexStaticProps(
    require.context('../../content/case-studies/', false, /\.md$/)
  );

  staticProps.props.articles = orderArticles(staticProps.props.articles);

  return staticProps;
}

export default function CaseStudies(props: { articles: ArticleList }) {
  return (
    <Layout>
      <Meta title={meta.title} description={meta.description} />
      <Hero title={meta.title} subtitle={meta.description} />

      <section className='pb-8'>
        <div className='container'>
          <div className='row d-flex flex-column flex-lg-row'>
            <div className='mx-auto my-lg-3 col-12 col-xxl-10'>
              {props.articles.map((article) => {
                return (
                  <Card
                    key={article.slug}
                    data={{
                      title: article.data.title,
                      description: article.data.excerpt,
                      imageSrc: `/images/case-studies/${article.data.image}`,
                      imageAlt: article.data.imageAlt,
                      links: [
                        {
                          src: `/case-studies/${article.slug}`,
                          text: 'Read more'
                        }
                      ]
                    }}
                    cover={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
