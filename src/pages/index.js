// src/pages/index.js

import Head from 'next/head';
import Nagtalon from '../../components/Nagtalon';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quiz Application</title>
        <meta name="description" content="A simple quiz application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main style={{ padding: '20px' }}>
        <h1>Welcome to the Quiz Application!</h1>
        <Nagtalon />
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>2024 Quiz Application..</p>
      </footer>
    </div>
  );
}
