import Head from 'next/head'
import Meta from '../components/Meta'

export default (props) =>
  <main class="Layout">
    <Head>
      <Meta/>
    </Head>
    {props.children}
  </main>
