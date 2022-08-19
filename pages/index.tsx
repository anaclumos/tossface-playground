import React from 'react'
import Head from 'next/head'
import EmojiListItem from '../components/EmojiListItem'
import Footer from '../components/Footer'
import { koreanEmoji, modernEmoji } from '../emoji'
import Notification from '../components/Notification'

const Index = () => {
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false)
  const [notificationString, setNotificationString] = React.useState('Copied to clipboard.')

  const showNotification = (string: string) => {
    setNotificationString(string)
    setIsNotificationOpen(true)
  }

  return (
    <>
      <Head>
        <title>Tossface Playground</title>
        <meta name='description' content='Tossface Playground' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='px-1 mt-6 mb-2 text-2xl font-semibold text-slate-900 dark:text-white'>
        Tossface Emoji Playground
      </h1>
      <p className='px-1 text-base font-medium tracking-tight text-slate-900 dark:text-white'></p>
      <h2 className='px-1 mt-6 mb-2 text-xl font-semibold text-slate-900 dark:text-white'>Korean 🇰🇷 Emojis</h2>
      <div className='flex grid flex-wrap justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {koreanEmoji.map(({ unicode, name, info, link }) => (
          <EmojiListItem key={unicode} name={name} info={info} unicode={unicode} link={link} fn={showNotification} />
        ))}
      </div>
      <h2 className='px-1 mt-6 mb-2 text-xl font-semibold text-slate-900 dark:text-white'>Modern Emojis</h2>
      <div className='flex grid flex-wrap justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {modernEmoji.map(({ unicode, name, info, link }) => (
          <EmojiListItem key={unicode} name={name} info={info} unicode={unicode} link={link} fn={showNotification} />
        ))}
      </div>
      <div>
        <Notification open={isNotificationOpen} onClose={() => setIsNotificationOpen(false)}>
          {notificationString}
        </Notification>
      </div>
      <Footer />
    </>
  )
}

export default Index
