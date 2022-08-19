import Footer from '../components/Footer'
import LicenseItem from '../components/LicenseItem'

const licenses = () => {
  return (
    <>
      <h2 className='text-2xl font-semibold text-slate-900 dark:text-white'>Licenses and Attributions</h2>
      <LicenseItem title='Tossface' url='https://toss.im/tossface/copyright' text='Open-sourced the Tossface Emoji.' />
      <LicenseItem
        title='Emojipedia: Toss Face'
        url='https://emojipedia.org/toss-face/'
        text='Grabbed some introduction texts.'
      />
      <Footer />
    </>
  )
}

export default licenses
