import Head from 'next/head'
import Footer from '../components/Footer'

const index = () => (
  <>
    <Head>
      <title>Tossface Playground</title>
      <meta name='description' content='Tossface Playground' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <h1 className='text-2xl font-semibold text-slate-900 dark:text-white'>TossFace Emoji Playground!</h1>
    <p className='text-base font-medium tracking-tight text-slate-900 dark:text-white'>
      The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
    </p>
    <div className='mx-auto'>
      <a className='mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white' href='yo'>
        Yo
      </a>
      <div className='mt-2 text-sm text-slate-500 dark:text-slate-400'>This is a text</div>
    </div>
    <Footer />
  </>
)

export default index
