import Footer from '../components/Footer'
import ListItem from '../components/ListItem'

const licenses = () => {
  return (
    <>
      <h1 className='my-6 text-3xl font-bold text-slate-900 dark:text-white'>More Info</h1>
      <h2 className='mt-12 text-2xl font-semibold text-slate-900 dark:text-white'>Relavant Links</h2>
      <ListItem
        title='GitHub Repository'
        url='https://github.com/anaclumos/tossface-playground'
        text='Completely Open-sourced on GitHub!'
      />
      <ListItem title='Blog Post' url='https://cho.sh/blog/92B47B' text='A postmortem of this project' />

      <h2 className='mt-12 text-2xl font-semibold text-slate-900 dark:text-white'>Licenses and Attributions</h2>
      <ListItem
        title='Tossface'
        url='https://toss.im/tossface/copyright'
        text='Took the open-sourced Tossface emoji library to display the font.'
      />
      <ListItem
        title='Emojipedia: Toss Face'
        url='https://emojipedia.org/toss-face/'
        text='Noted some introduction texts.'
      />
      <ListItem title='Flowbite' url='https://flowbite.com/' text='Noted some Tailwind CSS designs.' />
      <h2 className='mt-12 text-2xl font-semibold text-slate-900 dark:text-white'>Privacy</h2>
      <ListItem
        title='Simple Analytics'
        url='https://simpleanalytics.com/'
        text='Tracking user origin and source of visit without collecting any personal information.'
      />
      <Footer />
    </>
  )
}

export default licenses
