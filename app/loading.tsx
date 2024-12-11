
import Head from 'next/head';
import styles from './loading.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Water Loader Animation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.water}></div>
    </>
  );
}

