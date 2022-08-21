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
        <title>Tossface</title>
        <meta name='description' content='Tossface' />
        <link rel='icon' href='/uE109.svg' />
        <link rel='mask-icon' href='/uE109.svg' />
      </Head>
      <h1 className='py-1 my-6 text-3xl font-bold text-slate-900 dark:text-white'>Tossface</h1>
      <p className='py-1 text-lg font-medium text-slate-900 dark:text-white'>
        Tossface is an emoji font face a Korean (almost) Decacorn company, Viva Republica, created. Tossface initially
        included a series of intentionally divergent emoji designs, replacing culturally specific Japanese emojis with
        designs representing related Korean concepts and outdated technologies with contemporary technologies.
        Unfortunately, these replacements caused backlash from multiple stakeholders, and Viva Republica had to remove
        the emojis. However, I have proposed returning the emojis using a standard technology known as Unicode Private
        Area; Viva Republica accepted the request. However these emojis remained uncharted in the Unicode standard, and
        there was no way to type them. I created this webpage to make it easy to copy these uncharted emojis. This
        webpage also functions as a visually appealing museum of Korean culture.
      </p>
      <h2 className='py-2 mt-4 text-2xl font-semibold text-slate-900 dark:text-white'>Korean 🇰🇷 Emojis</h2>

      <div className='flex grid flex-wrap justify-center grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {koreanEmoji.map(({ unicode, name, info, link }) => (
          <EmojiListItem key={unicode} name={name} info={info} unicode={unicode} link={link} fn={showNotification} />
        ))}
      </div>
      <h2 className='py-2 mt-4 text-2xl font-semibold text-slate-900 dark:text-white'>Modern Emojis</h2>
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
