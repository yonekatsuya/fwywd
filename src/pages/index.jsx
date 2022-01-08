import IndexCt from 'constants/IndexCt';
import AboutMe from 'components/index/AboutMe';
import AboutSelf from 'components/index/AboutMeCard';
import MyFuture from 'components/index/MyFuture';
import PageMain from 'components/index/PageMain';
import Skills from 'components/index/Skills';
import Values from 'components/index/Values';
import Layout from 'layouts/Layout';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Image from 'next/image';

let indexCt = new IndexCt();

export default function Index() {
  return (
    <Layout title={indexCt.pageTitle} description={indexCt.pageDescription}>
      <PageMain />
      <AboutMe />
      <Skills />
      <Values />
      <MyFuture />
    </Layout>
  );
}
