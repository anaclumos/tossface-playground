import Head from 'next/head'
import EmojiListItem from '../components/EmojiListItem'
import Footer from '../components/Footer'

const index = () => (
  <>
    <Head>
      <title>Tossface Playground</title>
      <meta name='description' content='Tossface Playground' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <h1 className='text-2xl font-semibold text-slate-900 dark:text-white'>TossFace Emoji Playground!</h1>
    <p className='py-6 text-base font-medium tracking-tight text-slate-900 dark:text-white'>
      토스페이스는 비바리퍼블리카가 제작한 이모지 폰트입니다. 한국적, 시대적 가치를 담은 이모지가 v1.3에 재배포됨을
      기념하며 쉽게 복사할 수 있도록 이 사이트를 제작했습니다.
    </p>
    <EmojiListItem
      title='Tossface'
      text='Tossface is an emoji library designed by a Korean Decacorn company Toss.'
      emoji='🤖'
      learnmore='https://toss.im/tossface/copyright'
    />
    <Footer />
  </>
)

export default index
