import Head from 'next/head';
//component imports
import Nav from './components/Nav.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>This is the home component</div>
    </div>
  );
}
