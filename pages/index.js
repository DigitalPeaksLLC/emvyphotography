import Head from 'next/head';
//component imports
import Nav from './components/Nav.js';
import Layout from './components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>This is the home component</div>
    </Layout>
  );
}
