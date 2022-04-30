import {NextPage} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import styles from './styles/Posts.module.scss';
import Layout from '../../components/layout/layout';

const FirstPost: NextPage = () => {
  return (
    <Layout type={'blue'}>
      <Head>
        <title>DRG</title>
        <link rel="icon" href="/images/drg.png"/>
      </Head>
      <Script src={"https://connect.facebook.net/ja_JP/sdk.js"} strategy={"lazyOnload"} onLoad={() => console.log('geefefef')} />
      <h1 className={styles.postHeader}>First Post</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Image src='/images/drg.png' alt="drgoon" height={64} width={64} layout={'fixed'} />
    </Layout>
  )
}

export default FirstPost;
